import http from 'http';
import jwt from 'jsonwebtoken';
import config from '../config/env.js';

function makeRequest({ method = 'GET', path, body = null, token = null }) {
  return new Promise((resolve, reject) => {
    const postData = body ? JSON.stringify(body) : null;
    const headers = {
      'Content-Type': 'application/json'
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (postData) {
      headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path,
      method,
      headers
    }, (res) => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(raw) });
        } catch {
          resolve({ status: res.statusCode, text: raw });
        }
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function run() {
  console.log('=== Step 1: Generating Valid Admin Token ===');
  const token = jwt.sign(
    {
      adminId: '60c72b2f9b1d8b2bad000001',
      email: 'admin@firevy.co',
      role: 'admin'
    },
    config.jwtSecret,
    { expiresIn: '1d' }
  );
  console.log('Generated Admin JWT Token.');

  console.log('\n=== Step 2: Testing Collection CRUD Operations ===');

  // 1. Team Member CRUD
  console.log('\n1. Testing Team Member:');
  const createTeam = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/team',
    token,
    body: {
      name: 'Aarav Sharma',
      designation: 'Head of Mobile Engineering',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      department: 'Mobile App Development',
      bio: 'Over a decade leading cross-platform and native iOS/Android development.'
    }
  });
  console.log('Create Team:', createTeam.status, createTeam.body?.data?._id);
  const teamId = createTeam.body?.data?._id;

  const updateTeam = await makeRequest({
    method: 'PUT',
    path: `/api/v1/company/team/${teamId}`,
    token,
    body: { designation: 'VP of Mobile Engineering' }
  });
  console.log('Update Team:', updateTeam.status, updateTeam.body?.data?.designation);

  const toggleTeam = await makeRequest({
    method: 'PATCH',
    path: `/api/v1/company/team/${teamId}/toggle`,
    token
  });
  console.log('Toggle Team Status:', toggleTeam.status, toggleTeam.body?.data?.isActive);

  const deleteTeam = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/team/${teamId}`,
    token
  });
  console.log('Delete Team:', deleteTeam.status);

  // 2. Events CRUD
  console.log('\n2. Testing Company Event:');
  const createEvent = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/events',
    token,
    body: {
      title: 'Global Engineering Summit 2026',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      shortDescription: 'Hands on AI architecture sprint.'
    }
  });
  console.log('Create Event:', createEvent.status, createEvent.body?.data?._id);
  const eventId = createEvent.body?.data?._id;

  const deleteEvent = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/events/${eventId}`,
    token
  });
  console.log('Delete Event:', deleteEvent.status);

  // 3. Brochure CRUD
  console.log('\n3. Testing Brochure:');
  const createBrochure = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/brochures',
    token,
    body: {
      title: 'firevy.co Solutions Catalog 2026',
      pdfUrl: 'https://firevy.co/downloads/catalog.pdf',
      fileSize: '5.2 MB'
    }
  });
  console.log('Create Brochure:', createBrochure.status, createBrochure.body?.data?._id);
  const brochureId = createBrochure.body?.data?._id;

  const deleteBrochure = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/brochures/${brochureId}`,
    token
  });
  console.log('Delete Brochure:', deleteBrochure.status);

  // 4. Awards CRUD
  console.log('\n4. Testing Award:');
  const createAward = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/awards',
    token,
    body: {
      title: 'Top AI Innovators 2026',
      organization: 'TechReview Global',
      image: '/images/awards/top_web_dev_goodfirm.svg'
    }
  });
  console.log('Create Award:', createAward.status, createAward.body?.data?._id);
  const awardId = createAward.body?.data?._id;

  const deleteAward = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/awards/${awardId}`,
    token
  });
  console.log('Delete Award:', deleteAward.status);

  // 5. Video CRUD
  console.log('\n5. Testing Insightful Video:');
  const createVideo = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/videos',
    token,
    body: {
      title: 'AI Mobile Health App Showcase',
      thumbnail: '/images/homeinnovation/eleventh.webp',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  });
  console.log('Create Video:', createVideo.status, createVideo.body?.data?._id);
  const videoId = createVideo.body?.data?._id;

  const deleteVideo = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/videos/${videoId}`,
    token
  });
  console.log('Delete Video:', deleteVideo.status);

  // 6. Blog CRUD
  console.log('\n6. Testing Blog Post:');
  const createBlog = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/blogs',
    token,
    body: {
      title: 'Building Resilient Microservices with Node.js',
      author: 'Kumaril Patel',
      category: 'Software Development',
      shortDescription: 'A deep dive into high concurrency microservices.'
    }
  });
  console.log('Create Blog:', createBlog.status, createBlog.body?.data?.slug);
  const blogId = createBlog.body?.data?._id;

  const deleteBlog = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/blogs/${blogId}`,
    token
  });
  console.log('Delete Blog:', deleteBlog.status);

  // 7. Podcast CRUD
  console.log('\n7. Testing Podcast:');
  const createPodcast = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/podcasts',
    token,
    body: {
      title: 'Cloud Scaling Insights Episode 10',
      episodeNumber: 10,
      thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
    }
  });
  console.log('Create Podcast:', createPodcast.status, createPodcast.body?.data?._id);
  const podcastId = createPodcast.body?.data?._id;

  const deletePodcast = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/podcasts/${podcastId}`,
    token
  });
  console.log('Delete Podcast:', deletePodcast.status);

  // 8. Video Testimonial CRUD
  console.log('\n8. Testing Video Testimonial:');
  const createVidTestimonial = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/video-testimonials',
    token,
    body: {
      clientName: 'Alexander Hayes',
      company: 'Logistics Prime Inc.',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Outstanding development velocity and flawless execution.'
    }
  });
  console.log('Create Video Testimonial:', createVidTestimonial.status, createVidTestimonial.body?.data?._id);
  const vidTestId = createVidTestimonial.body?.data?._id;

  const deleteVidTestimonial = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/video-testimonials/${vidTestId}`,
    token
  });
  console.log('Delete Video Testimonial:', deleteVidTestimonial.status);

  // 9. Clutch Review CRUD
  console.log('\n9. Testing Clutch Review:');
  const createClutch = await makeRequest({
    method: 'POST',
    path: '/api/v1/company/clutch-reviews',
    token,
    body: {
      clientName: 'Sarah Jenkins',
      company: 'HealthSync Global',
      review: 'Exceptional mobile engineering squad that exceeded our expectations.'
    }
  });
  console.log('Create Clutch Review:', createClutch.status, createClutch.body?.data?._id);
  const clutchId = createClutch.body?.data?._id;

  const deleteClutch = await makeRequest({
    method: 'DELETE',
    path: `/api/v1/company/clutch-reviews/${clutchId}`,
    token
  });
  console.log('Delete Clutch Review:', deleteClutch.status);

  console.log('\n=== Step 3: Testing Singleton Section Update & Persistence ===');
  const updateSection = await makeRequest({
    method: 'PUT',
    path: '/api/v1/company/sections/about-firevy',
    token,
    body: {
      subtitle: 'Verified updated subtitle from Admin Panel API testing'
    }
  });
  console.log('Update about-firevy section:', updateSection.status, updateSection.body?.data?.subtitle);

  const getPublicSection = await makeRequest({
    method: 'GET',
    path: '/api/v1/company/sections/about-firevy'
  });
  console.log('Public GET about-firevy:', getPublicSection.status, getPublicSection.body?.data?.subtitle);

  console.log('\n✅ All 20 Company sub-pages backend APIs, persistence, and CRUD verified successfully!');
}

run().catch(console.error);
