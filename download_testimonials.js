const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const html = fs.readFileSync('sapphire_home.html', 'utf8');

// Match all Ourstroy slides
const regex = /<div class="Ourstroy_random__iW6Ck"><img alt="[^"]*" src="([^"]*)"[\s\S]*?<div class="Ourstroy_youtube-play-btn__xGhB4" style="background:url\(([^)]*)\)[\s\S]*?<h3 class="[^"]*">([\s\S]*?)<\/h3>/g;

const items = [];
let m;
while ((m = regex.exec(html)) !== null) {
  const img = m[1];
  const playBtn = m[2];
  const title = m[3].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  if (!items.find(i => i.img === img)) {
    items.push({ img, playBtn, title });
  }
}

console.log('Found Testimonial items:', items.length);
fs.writeFileSync('testimonials_data.json', JSON.stringify(items, null, 2));

const allUrls = [];
items.forEach(i => {
  allUrls.push(i.img);
  if (i.playBtn) allUrls.push(i.playBtn);
});

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
  for (const u of [...new Set(allUrls)]) {
    await download(u);
  }
  console.log('All testimonial downloads finished!');
}

run();
