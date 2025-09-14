// Hamburger menu
function openDropdown(){document.querySelector('.dropdown').style.transform='translateY(0)';}
function closeDropdown(){document.querySelector('.dropdown').style.transform='translateY(-100%)';}

// Home Typewriter
const homeTextEl=document.querySelector('.typewriter-text');
const homeTexts=["Engineering Student"];
let hIndex=0,hChar=0;
function typeHome(){
    if(hChar<homeTexts[hIndex].length){
        homeTextEl.innerHTML+=homeTexts[hIndex].charAt(hChar);
        hChar++;
        setTimeout(typeHome,100);
    } else setTimeout(eraseHome,1000);
}
function eraseHome(){
    if(homeTextEl.innerHTML.length>0){
        homeTextEl.innerHTML=homeTextEl.innerHTML.slice(0,-1);
        setTimeout(eraseHome,50);
    } else {hIndex=(hIndex+1)%homeTexts.length;hChar=0;setTimeout(typeHome,500);}
}
window.onload=typeHome;

// Page navigation
const pages={
    home:document.getElementById('home'),
    about:document.getElementById('about'),
    contact:document.getElementById('contact')
};

function showPage(name){
    Object.values(pages).forEach(p=>p.classList.remove('active'));
    pages[name].classList.add('active');
    closeDropdown();
    if(name==='about') startAboutTypewriter();
}

// Nav links
document.querySelectorAll('.nav-link, .dropdown-link').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        showPage(link.getAttribute('data-page'));
    });
});

// About Typewriter
const aboutTextEl=document.querySelector('.about-typewriter');
let aboutTextContent=aboutTextEl?aboutTextEl.innerText:'';
if(aboutTextEl) aboutTextEl.innerText='';
let aboutIndex=0;

function startAboutTypewriter(){
    if(!aboutTextEl) return;
    aboutTextEl.innerText='';
    aboutIndex=0;
    typeAbout();
}

function typeAbout(){
    if(aboutIndex<aboutTextContent.length){
        aboutTextEl.innerText+=aboutTextContent.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAbout,30);
    }
}
