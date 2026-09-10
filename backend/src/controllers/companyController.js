import TeamMember from '../models/TeamMember.js';
import CompanyEvent from '../models/CompanyEvent.js';
import Brochure from '../models/Brochure.js';
import Award from '../models/Award.js';
import InsightfulVideo from '../models/InsightfulVideo.js';
import BlogPost from '../models/BlogPost.js';
import Podcast from '../models/Podcast.js';
import VideoTestimonial from '../models/VideoTestimonial.js';
import ClutchReview from '../models/ClutchReview.js';
import CompanySection from '../models/CompanySection.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import {
  initialTeamMembers,
  initialCompanyEvents,
  initialBrochures,
  initialAwards,
  initialInsightfulVideos,
  initialBlogPosts,
  initialPodcasts,
  initialVideoTestimonials,
  initialClutchReviews,
  initialCompanySections
} from '../utils/initialCompanyData.js';

// Helper to seed data if collection is empty
const getOrSeedCollection = async (Model, initialData, query = { isActive: true }) => {
  let items = await Model.find(query).sort({ order: 1, createdAt: -1 });
  if (!items || items.length === 0) {
    try {
      const count = await Model.countDocuments();
      if (count === 0 && initialData && initialData.length > 0) {
        items = await Model.insertMany(initialData);
        if (query.isActive) {
          items = items.filter(i => i.isActive !== false);
        }
      } else {
        items = initialData.filter(i => !query.isActive || i.isActive !== false);
      }
    } catch (err) {
      console.warn('[Company Seeding Warning]', err.message);
      items = initialData.filter(i => !query.isActive || i.isActive !== false);
    }
  }
  return items;
};

// ============================================================
// 1. TEAM MEMBERS CONTROLLER
// ============================================================
export const getTeamMembers = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(TeamMember, initialTeamMembers, { isActive: true });
  return successResponse(res, 'Team members fetched successfully', items);
});

export const getAdminTeamMembers = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(TeamMember, initialTeamMembers, {});
  return successResponse(res, 'Admin team members fetched successfully', items);
});

export const getTeamMemberById = asyncHandler(async (req, res) => {
  const item = await TeamMember.findById(req.params.id);
  if (!item) return errorResponse(res, 'Team member not found', null, 404);
  return successResponse(res, 'Team member fetched successfully', item);
});

export const createTeamMember = asyncHandler(async (req, res) => {
  const item = await TeamMember.create(req.body);
  return successResponse(res, 'Team member created successfully', item, 201);
});

export const updateTeamMember = asyncHandler(async (req, res) => {
  const item = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Team member not found', null, 404);
  return successResponse(res, 'Team member updated successfully', item);
});

export const deleteTeamMember = asyncHandler(async (req, res) => {
  const item = await TeamMember.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Team member not found', null, 404);
  return successResponse(res, 'Team member deleted successfully', { id: req.params.id });
});

export const toggleTeamMember = asyncHandler(async (req, res) => {
  const item = await TeamMember.findById(req.params.id);
  if (!item) return errorResponse(res, 'Team member not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Team member ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 2. EVENTS & ACTIVITIES CONTROLLER
// ============================================================
export const getEvents = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(CompanyEvent, initialCompanyEvents, { isActive: true });
  return successResponse(res, 'Events fetched successfully', items);
});

export const getAdminEvents = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(CompanyEvent, initialCompanyEvents, {});
  return successResponse(res, 'Admin events fetched successfully', items);
});

export const getEventById = asyncHandler(async (req, res) => {
  const item = await CompanyEvent.findById(req.params.id);
  if (!item) return errorResponse(res, 'Event not found', null, 404);
  return successResponse(res, 'Event fetched successfully', item);
});

export const createEvent = asyncHandler(async (req, res) => {
  const item = await CompanyEvent.create(req.body);
  return successResponse(res, 'Event created successfully', item, 201);
});

