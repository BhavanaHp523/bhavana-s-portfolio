// ------------------------
// Mobile Dropdown
// ------------------------
function openDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}
function closeDropdown() {
    document.querySelector('.dropdown').style.transform = 'translateY(-100%)';
}

// ------------------------
// Home Typewriter
// ------------------------
const homeTexts = ["Engineering Student"];
const homeTextEl = document.querySelector('.typewriter-text');
let homeTextIndex = 0;
let homeCharIndex = 0;

function typeHome() {
    if(homeCharIndex < homeTexts[homeTextIndex].length) {
        homeTextEl.innerHTML += homeTexts[homeTextIndex].charAt(homeCharIndex);
        homeCharIndex++;
        setTimeout(typeHome, 100);
    } else {
        setTimeout(eraseHome, 1000);
    }
}

function eraseHome() {
    if(homeTextEl.innerHTML.length > 0) {
        homeTextEl.innerHTML = homeTextEl.innerHTML.slice(0, -1);
        setTimeout(eraseHome, 50);
    } else {
        homeTextIndex = (homeTextIndex + 1) % homeTexts.length;
        homeCharIndex = 0;
        setTimeout(typeHome, 500);
    }
}
window.onload = typeHome;

// ------------------------
// Page Navigation
// ------------------------
const pages = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    contact: document.getElementById('contact')
};

function showPage(pageName) {
    for(let key in pages){
        pages[key].classList.remove('active');
    }
    pages[pageName].classList.add('active');
    closeDropdown();
}

// Nav Links
document.querySelectorAll('.nav-link, .dropdown-link').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const page=this.getAttribute('data-page');
        showPage(page);

        if(page==='about') startAboutTypewriter();
    });
});

// ------------------------
// About Typewriter
// ------------------------
const aboutTextEl = document.querySelector('.about-typewriter');
let aboutTextContent = aboutTextEl ? aboutTextEl.innerText : '';
if(aboutTextEl) aboutTextEl.innerText='';
let aboutIndex = 0;

function startAboutTypewriter(){
    if(!aboutTextEl) return;
    aboutTextEl.innerText='';
    aboutIndex=0;
    typeAbout();
}

function typeAbout(){
    if(aboutIndex < aboutTextContent.length){
        aboutTextEl.innerText += aboutTextContent.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAbout,30);
    }
}
