import HomePageConfig from '../models/HomePageConfig.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialHomePageData, initialSectionsOrder } from '../utils/initialHomePageData.js';

// Deep clone helper
const cloneData = (data) => JSON.parse(JSON.stringify(data));

// Synchronize sections list helper
const buildSectionsList = (sectionsOrder = [], sections = {}) => {
  return sectionsOrder.map((key, index) => {
    const sec = sections[key] || {};
    return {
      sectionKey: key,
      name: sec.title || sec.name || key,
      order: index + 1,
      isEnabled: sec.isVisible !== false && sec.isEnabled !== false,
      content: sec
    };
  });
};

// In-memory runtime cache initialized with full default data
let memoryHomeData = {
  sectionsOrder: cloneData(initialSectionsOrder),
  sections: cloneData(initialHomePageData.sections),
  sectionsList: buildSectionsList(initialSectionsOrder, initialHomePageData.sections)
};

/**
 * Helper to ensure a valid config document exists in MongoDB or fallback to memory
 */
const getOrCreateConfig = async () => {
  try {
    let config = await HomePageConfig.findOne({ pageKey: 'home' });
    if (!config) {
      const defaultSectionsList = buildSectionsList(
        initialHomePageData.sectionsOrder || initialSectionsOrder,
        initialHomePageData.sections
      );
      config = await HomePageConfig.create({
        pageKey: 'home',
        sectionsOrder: initialHomePageData.sectionsOrder || initialSectionsOrder,
        sections: initialHomePageData.sections,
        sectionsList: defaultSectionsList
      });
    }
    return config;
  } catch (error) {
    // If MongoDB is offline or unavailable, return null to use memory cache
    return null;
  }
};

/**
 * Format payload for API response with unified properties
 */
const formatHomeResponse = (sectionsOrder, sections) => {
  const order = Array.isArray(sectionsOrder) && sectionsOrder.length > 0
    ? sectionsOrder
    : initialSectionsOrder;
  const secs = sections && typeof sections === 'object' && Object.keys(sections).length > 0
    ? sections
    : initialHomePageData.sections;
  const list = buildSectionsList(order, secs);

  return {
    sectionsOrder: order,
    sections: secs,
    sectionsList: list
  };
};

/**
 * @desc Get public Home Page data (for Home.jsx)
 * @route GET /api/v1/home-page
 * @access Public
 */
export const getHomePageData = asyncHandler(async (req, res) => {
  try {
    const config = await getOrCreateConfig();
    if (config) {
      const responseData = formatHomeResponse(config.sectionsOrder, config.sections);
      return successResponse(res, 'Home page data retrieved successfully', responseData);
    }
  } catch {
    // Fall through to memory
  }

  return successResponse(res, 'Home page data retrieved from cache', memoryHomeData);
});

/**
 * @desc Get all 22 Home Page sections for admin management
 * @route GET /api/v1/home-page/admin
 * @access Private/Admin
 */
export const getHomePageAdmin = asyncHandler(async (req, res) => {
  try {
    const config = await getOrCreateConfig();
    if (config) {
      const responseData = formatHomeResponse(config.sectionsOrder, config.sections);
      return successResponse(res, 'Home page admin configuration retrieved', responseData);
    }
  } catch {
    // Fall through to memory
  }

  return successResponse(res, 'Home page admin configuration retrieved from cache', memoryHomeData);
});

/**
 * @desc Get single section by key
 * @route GET /api/v1/home-page/section/:key or /api/v1/home-page/sections/:key
 * @access Public/Admin
 */
export const getSectionByKey = asyncHandler(async (req, res) => {
  const { key } = req.params;

  try {
    const config = await getOrCreateConfig();
    if (config && config.sections && config.sections[key]) {
      return successResponse(res, `Section '${key}' retrieved successfully`, config.sections[key]);
    }
  } catch {
    // Fall through to memory
  }

  if (memoryHomeData.sections && memoryHomeData.sections[key]) {
    return successResponse(res, `Section '${key}' retrieved from cache`, memoryHomeData.sections[key]);
  }

  if (initialHomePageData.sections && initialHomePageData.sections[key]) {
    return successResponse(res, `Section '${key}' retrieved from initial defaults`, initialHomePageData.sections[key]);
  }

  return errorResponse(res, `Section '${key}' not found`, 404);
});

/**
 * @desc Update a section's content and metadata
 * @route PUT /api/v1/home-page/section/:key or /api/v1/home-page/sections/:key
 * @access Private/Admin
 */
export const updateSectionContent = asyncHandler(async (req, res) => {
  const { key } = req.params;
  const sectionData = req.body;

  if (!sectionData || typeof sectionData !== 'object') {
    return errorResponse(res, 'Section data payload is required', 400);
  }

  try {
    const config = await getOrCreateConfig();
    if (config) {
      const updatedSections = {
        ...(config.sections || initialHomePageData.sections),
        [key]: sectionData
      };
      config.sections = updatedSections;
      config.sectionsList = buildSectionsList(config.sectionsOrder, updatedSections);
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(res, `Section '${key}' updated successfully`, memoryHomeData);
    }
  } catch {
    // Fall through to memory
  }

  memoryHomeData.sections[key] = sectionData;
  memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

  return successResponse(res, `Section '${key}' updated in cache`, memoryHomeData);
});

