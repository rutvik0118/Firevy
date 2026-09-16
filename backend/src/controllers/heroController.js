import HeroSlide from '../models/HeroSlide.js';
import HomePageConfig from '../models/HomePageConfig.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialHeroSlides } from '../utils/initialData.js';

// In-memory fallback cache to ensure instant CRUD operation even when MongoDB is offline
let memoryHeroSlides = JSON.parse(JSON.stringify(initialHeroSlides));

/**
 * @desc Get all active hero slides (Public Homepage API)
 * @route GET /api/v1/hero
 */
export const getHeroSlides = asyncHandler(async (req, res) => {
  try {
    const config = await HomePageConfig.findOne({ pageKey: 'home' });
    if (config && config.sections && config.sections.hero && Array.isArray(config.sections.hero.slides)) {
      const activeSlides = config.sections.hero.slides.filter((s) => s.isActive !== false);
      if (activeSlides.length > 0) {
        return successResponse(res, 'Active hero slides retrieved successfully', activeSlides);
      }
    }

    let slides = await HeroSlide.find({ isActive: true }).sort({ order: 1, createdAt: 1 });

    if (!slides || slides.length === 0) {
      const activeFallback = memoryHeroSlides.filter((s) => s.isActive !== false);
      return successResponse(res, 'Active hero slides retrieved successfully', activeFallback);
    }

    return successResponse(res, 'Active hero slides retrieved successfully', slides);
  } catch (error) {
    const activeFallback = memoryHeroSlides.filter((s) => s.isActive !== false);
    return successResponse(res, 'Active hero slides retrieved from cache', activeFallback);
  }
});

/**
 * @desc Get all hero slides including inactive (Admin API)
 * @route GET /api/v1/hero/all
 */
export const getAllHeroSlides = asyncHandler(async (req, res) => {
  try {
    let slides = await HeroSlide.find().sort({ order: 1, createdAt: 1 });

    if (!slides || slides.length === 0) {
      return successResponse(res, 'All hero slides retrieved successfully', memoryHeroSlides);
    }

    return successResponse(res, 'All hero slides retrieved successfully', slides);
  } catch (error) {
    return successResponse(res, 'All hero slides retrieved from cache', memoryHeroSlides);
  }
});

/**
 * @desc Get single hero slide by ID
 * @route GET /api/v1/hero/:id
 */
export const getHeroSlideById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    let slide = await HeroSlide.findById(id);
    if (!slide) {
      slide = memoryHeroSlides.find((s) => s._id === id || String(s.order) === id);
    }

    if (!slide) {
      return errorResponse(res, 'Hero slide not found', 404);
    }

    return successResponse(res, 'Hero slide details fetched', slide);
  } catch {
    const slide = memoryHeroSlides.find((s) => s._id === id || String(s.order) === id);
    if (!slide) {
      return errorResponse(res, 'Hero slide not found', 404);
    }
    return successResponse(res, 'Hero slide details fetched', slide);
  }
});

/**
 * @desc Create a new hero slide (Admin)
 * @route POST /api/v1/hero
 */