export const updateEvent = asyncHandler(async (req, res) => {
  const item = await CompanyEvent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Event not found', null, 404);
  return successResponse(res, 'Event updated successfully', item);
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const item = await CompanyEvent.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Event not found', null, 404);
  return successResponse(res, 'Event deleted successfully', { id: req.params.id });
});

export const toggleEvent = asyncHandler(async (req, res) => {
  const item = await CompanyEvent.findById(req.params.id);
  if (!item) return errorResponse(res, 'Event not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Event ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 3. BROCHURES CONTROLLER
// ============================================================
export const getBrochures = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Brochure, initialBrochures, { isActive: true });
  return successResponse(res, 'Brochures fetched successfully', items);
});

export const getAdminBrochures = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Brochure, initialBrochures, {});
  return successResponse(res, 'Admin brochures fetched successfully', items);
});

export const getBrochureById = asyncHandler(async (req, res) => {
  const item = await Brochure.findById(req.params.id);
  if (!item) return errorResponse(res, 'Brochure not found', null, 404);
  return successResponse(res, 'Brochure fetched successfully', item);
});

export const createBrochure = asyncHandler(async (req, res) => {
  const item = await Brochure.create(req.body);
  return successResponse(res, 'Brochure created successfully', item, 201);
});

export const updateBrochure = asyncHandler(async (req, res) => {
  const item = await Brochure.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Brochure not found', null, 404);
  return successResponse(res, 'Brochure updated successfully', item);
});

export const deleteBrochure = asyncHandler(async (req, res) => {
  const item = await Brochure.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Brochure not found', null, 404);
  return successResponse(res, 'Brochure deleted successfully', { id: req.params.id });
});

export const toggleBrochure = asyncHandler(async (req, res) => {
  const item = await Brochure.findById(req.params.id);
  if (!item) return errorResponse(res, 'Brochure not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Brochure ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 4. AWARDS & RECOGNITION CONTROLLER
// ============================================================
export const getAwards = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Award, initialAwards, { isActive: true });
  return successResponse(res, 'Awards fetched successfully', items);
});

export const getAdminAwards = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Award, initialAwards, {});
  return successResponse(res, 'Admin awards fetched successfully', items);
});

export const getAwardById = asyncHandler(async (req, res) => {
  const item = await Award.findById(req.params.id);
  if (!item) return errorResponse(res, 'Award not found', null, 404);
  return successResponse(res, 'Award fetched successfully', item);
});

export const createAward = asyncHandler(async (req, res) => {
  const item = await Award.create(req.body);
  return successResponse(res, 'Award created successfully', item, 201);
});

export const updateAward = asyncHandler(async (req, res) => {
  const item = await Award.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Award not found', null, 404);
  return successResponse(res, 'Award updated successfully', item);
});

export const deleteAward = asyncHandler(async (req, res) => {
  const item = await Award.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Award not found', null, 404);
  return successResponse(res, 'Award deleted successfully', { id: req.params.id });
});

export const toggleAward = asyncHandler(async (req, res) => {
  const item = await Award.findById(req.params.id);
  if (!item) return errorResponse(res, 'Award not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Award ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 5. INSIGHTFUL VIDEOS CONTROLLER
// ============================================================
export const getVideos = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(InsightfulVideo, initialInsightfulVideos, { isActive: true });
  return successResponse(res, 'Insightful videos fetched successfully', items);
});

export const getAdminVideos = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(InsightfulVideo, initialInsightfulVideos, {});
  return successResponse(res, 'Admin videos fetched successfully', items);
});

export const getVideoById = asyncHandler(async (req, res) => {
  const item = await InsightfulVideo.findById(req.params.id);
  if (!item) return errorResponse(res, 'Video not found', null, 404);
  return successResponse(res, 'Video fetched successfully', item);
});

export const createVideo = asyncHandler(async (req, res) => {
  const item = await InsightfulVideo.create(req.body);
  return successResponse(res, 'Video created successfully', item, 201);
});

