import Data from './data.js';

console.log(Data);
const { navs, about, projects } = Data;

// console.log(navs);
// console.log(about);

const generateNav = (data) => {
  const html = data.map(item => ``)
  return data.map(item => `<a href="${item.link}">${item.name}</a>`).join('');
};

const generateAbout = (data) => {
  return `
  <div id="profile">
    <img src="${data.imgSrc}" alt="Profile picture">
    <h1>${data.title}<h1>
    <h3>${data.subtitle}</h3>
  </div>
  <div id="bio">
    <h2>${data.bioIntro}</h2>
    <p>${data.bioBody}</p>
  </div>
  `;
};

// Render nav
const $nav = document.querySelector('nav');
// console.log($nav.innerHTML);
const navSection = generateNav(navs);
// console.log(navSection);
// $nav.innerText = navSection;
$nav.insertAdjacentHTML('afterbegin', navSection);

// Render about
const $about = document.querySelector('.about');
// console.log($about);
const aboutSection = generateAbout(about);
// console.log(aboutSection);
// $about.innerHTML = aboutSection;
$about.insertAdjacentHTML('afterbegin', aboutSection);
