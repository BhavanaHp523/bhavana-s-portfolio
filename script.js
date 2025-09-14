// Hamburger menu
function hamburg() {
  document.querySelector('.dropdown').style.transform = 'translateY(0)';
}
function cancel() {
  document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

// Typewriter effect for Home
const texts = ["Engineering Student"];
let speed = 100;
const textElements = document.querySelector('.typewriter-text');
let textIndex = 0, characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else setTimeout(eraseText, 1000);
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}
window.onload = typeWriter;

// Page sections
const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const contactPage = document.getElementById('contact-page');

// About typewriter
const aboutTextElement = document.querySelector('.about-typewriter');
const aboutText = aboutTextElement.innerText;
aboutTextElement.innerText = '';
let i = 0;
function typeAbout() {
  if (i < aboutText.length) {
    aboutTextElement.innerText += aboutText.charAt(i);
    i++;
    setTimeout(typeAbout, 50);
  }
}

// Navigation clicks
document.querySelectorAll('nav a, .dropdown a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'none';

    if (href === '#home') {
      homePage.style.display = 'block';
      document.body.classList.add('page-blink');
      setTimeout(() => document.body.classList.remove('page-blink'), 600);
    }
    else if (href === '#about') {
      aboutPage.style.display = 'block';
      i = 0;
      aboutTextElement.innerText = '';
      typeAbout();
    }
    else if (href === '#contact') {
      contactPage.style.display = 'block';
    }

    cancel(); // close dropdown
  });
});
