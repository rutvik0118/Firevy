import http from 'http';
import jwt from 'jsonwebtoken';
import config from '../config/env.js';

const BASE_URL = 'http://localhost:5000/api/v1/company';

const adminToken = jwt.sign(
  { id: 'admin-test-id', role: 'admin' },
  config.jwtSecret,
  { expiresIn: '1h' }
);

const authHeader = {
  Authorization: `Bearer ${adminToken}`
};

const COMPANY_SLUGS = [
  'about-firevy',
  'ceo-message',
  'our-team',
  'events-activities',
  'download-brochure',
  'why-choose-us',
  'great-place-to-work',
  'women-empowerment',
  'awards-recognition',
  'insightful-videos',
  'blog',
  'careers',
  'csr',
  'podcast',
  'delivery-models',
  'engagement-models',
  'development-methodology',
  'client-testimonials',
  'video-testimonial',
  'clutch-testimonial'
];

function request(url, options = {}, data = null) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = http.request(
      {
        hostname: u.hostname,
        port: u.port,
        path: u.pathname + u.search,
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {})
        }
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            resolve({ status: res.statusCode, data: parsed });
          } catch (e) {
            resolve({ status: res.statusCode, raw: body });
          }
        });
      }
    );
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function runTestSuite() {
  console.log('================================================================');
  console.log('STARTING FULL AUTOMATED INTEGRATION TEST FOR ALL 20 COMPANY PAGES');
  console.log('================================================================\n');

  let passed = 0;
  let failed = 0;

  for (const slug of COMPANY_SLUGS) {
    console.log(`\n--- Testing slug: "${slug}" ---`);
    try {
      // 1. Initial GET (public)
      const res1 = await request(`${BASE_URL}/sections/${slug}`);
      if (res1.status !== 200 || !res1.data?.data) {
        throw new Error(`Initial public GET failed with status ${res1.status}`);
      }
      const initialTitle = res1.data.data.title || res1.data.data.name;
      console.log(`  [1] Initial Public Title: "${initialTitle}" (Status: ${res1.data.data.status})`);

      // 2. Save Draft with a modified test title
      const testDraftTitle = `[DRAFT TEST] ${initialTitle}`;
      const draftPayload = {
        title: testDraftTitle,
        subtitle: res1.data.data.subtitle,
        ctaText: res1.data.data.ctaText,
        ctaLink: res1.data.data.ctaLink,
        badge: res1.data.data.badge,
        heroImage: res1.data.data.heroImage,
        contentSections: res1.data.data.contentSections,
        cards: res1.data.data.cards,
        stats: res1.data.data.stats,
        items: res1.data.data.items,
        seo: res1.data.data.seo
      };

      const res2 = await request(
        `${BASE_URL}/sections/${slug}/draft`,
        { method: 'PUT', headers: authHeader },
        draftPayload
      );
      if (res2.status !== 200 || !res2.data?.success) {
        throw new Error(`Save Draft failed with status ${res2.status}`);
      }
      console.log(`  [2] Saved Draft: status is now "${res2.data.data.status}"`);

      // 3. Public GET should STILL show the initial title, NOT the draft title
      const res3 = await request(`${BASE_URL}/sections/${slug}`);
      if (res3.data.data.title === testDraftTitle) {
        throw new Error(`FAILURE: Live Public URL prematurely leaked draft title!`);
      }
      console.log(`  [3] Live URL Isolation Verified: Live title is still "${res3.data.data.title}"`);

      // 4. Preview GET (?preview=true) MUST show the draft title
      const res4 = await request(`${BASE_URL}/sections/${slug}?preview=true`);
      if (res4.data.data.title !== testDraftTitle) {
        throw new Error(`FAILURE: Preview GET did not return draft title (got "${res4.data.data.title}")`);
      }
      console.log(`  [4] Preview Mode Verified: Preview returns draft title "${res4.data.data.title}"`);

      // 5. Publish
      const res5 = await request(
        `${BASE_URL}/sections/${slug}/publish`,
        { method: 'POST', headers: authHeader }
      );
      if (res5.status !== 200 || !res5.data?.success) {
        throw new Error(`Publish failed with status ${res5.status}`);
      }
      console.log(`  [5] Published section: status is "${res5.data.data.status}"`);

      // 6. Public GET should NOW reflect the published title
      const res6 = await request(`${BASE_URL}/sections/${slug}`);
      if (res6.data.data.title !== testDraftTitle) {
        throw new Error(`FAILURE: Live Public URL did not update after publish (got "${res6.data.data.title}")`);
      }
      console.log(`  [6] Live Public Update Verified: Live title is now "${res6.data.data.title}"`);

      // 7. Reset to Original Baseline
      const res7 = await request(
        `${BASE_URL}/sections/${slug}/reset`,
        { method: 'POST', headers: authHeader }
      );
      if (res7.status !== 200 || !res7.data?.success) {
        throw new Error(`Reset failed with status ${res7.status}`);
      }
      console.log(`  [7] Reset to Original: restored baseline title "${res7.data.data.title}"`);

      // 8. Public GET after reset
      const res8 = await request(`${BASE_URL}/sections/${slug}`);
      if (res8.data.data.title === testDraftTitle) {
        throw new Error(`FAILURE: Reset did not restore baseline on live URL`);
      }
      console.log(`  [8] Verified Live Reset: restored title is "${res8.data.data.title}"`);

      console.log(`=> SUCCESS: Page "${slug}" passed all 8 draft/preview/publish/reset tests!`);
      passed++;
    } catch (err) {
      console.error(`=> FAILED on slug "${slug}":`, err.message);
      failed++;
    }
  }

  // Also test collections (team, events, brochures, awards, videos, podcasts, video-testimonials, clutch-reviews)
  console.log('\n================================================================');
  console.log('TESTING COMPANY CRUD COLLECTIONS');
  console.log('================================================================\n');

  const collections = [
    { name: 'Team Members', url: `${BASE_URL}/team` },
    { name: 'Events & Activities', url: `${BASE_URL}/events` },
    { name: 'Brochures', url: `${BASE_URL}/brochures` },
    { name: 'Awards & Recognition', url: `${BASE_URL}/awards` },
    { name: 'Insightful Videos', url: `${BASE_URL}/videos` },
    { name: 'Podcasts', url: `${BASE_URL}/podcasts` },
    { name: 'Video Testimonials', url: `${BASE_URL}/video-testimonials` },
    { name: 'Clutch Reviews', url: `${BASE_URL}/clutch-reviews` },
    { name: 'Blogs', url: `${BASE_URL}/blogs` }
  ];

  for (const col of collections) {
    try {
      const res = await request(col.url);
      if (res.status === 200 && Array.isArray(res.data?.data)) {
        console.log(`[PASS] Collection "${col.name}": fetched ${res.data.data.length} items.`);
        passed++;
      } else {
        throw new Error(`Status: ${res.status}`);
      }
    } catch (e) {
      console.error(`[FAIL] Collection "${col.name}":`, e.message);
      failed++;
    }
  }

  console.log('\n================================================================');
  console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('================================================================');
}

runTestSuite();