export const updateVideo = asyncHandler(async (req, res) => {
  const item = await InsightfulVideo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Video not found', null, 404);
  return successResponse(res, 'Video updated successfully', item);
});

export const deleteVideo = asyncHandler(async (req, res) => {
  const item = await InsightfulVideo.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Video not found', null, 404);
  return successResponse(res, 'Video deleted successfully', { id: req.params.id });
});

export const toggleVideo = asyncHandler(async (req, res) => {
  const item = await InsightfulVideo.findById(req.params.id);
  if (!item) return errorResponse(res, 'Video not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Video ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 6. BLOG POSTS CONTROLLER
// ============================================================
export const getBlogs = asyncHandler(async (req, res) => {
  const { category, search } = req.query;
  let query = { isActive: true, status: 'published' };
  if (category && category !== 'All') {
    query.category = category;
  }
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { shortDescription: { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } }
    ];
  }
  const items = await getOrSeedCollection(BlogPost, initialBlogPosts, query);
  return successResponse(res, 'Blogs fetched successfully', items);
});

export const getAdminBlogs = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(BlogPost, initialBlogPosts, {});
  return successResponse(res, 'Admin blogs fetched successfully', items);
});

export const getBlogBySlugOrId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let item = null;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    item = await BlogPost.findById(id);
  }
  if (!item) {
    item = await BlogPost.findOne({ slug: id });
  }
  if (!item) {
    item = initialBlogPosts.find(b => b.slug === id);
  }
  if (!item) return errorResponse(res, 'Blog post not found', null, 404);
  return successResponse(res, 'Blog post fetched successfully', item);
});

export const createBlog = asyncHandler(async (req, res) => {
  if (!req.body.slug && req.body.title) {
    req.body.slug = req.body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  const item = await BlogPost.create(req.body);
  return successResponse(res, 'Blog post created successfully', item, 201);
});

export const updateBlog = asyncHandler(async (req, res) => {
  const item = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Blog post not found', null, 404);
  return successResponse(res, 'Blog post updated successfully', item);
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const item = await BlogPost.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Blog post not found', null, 404);
  return successResponse(res, 'Blog post deleted successfully', { id: req.params.id });
});

export const toggleBlog = asyncHandler(async (req, res) => {
  const item = await BlogPost.findById(req.params.id);
  if (!item) return errorResponse(res, 'Blog post not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Blog post ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 7. PODCASTS CONTROLLER
// ============================================================
export const getPodcasts = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Podcast, initialPodcasts, { isActive: true });
  return successResponse(res, 'Podcasts fetched successfully', items);
});

export const getAdminPodcasts = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(Podcast, initialPodcasts, {});
  return successResponse(res, 'Admin podcasts fetched successfully', items);
});

export const getPodcastById = asyncHandler(async (req, res) => {
  const item = await Podcast.findById(req.params.id);
  if (!item) return errorResponse(res, 'Podcast not found', null, 404);
  return successResponse(res, 'Podcast fetched successfully', item);
});

export const createPodcast = asyncHandler(async (req, res) => {
  const item = await Podcast.create(req.body);
  return successResponse(res, 'Podcast created successfully', item, 201);
});

export const updatePodcast = asyncHandler(async (req, res) => {
  const item = await Podcast.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Podcast not found', null, 404);
  return successResponse(res, 'Podcast updated successfully', item);
});

export const deletePodcast = asyncHandler(async (req, res) => {
  const item = await Podcast.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Podcast not found', null, 404);
  return successResponse(res, 'Podcast deleted successfully', { id: req.params.id });
});

export const togglePodcast = asyncHandler(async (req, res) => {
  const item = await Podcast.findById(req.params.id);
  if (!item) return errorResponse(res, 'Podcast not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Podcast ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 8. VIDEO TESTIMONIALS CONTROLLER
// ============================================================
export const getVideoTestimonials = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(VideoTestimonial, initialVideoTestimonials, { isActive: true });
  return successResponse(res, 'Video testimonials fetched successfully', items);
});

export const getAdminVideoTestimonials = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(VideoTestimonial, initialVideoTestimonials, {});
  return successResponse(res, 'Admin video testimonials fetched successfully', items);
});

