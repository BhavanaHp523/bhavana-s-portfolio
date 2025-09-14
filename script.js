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

// Navigation
const pages={
    home:document.getElementById('home'),
    about:document.getElementById('about'),
    contact:document.getElementById('contact')
};
function showPage(name){
    Object.values(pages).forEach(p=>p.classList.remove('active'));
    pages[name].classList.add('active');
    closeDropdown();
}

// Navbar and dropdown links
document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>showPage(l.dataset.page)));
document.querySelectorAll('.dropdown-link').forEach(l=>l.addEventListener('click',()=>showPage(l.dataset.page)));

// About typewriter
const aboutEl=document.querySelector('.about-typewriter');
function typeAbout(){
    const txt=aboutEl.dataset.text;
    aboutEl.innerText='';
    let aIndex=0;
    function t(){
        if(aIndex<txt.length){
            aboutEl.innerText+=txt.charAt(aIndex);
            aIndex++;
            setTimeout(t,30);
        }
    }
    t();
}
// Run about typewriter when About page opens
document.querySelectorAll('.nav-link, .dropdown-link').forEach(l=>{
    l.addEventListener('click', ()=>{
        if(l.dataset.page==='about') typeAbout();
    });
});