/**
 * @desc Toggle a section active/inactive (isEnabled / isVisible)
 * @route PATCH /api/v1/home-page/section/:key/toggle or /api/v1/home-page/sections/:key/toggle
 * @access Private/Admin
 */
export const toggleSectionStatus = asyncHandler(async (req, res) => {
  const { key } = req.params;

  try {
    const config = await getOrCreateConfig();
    if (config && config.sections) {
      const current = config.sections[key] || initialHomePageData.sections[key] || {};
      const currentVisible = current.isVisible !== false && current.isEnabled !== false;
      const newVisibility = !currentVisible;

      const updatedSection = {
        ...current,
        isVisible: newVisibility,
        isEnabled: newVisibility
      };

      config.sections = {
        ...config.sections,
        [key]: updatedSection
      };
      config.sectionsList = buildSectionsList(config.sectionsOrder, config.sections);
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(
        res,
        `Section '${key}' is now ${newVisibility ? 'visible' : 'hidden'}`,
        updatedSection
      );
    }
  } catch {
    // Fall through to memory
  }

  if (memoryHomeData.sections) {
    const current = memoryHomeData.sections[key] || initialHomePageData.sections[key] || {};
    const currentVisible = current.isVisible !== false && current.isEnabled !== false;
    const newVisibility = !currentVisible;

    memoryHomeData.sections[key] = {
      ...current,
      isVisible: newVisibility,
      isEnabled: newVisibility
    };
    memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

    return successResponse(
      res,
      `Section '${key}' is now ${newVisibility ? 'visible' : 'hidden'}`,
      memoryHomeData.sections[key]
    );
  }

  return errorResponse(res, `Section '${key}' not found`, 404);
});

/**
 * @desc Reorder sections
 * @route PATCH /api/v1/home-page/reorder or PUT /api/v1/home-page/reorder
 * @access Private/Admin
 */
export const reorderSections = asyncHandler(async (req, res) => {
  const orderedKeys = req.body.sectionsOrder || req.body.orderedKeys || req.body.sections;

  if (!Array.isArray(orderedKeys) || orderedKeys.length === 0) {
    return errorResponse(res, 'sectionsOrder array is required', 400);
  }

  try {
    const config = await getOrCreateConfig();
    if (config) {
      config.sectionsOrder = orderedKeys;
      config.sectionsList = buildSectionsList(orderedKeys, config.sections || initialHomePageData.sections);
      config.markModified('sectionsOrder');
      config.markModified('sectionsList');
      await config.save();

      memoryHomeData = formatHomeResponse(config.sectionsOrder, config.sections);

      return successResponse(res, 'Home page sections reordered successfully', memoryHomeData);
    }
  } catch {
    // Fall through to memory
  }

  memoryHomeData.sectionsOrder = orderedKeys;
  memoryHomeData.sectionsList = buildSectionsList(orderedKeys, memoryHomeData.sections);

  return successResponse(res, 'Home page sections reordered in cache', memoryHomeData);
});

/**
 * @desc Reset a single section or all 22 sections to factory defaults
 * @route POST /api/v1/home-page/reset or POST /api/v1/home-page/reset/:key or POST /api/v1/home-page/section/:key/reset
 * @access Private/Admin
 */
export const resetHomeSections = asyncHandler(async (req, res) => {
  const key = req.params.key || req.body.key;

  try {
    const config = await getOrCreateConfig();

    if (key) {
      const defaultSec = initialHomePageData.sections[key];
      if (!defaultSec) {
        return errorResponse(res, `Default data for section '${key}' not found`, 404);
      }

      if (config) {
        config.sections = {
          ...config.sections,
          [key]: cloneData(defaultSec)
        };
        config.sectionsList = buildSectionsList(config.sectionsOrder, config.sections);
        config.markModified('sections');
        config.markModified('sectionsList');
        await config.save();
      }

      memoryHomeData.sections[key] = cloneData(defaultSec);
      memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);

      return successResponse(res, `Section '${key}' restored to factory defaults`, memoryHomeData.sections[key]);
    }

    // Reset all 22 sections
    if (config) {
      config.sectionsOrder = cloneData(initialSectionsOrder);
      config.sections = cloneData(initialHomePageData.sections);
      config.sectionsList = buildSectionsList(initialSectionsOrder, initialHomePageData.sections);
      config.markModified('sectionsOrder');
      config.markModified('sections');
      config.markModified('sectionsList');
      await config.save();
    }

    memoryHomeData = formatHomeResponse(initialSectionsOrder, initialHomePageData.sections);
    return successResponse(res, 'All 22 home page sections restored to factory defaults', memoryHomeData);
  } catch (error) {
    if (key && initialHomePageData.sections[key]) {
      memoryHomeData.sections[key] = cloneData(initialHomePageData.sections[key]);
      memoryHomeData.sectionsList = buildSectionsList(memoryHomeData.sectionsOrder, memoryHomeData.sections);
      return successResponse(res, `Section '${key}' restored to factory defaults`, memoryHomeData.sections[key]);
    }

    memoryHomeData = formatHomeResponse(initialSectionsOrder, initialHomePageData.sections);
    return successResponse(res, 'All 22 home page sections restored to factory defaults', memoryHomeData);
  }
});