export const getVideoTestimonialById = asyncHandler(async (req, res) => {
  const item = await VideoTestimonial.findById(req.params.id);
  if (!item) return errorResponse(res, 'Video testimonial not found', null, 404);
  return successResponse(res, 'Video testimonial fetched successfully', item);
});

export const createVideoTestimonial = asyncHandler(async (req, res) => {
  const item = await VideoTestimonial.create(req.body);
  return successResponse(res, 'Video testimonial created successfully', item, 201);
});

export const updateVideoTestimonial = asyncHandler(async (req, res) => {
  const item = await VideoTestimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Video testimonial not found', null, 404);
  return successResponse(res, 'Video testimonial updated successfully', item);
});

export const deleteVideoTestimonial = asyncHandler(async (req, res) => {
  const item = await VideoTestimonial.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Video testimonial not found', null, 404);
  return successResponse(res, 'Video testimonial deleted successfully', { id: req.params.id });
});

export const toggleVideoTestimonial = asyncHandler(async (req, res) => {
  const item = await VideoTestimonial.findById(req.params.id);
  if (!item) return errorResponse(res, 'Video testimonial not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Video testimonial ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 9. CLUTCH REVIEWS / TESTIMONIALS CONTROLLER
// ============================================================
export const getClutchReviews = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(ClutchReview, initialClutchReviews, { isActive: true });
  return successResponse(res, 'Clutch reviews fetched successfully', items);
});

export const getAdminClutchReviews = asyncHandler(async (req, res) => {
  const items = await getOrSeedCollection(ClutchReview, initialClutchReviews, {});
  return successResponse(res, 'Admin clutch reviews fetched successfully', items);
});

export const getClutchReviewById = asyncHandler(async (req, res) => {
  const item = await ClutchReview.findById(req.params.id);
  if (!item) return errorResponse(res, 'Clutch review not found', null, 404);
  return successResponse(res, 'Clutch review fetched successfully', item);
});

export const createClutchReview = asyncHandler(async (req, res) => {
  const item = await ClutchReview.create(req.body);
  return successResponse(res, 'Clutch review created successfully', item, 201);
});

export const updateClutchReview = asyncHandler(async (req, res) => {
  const item = await ClutchReview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return errorResponse(res, 'Clutch review not found', null, 404);
  return successResponse(res, 'Clutch review updated successfully', item);
});

export const deleteClutchReview = asyncHandler(async (req, res) => {
  const item = await ClutchReview.findByIdAndDelete(req.params.id);
  if (!item) return errorResponse(res, 'Clutch review not found', null, 404);
  return successResponse(res, 'Clutch review deleted successfully', { id: req.params.id });
});

export const toggleClutchReview = asyncHandler(async (req, res) => {
  const item = await ClutchReview.findById(req.params.id);
  if (!item) return errorResponse(res, 'Clutch review not found', null, 404);
  item.isActive = !item.isActive;
  await item.save();
  return successResponse(res, `Clutch review ${item.isActive ? 'activated' : 'deactivated'}`, item);
});

// ============================================================
// 10. SINGLETON COMPANY SECTIONS CONTROLLER
// ============================================================
export const getSectionBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const isPreview = req.query.preview === 'true';
  const isAdmin = req.query.admin === 'true';

  let section = await CompanySection.findOne({ slug });

  if (!section) {
    const seedData = initialCompanySections[slug];
    if (seedData) {
      try {
        section = await CompanySection.create({
          ...seedData,
          status: 'published',
          publishedAt: new Date(),
          publishedData: seedData,
          draftData: seedData
        });
      } catch (err) {
        console.warn('[Company Section Seed Warning]', err.message);
        section = seedData;
      }
    }
  }

  if (!section) {
    return errorResponse(res, `Company section not found: ${slug}`, null, 404);
  }

  // Public visitor request (NOT preview and NOT admin editor)
  if (!isPreview && !isAdmin) {
    if (section.publishedData && Object.keys(section.publishedData).length > 0) {
      const plain = section.toObject ? section.toObject() : section;
      return successResponse(res, `Section ${slug} (Published) fetched successfully`, {
        ...plain,
        ...section.publishedData,
        status: section.status,
        publishedAt: section.publishedAt
      });
    }
    if (section.status === 'draft') {
      const fallback = initialCompanySections[slug] || section;
      return successResponse(res, `Section ${slug} baseline fetched successfully`, fallback);
    }
  }

  return successResponse(res, `Section ${slug} fetched successfully`, section);
});

