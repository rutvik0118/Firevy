const fs = require('fs');
const html = fs.readFileSync('sapphire_home.html', 'utf8');

const regex = /CasestudySwiper_carditem__mximC[\s\S]*?style="background-color:([^"]*)"[\s\S]*?src="([^"]*)"[\s\S]*?<p class="[^"]*">([\s\S]*?)<\/p>[\s\S]*?<ul class="[^"]*">([\s\S]*?)<\/ul>[\s\S]*?href="([^"]*)">View Case Study[\s\S]*?src="([^"]*)"/g;

const slides = [];
const imgUrls = new Set();
const logoUrls = new Set();

let m;
while ((m = regex.exec(html)) !== null) {
  const bgColor = m[1];
  const logo = m[2];
  const desc = m[3].replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  const listRaw = m[4];
  const bullets = [...listRaw.matchAll(/<span>\s*(.*?)\s*<\/span>/g)].map(x => x[1].trim());
  const caseStudyLink = m[5];
  const mainImg = m[6];
  
  imgUrls.add(mainImg);
  logoUrls.add(logo);
  
  // Check if we already have this logo
  if (!slides.find(s => s.logo === logo)) {
    slides.push({
      bgColor,
      logo,
      desc,
      bullets,
      caseStudyLink,
      mainImg
    });
  }
}

console.log('Unique slides found:', slides.length);
fs.writeFileSync('slides_data.json', JSON.stringify({ slides, imgUrls: [...imgUrls], logoUrls: [...logoUrls] }, null, 2));
console.log('Slides:', JSON.stringify(slides.map(s => ({ logo: s.logo, mainImg: s.mainImg, bulletsCount: s.bullets.length })), null, 2));
