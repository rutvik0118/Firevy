const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const slidesData = JSON.parse(fs.readFileSync('slides_data.json', 'utf8'));

const allUrls = [...slidesData.imgUrls, ...slidesData.logoUrls];

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
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            nextUrl = 'https://www.sapphiresolutions.net' + nextUrl;
          }
          console.log('Redirecting to:', nextUrl);
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
  console.log('All downloads complete!');
}

run();
