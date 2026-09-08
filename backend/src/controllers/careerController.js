import CareerPage from '../models/CareerPage.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { initialCareerPageData } from '../utils/initialData.js';

/**
 * @desc Get public Career Page CMS data
 * @route GET /api/v1/careers
 * @access Public
 */
export const getCareerPageData = asyncHandler(async (req, res) => {
  let careerPage = await CareerPage.findOne({ pageKey: 'careers_main' });

  if (!careerPage) {
    try {
      careerPage = await CareerPage.create(initialCareerPageData);
    } catch (err) {
      console.warn('[Careers Seeder Warning]', err.message);
      return successResponse(res, 'Career page data fetched from fallback', initialCareerPageData);
    }
  }

  // Filter active sections for public response
  const responseData = {
    ...careerPage.toObject(),
    tabs: careerPage.tabs?.filter(t => t.isActive) || [],
    whoWeAre: careerPage.whoWeAre?.filter(w => w.isActive) || [],
    whyFirevy: careerPage.whyFirevy?.filter(w => w.isActive) || [],
    benefits: careerPage.benefits?.filter(b => b.isActive) || [],
    lifeAtFirevy: careerPage.lifeAtFirevy?.filter(l => l.isActive) || [],
    hiringProcess: careerPage.hiringProcess?.filter(h => h.isActive) || [],
    stats: careerPage.stats?.filter(s => s.isActive) || [],
    peopleTestimonials: careerPage.peopleTestimonials?.filter(p => p.isActive) || [],
    visionSection: {
      ...careerPage.visionSection,
      slides: careerPage.visionSection?.slides?.filter(s => s.isActive) || []
    },
    socialMedia: {
      ...careerPage.socialMedia,
      links: careerPage.socialMedia?.links?.filter(l => l.isActive) || []
    }
  };

  return successResponse(res, 'Career page data fetched successfully', responseData);
});

/**
 * @desc Get complete Career Page CMS data for Admin Panel
 * @route GET /api/v1/careers/admin
 * @access Private/Admin
 */
export const getCareerPageAdmin = asyncHandler(async (req, res) => {
  let careerPage = await CareerPage.findOne({ pageKey: 'careers_main' });

  if (!careerPage) {
    try {
      careerPage = await CareerPage.create(initialCareerPageData);
    } catch (err) {
      console.warn('[Careers Seeder Warning]', err.message);
      careerPage = initialCareerPageData;
    }
  }

  return successResponse(res, 'Career page admin configuration fetched successfully', careerPage);
});

/**
 * @desc Update Career Page CMS configuration
 * @route PUT /api/v1/careers
 * @access Private/Admin
 */
export const updateCareerPage = asyncHandler(async (req, res) => {
  const updateData = req.body;

  let careerPage = await CareerPage.findOne({ pageKey: 'careers_main' });

  if (!careerPage) {
    careerPage = new CareerPage({
      ...initialCareerPageData,
      ...updateData,
      pageKey: 'careers_main'
    });
    await careerPage.save();
  } else {
    // Update fields
    const allowedFields = [
      'meta',
      'hero',
      'tabs',
      'whoWeAre',
      'whyFirevy',
      'benefits',
      'lifeAtFirevy',
      'hiringProcess',
      'visionSection',
      'stats',
      'peopleTestimonials',
      'socialMedia',
      'ctaBanner',
      'generalSettings'
    ];

    allowedFields.forEach(field => {
      if (updateData[field] !== undefined) {
        careerPage[field] = updateData[field];
      }
    });

    careerPage.markModified('tabs');
    careerPage.markModified('whoWeAre');
    careerPage.markModified('whyFirevy');
    careerPage.markModified('benefits');
    careerPage.markModified('lifeAtFirevy');
    careerPage.markModified('hiringProcess');
    careerPage.markModified('visionSection');
    careerPage.markModified('stats');
    careerPage.markModified('peopleTestimonials');
    careerPage.markModified('socialMedia');
    careerPage.markModified('ctaBanner');

    await careerPage.save();
  }

  return successResponse(res, 'Career page updated successfully', careerPage);
});

/**
 * @desc Reset Career Page back to default content
 * @route POST /api/v1/careers/reset
 * @access Private/Admin
 */
export const resetCareerPage = asyncHandler(async (req, res) => {
  await CareerPage.deleteOne({ pageKey: 'careers_main' });

  const freshPage = await CareerPage.create(initialCareerPageData);

  return successResponse(res, 'Career page reset to default content successfully', freshPage);
});