export const updateSectionBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const section = await CompanySection.findOneAndUpdate(
    { slug },
    {
      ...req.body,
      slug,
      draftData: req.body,
      publishedData: req.body,
      status: 'published',
      publishedAt: new Date()
    },
    { new: true, upsert: true, runValidators: true }
  );
  return successResponse(res, `Section ${slug} updated and published successfully`, section);
});

export const saveDraftSection = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const existing = await CompanySection.findOne({ slug });
  const section = await CompanySection.findOneAndUpdate(
    { slug },
    {
      ...req.body,
      slug,
      status: 'draft',
      draftData: req.body,
      publishedData: existing?.publishedData || existing || initialCompanySections[slug]
    },
    { new: true, upsert: true, runValidators: true }
  );
  return successResponse(res, `Draft for ${slug} saved successfully (Live site unchanged)`, section);
});

export const publishSection = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const bodyData = req.body && Object.keys(req.body).length > 0 ? req.body : null;
  const existing = await CompanySection.findOne({ slug });
  const dataToPublish = bodyData || existing?.draftData || existing || initialCompanySections[slug];

  const section = await CompanySection.findOneAndUpdate(
    { slug },
    {
      ...dataToPublish,
      slug,
      status: 'published',
      publishedAt: new Date(),
      publishedData: dataToPublish,
      draftData: dataToPublish
    },
    { new: true, upsert: true, runValidators: true }
  );
  return successResponse(res, `Section ${slug} published successfully! Live website updated.`, section);
});

export const unpublishSection = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const section = await CompanySection.findOneAndUpdate(
    { slug },
    { status: 'draft' },
    { new: true }
  );
  return successResponse(res, `Section ${slug} set to draft (Unpublished from live site)`, section);
});

export const resetSectionBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const seedData = initialCompanySections[slug];
  if (!seedData) {
    return errorResponse(res, `No default template for section: ${slug}`, null, 404);
  }

  await CompanySection.findOneAndDelete({ slug });
  const section = await CompanySection.create({
    ...seedData,
    status: 'published',
    publishedAt: new Date(),
    publishedData: seedData,
    draftData: seedData
  });
  return successResponse(res, `Section ${slug} reset to original website content`, section);
});

export const getAllSectionsSummary = asyncHandler(async (req, res) => {
  const slugs = Object.keys(initialCompanySections);
  const sections = await Promise.all(
    slugs.map(async (slug) => {
      let sec = await CompanySection.findOne({ slug });
      if (!sec) {
        try {
          sec = await CompanySection.create({
            ...initialCompanySections[slug],
            status: 'published',
            publishedData: initialCompanySections[slug],
            draftData: initialCompanySections[slug]
          });
        } catch {
          sec = initialCompanySections[slug];
        }
      }
      return {
        slug: sec.slug,
        title: sec.title,
        badge: sec.badge,
        subtitle: sec.subtitle,
        status: sec.status || 'published',
        publishedAt: sec.publishedAt,
        updatedAt: sec.updatedAt,
        isActive: sec.isActive
      };
    })
  );
  return successResponse(res, 'All company sections summary fetched', sections);
});
