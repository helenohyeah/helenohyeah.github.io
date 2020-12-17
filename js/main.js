console.log('hello!');

// const { hero, bio } = require('./data.js');

const hero = {
  "img": "img/helen.png",
  "title": "Full Stack Developer\nEx-Product Manager",
  "subtitle": "I design and code delightfully simple user experiences."
};

const bio = {
  "intro": "Hi, I'm Helen. Nice to meet you!",
  "body": "I started my career in tech as a Product Manager where I developed a passion for building amazing user experiences. My love for problem solving and my desire to get more hands on led me to Software Development. Now, I spend my time building delightfully simple user experiences. I'm naturally curious, a fast learner, and I'm always finding ways to improve - one challenge at a time!"
};

console.log(hero);
console.log(bio);

const generateAbout = (data) => {
  return `
    <img src="${data.img}" alt="Profile picture">
    <h1>${hero.title}<h1>
    <h3>${hero.subtitle}</h3>
  `;
};

const about = document.querySelector('.about');
console.log(about);
// about.innerHTML = generateAbout(hero);