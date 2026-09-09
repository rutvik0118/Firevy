import express from 'express';
import { protectAdmin } from '../middleware/authMiddleware.js';
import {
  // Team
  getTeamMembers,
  getAdminTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  toggleTeamMember,
  // Events
  getEvents,
  getAdminEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  toggleEvent,
  // Brochures
  getBrochures,
  getAdminBrochures,
  getBrochureById,
  createBrochure,
  updateBrochure,
  deleteBrochure,
  toggleBrochure,
  // Awards
  getAwards,
  getAdminAwards,
  getAwardById,
  createAward,
  updateAward,
  deleteAward,
  toggleAward,
  // Videos
  getVideos,
  getAdminVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  toggleVideo,
  // Blogs
  getBlogs,
  getAdminBlogs,
  getBlogBySlugOrId,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleBlog,
  // Podcasts
  getPodcasts,
  getAdminPodcasts,
  getPodcastById,
  createPodcast,
  updatePodcast,
  deletePodcast,
  togglePodcast,
  // Video Testimonials
  getVideoTestimonials,
  getAdminVideoTestimonials,
  getVideoTestimonialById,
  createVideoTestimonial,
  updateVideoTestimonial,
  deleteVideoTestimonial,
  toggleVideoTestimonial,
  // Clutch Reviews
  getClutchReviews,
  getAdminClutchReviews,
  getClutchReviewById,
  createClutchReview,
  updateClutchReview,
  deleteClutchReview,
  toggleClutchReview,
  // Singleton Sections
  getSectionBySlug,
  updateSectionBySlug,
  resetSectionBySlug,
  getAllSectionsSummary
} from '../controllers/companyController.js';

const router = express.Router();

// ============================================================
// 1. TEAM MEMBERS
// ============================================================
router.route('/team')
  .get(getTeamMembers)
  .post(protectAdmin, createTeamMember);

router.get('/team/admin', protectAdmin, getAdminTeamMembers);

router.route('/team/:id')
  .get(getTeamMemberById)
  .put(protectAdmin, updateTeamMember)
  .delete(protectAdmin, deleteTeamMember);

router.patch('/team/:id/toggle', protectAdmin, toggleTeamMember);

// ============================================================
// 2. EVENTS & ACTIVITIES
// ============================================================
router.route('/events')
  .get(getEvents)
  .post(protectAdmin, createEvent);

router.get('/events/admin', protectAdmin, getAdminEvents);

router.route('/events/:id')
  .get(getEventById)
  .put(protectAdmin, updateEvent)
  .delete(protectAdmin, deleteEvent);

router.patch('/events/:id/toggle', protectAdmin, toggleEvent);

// ============================================================
// 3. BROCHURES
// ============================================================
router.route('/brochures')
  .get(getBrochures)
  .post(protectAdmin, createBrochure);

router.get('/brochures/admin', protectAdmin, getAdminBrochures);

router.route('/brochures/:id')
  .get(getBrochureById)
  .put(protectAdmin, updateBrochure)
  .delete(protectAdmin, deleteBrochure);

router.patch('/brochures/:id/toggle', protectAdmin, toggleBrochure);

// ============================================================
// 4. AWARDS & RECOGNITION
// ============================================================
router.route('/awards')
  .get(getAwards)
  .post(protectAdmin, createAward);

router.get('/awards/admin', protectAdmin, getAdminAwards);

router.route('/awards/:id')
  .get(getAwardById)
  .put(protectAdmin, updateAward)
  .delete(protectAdmin, deleteAward);

router.patch('/awards/:id/toggle', protectAdmin, toggleAward);

// ============================================================
// 5. INSIGHTFUL VIDEOS
// ============================================================
router.route('/videos')
  .get(getVideos)
  .post(protectAdmin, createVideo);

router.get('/videos/admin', protectAdmin, getAdminVideos);

router.route('/videos/:id')
  .get(getVideoById)
  .put(protectAdmin, updateVideo)
  .delete(protectAdmin, deleteVideo);

router.patch('/videos/:id/toggle', protectAdmin, toggleVideo);

// ============================================================
// 6. BLOG POSTS
// ============================================================
router.route('/blogs')
  .get(getBlogs)
  .post(protectAdmin, createBlog);

router.get('/blogs/admin', protectAdmin, getAdminBlogs);

router.route('/blogs/:id')
  .get(getBlogBySlugOrId)
  .put(protectAdmin, updateBlog)
  .delete(protectAdmin, deleteBlog);

router.patch('/blogs/:id/toggle', protectAdmin, toggleBlog);

// ============================================================
// 7. PODCASTS
// ============================================================
router.route('/podcasts')
  .get(getPodcasts)
  .post(protectAdmin, createPodcast);

router.get('/podcasts/admin', protectAdmin, getAdminPodcasts);

router.route('/podcasts/:id')
  .get(getPodcastById)
  .put(protectAdmin, updatePodcast)
  .delete(protectAdmin, deletePodcast);

router.patch('/podcasts/:id/toggle', protectAdmin, togglePodcast);

// ============================================================
// 8. VIDEO TESTIMONIALS
// ============================================================
router.route('/video-testimonials')
  .get(getVideoTestimonials)
  .post(protectAdmin, createVideoTestimonial);

router.get('/video-testimonials/admin', protectAdmin, getAdminVideoTestimonials);

router.route('/video-testimonials/:id')
  .get(getVideoTestimonialById)
  .put(protectAdmin, updateVideoTestimonial)
  .delete(protectAdmin, deleteVideoTestimonial);

router.patch('/video-testimonials/:id/toggle', protectAdmin, toggleVideoTestimonial);

// ============================================================
// 9. CLUTCH REVIEWS / TESTIMONIALS
// ============================================================
router.route('/clutch-reviews')
  .get(getClutchReviews)
  .post(protectAdmin, createClutchReview);

router.get('/clutch-reviews/admin', protectAdmin, getAdminClutchReviews);

router.route('/clutch-reviews/:id')
  .get(getClutchReviewById)
  .put(protectAdmin, updateClutchReview)
  .delete(protectAdmin, deleteClutchReview);

router.patch('/clutch-reviews/:id/toggle', protectAdmin, toggleClutchReview);

// ============================================================
// 10. SINGLETON COMPANY SECTIONS
// ============================================================
router.get('/sections', protectAdmin, getAllSectionsSummary);

router.route('/sections/:slug')
  .get(getSectionBySlug)
  .put(protectAdmin, updateSectionBySlug);

router.post('/sections/:slug/reset', protectAdmin, resetSectionBySlug);

export default router;
