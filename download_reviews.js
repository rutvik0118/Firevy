const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const html = fs.readFileSync('sapphire_home.html', 'utf8');

// Match WhatOurClientSaySwiper slides
const regex = /<div class="card WhatOurClientSaySwiper_card-services-index__sjHa7">[\s\S]*?src="([^"]*clutch[^"]*)"[\s\S]*?<p class="WhatOurClientSaySwiper_card-top-text[^"]*">([\s\S]*?)<\/p>[\s\S]*?<p class="WhatOurClientSaySwiper_card-text[^"]*">([\s\S]*?)<\/p>[\s\S]*?alt="([^"]*)" src="([^"]*)"[\s\S]*?<h3 class="WhatOurClientSaySwiper_clientname[^"]*">([\s\S]*?)<\/h3>[\s\S]*?<p class="WhatOurClientSaySwiper_clientcity[^"]*">([\s\S]*?)<\/p>[\s\S]*?<h2 class="WhatOurClientSaySwiper_overall-rating[^"]*">([\s\S]*?)<\/h2>[\s\S]*?<div class="WhatOurClientSaySwiper_rating-details[^"]*">([\s\S]*?)<\/div>/g;

const reviews = [];
const allUrls = new Set();

let m;
while ((m = regex.exec(html)) !== null) {
  const clutchLogo = m[1];
  const headline = m[2].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  const comment = m[3].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  const authorAlt = m[4];
  const avatar = m[5];
  const authorName = m[6].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  const location = m[7].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  const overallRating = m[8].trim();
  const detailsRaw = m[9];
  
  const ratingDetails = {};
  const detailMatches = [...detailsRaw.matchAll(/<span>(.*?)<\/span><span>(.*?)<\/span>/g)];
  detailMatches.forEach(d => {
    ratingDetails[d[1].trim()] = d[2].trim();
  });

  allUrls.add(clutchLogo);
  allUrls.add(avatar);
  allUrls.add('/images/star_new_5.png');

  if (!reviews.find(r => r.headline === headline)) {
    reviews.push({
      clutchLogo,
      headline,
      comment,
      authorName,
      location,
      overallRating,
      ratingDetails,
      avatar
    });
  }
}

console.log('Unique reviews extracted:', reviews.length);
fs.writeFileSync('reviews_data.json', JSON.stringify({ reviews, urls: [...allUrls] }, null, 2));

async function download(url) {
  const cleanUrl = url.replace(/&amp;/g, '&');
  const targetPath = path.join(__dirname, 'frontend', 'public', cleanUrl);
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  function fetchUrl(targetUrl, redirectCount = 0) {
    if (redirectCount > 5) return Promise.resolve(false);
    return new Promise((resolve) => {
      const client = targetUrl.startsWith('https') ? https : http;
      client.get(targetUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            nextUrl = 'https://www.sapphiresolutions.net' + nextUrl;
          }
          return resolve(fetchUrl(nextUrl, redirectCount + 1));
        }

        if (res.statusCode === 200) {
          const file = fs.createWriteStream(targetPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log('Downloaded:', cleanUrl, 'Size:', fs.statSync(targetPath).size);
            resolve(true);
          });
        } else {
          console.error('Failed to download:', targetUrl, 'Status:', res.statusCode);
          resolve(false);
        }
      }).on('error', (err) => {
        console.error('Error downloading:', targetUrl, err);
        resolve(false);
      });
    });
  }

  const initialUrl = 'https://www.sapphiresolutions.net' + cleanUrl;
  console.log('Downloading:', initialUrl);
  return fetchUrl(initialUrl);
}

async function run() {
  for (const u of allUrls) {
    await download(u);
  }
  console.log('All review downloads complete!');
}

run();
