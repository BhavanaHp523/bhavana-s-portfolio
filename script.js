// Close mobile dropdown
function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

// Typewriter effect
const texts = [ "Engineering Student" ];
let speed = 100;
const textElements = document.querySelector('.typewriter-text');
let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Smooth scrolling for all nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior: 'smooth'});
        }
        cancel(); // Close dropdown if mobile
    });
});

window.onload = typeWriter;
// Select Home button
const homeBtn = document.querySelector('a[href="#home"]');

homeBtn.addEventListener('click', function(e) {
    e.preventDefault(); // stay on the same page
    document.body.classList.add('page-blink'); // add blink class to body

    // Remove class after animation ends so it can blink again
    setTimeout(() => {
        document.body.classList.remove('page-blink');
    }, 600); // 2 x 0.3s duration
});
// Select nav links
const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');

// Select page wrappers
const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');

// Click About -> hide Home, show About
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    aboutPage.style.display = 'block';
});

// Click Home -> hide About, show Home
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPage.style.display = 'none';
    homePage.style.display = 'block';
});
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

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    aboutPage.style.display = 'block';
    i = 0;
    aboutTextElement.innerText = '';
    typeAbout();
});
const contactLink = document.querySelector('a[href="#contact"]');
const contactPage = document.getElementById('contact-page');

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'block';
});
// Open mobile dropdown
function hamburg() {
  const navbar = document.querySelector('.dropdown');
  navbar.style.transform = 'translateY(0)'; // slide down to show links
}
// Close mobile dropdown
function cancel(){
  const navbar = document.querySelector('.dropdown');
  navbar.style.transform = 'translateY(-500px)'; // hide links again
}