export const createHeroSlide = asyncHandler(async (req, res) => {
  const {
    tag,
    titleLine1,
    titleLine2,
    subTag,
    bullets,
    rightBoxTitle,
    rightBoxSub,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    backgroundVideoUrl,
    order,
    isActive
  } = req.body;

  if (!tag || !titleLine1 || !titleLine2) {
    return errorResponse(res, 'Tag, Title Line 1, and Title Line 2 are required', 400);
  }

  const slidePayload = {
    tag: tag.trim(),
    titleLine1: titleLine1.trim(),
    titleLine2: titleLine2.trim(),
    subTag: subTag || '',
    bullets: Array.isArray(bullets)
      ? bullets.filter(Boolean)
      : typeof bullets === 'string'
      ? bullets.split('\n').map((b) => b.trim()).filter(Boolean)
      : [],
    rightBoxTitle: rightBoxTitle || 'Enterprise Innovation',
    rightBoxSub: rightBoxSub || 'Engineered for Performance',
    primaryCtaText: primaryCtaText || "Let's Talk",
    primaryCtaLink: primaryCtaLink || '/contact',
    secondaryCtaText: secondaryCtaText || 'Get in Touch',
    secondaryCtaLink: secondaryCtaLink || '/contact',
    backgroundVideoUrl:
      backgroundVideoUrl || '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
    order: Number(order) || memoryHeroSlides.length + 1,
    isActive: isActive !== false
  };

  try {
    const newSlide = await HeroSlide.create(slidePayload);
    memoryHeroSlides.push(newSlide.toObject());
    return successResponse(res, 'Hero slide created successfully', newSlide, 201);
  } catch (error) {
    // In-memory fallback
    const mockSlide = {
      _id: `hero_slide_${Date.now()}`,
      ...slidePayload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    memoryHeroSlides.push(mockSlide);
    return successResponse(res, 'Hero slide created in storage', mockSlide, 201);
  }
});

/**
 * @desc Update an existing hero slide (Admin)
 * @route PUT /api/v1/hero/:id
 */
export const updateHeroSlide = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  if (typeof updateData.bullets === 'string') {
    updateData.bullets = updateData.bullets
      .split('\n')
      .map((b) => b.trim())
      .filter(Boolean);
  }

  try {
    const updatedSlide = await HeroSlide.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (updatedSlide) {
      // Update memory cache
      const idx = memoryHeroSlides.findIndex((s) => s._id === id);
      if (idx !== -1) memoryHeroSlides[idx] = updatedSlide.toObject();
      return successResponse(res, 'Hero slide updated successfully', updatedSlide);
    }
  } catch {
    // Fall through to memory update
  }

  const idx = memoryHeroSlides.findIndex((s) => s._id === id);
  if (idx !== -1) {
    memoryHeroSlides[idx] = {
      ...memoryHeroSlides[idx],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    return successResponse(res, 'Hero slide updated in storage', memoryHeroSlides[idx]);
  }

  return errorResponse(res, 'Hero slide not found', 404);
});

/**
 * @desc Delete a hero slide (Admin)
 * @route DELETE /api/v1/hero/:id
 */
export const deleteHeroSlide = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await HeroSlide.findByIdAndDelete(id);
  } catch {
    // Ignore DB error
  }

  memoryHeroSlides = memoryHeroSlides.filter((s) => s._id !== id);
  return successResponse(res, 'Hero slide deleted successfully', { id });
});

/**
 * @desc Toggle active status of a hero slide (Admin)
 * @route PATCH /api/v1/hero/:id/toggle
 */
export const toggleHeroSlideStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const slide = await HeroSlide.findById(id);
    if (slide) {
      slide.isActive = !slide.isActive;
      await slide.save();

      const idx = memoryHeroSlides.findIndex((s) => s._id === id);
      if (idx !== -1) memoryHeroSlides[idx] = slide.toObject();

      return successResponse(res, `Slide ${slide.isActive ? 'activated' : 'deactivated'}`, slide);
    }
  } catch {
    // Fall through to memory
  }

  const idx = memoryHeroSlides.findIndex((s) => s._id === id);
  if (idx !== -1) {
    memoryHeroSlides[idx].isActive = !memoryHeroSlides[idx].isActive;
    return successResponse(
      res,
      `Slide ${memoryHeroSlides[idx].isActive ? 'activated' : 'deactivated'}`,
      memoryHeroSlides[idx]
    );
  }

  return errorResponse(res, 'Hero slide not found', 404);
});

/**
 * @desc Reset hero slides to initial defaults (Admin)
 * @route POST /api/v1/hero/reset
 */
export const resetHeroSlides = asyncHandler(async (req, res) => {
  try {
    await HeroSlide.deleteMany({});
    const inserted = await HeroSlide.insertMany(initialHeroSlides);
    memoryHeroSlides = JSON.parse(JSON.stringify(inserted));
    return successResponse(res, 'Hero slides reset to initial defaults', memoryHeroSlides);
  } catch (error) {
    memoryHeroSlides = JSON.parse(JSON.stringify(initialHeroSlides));
    return successResponse(res, 'Hero slides reset to initial defaults', memoryHeroSlides);
  }
});
