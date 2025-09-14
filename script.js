// Hamburger menu
function hamburg(){document.querySelector('.dropdown').style.transform='translateY(0)';}
function cancel(){document.querySelector('.dropdown').style.transform='translateY(-500px)';}

// Home Typewriter
const texts=["Engineering Student"];
const textElements=document.querySelector('.typewriter-text');
let textIndex=0,characterIndex=0;
function typeWriter(){
    if(characterIndex<texts[textIndex].length){
        textElements.innerHTML+=texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter,100);
    }else setTimeout(eraseText,1000);
}
function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }else{textIndex=(textIndex+1)%texts.length;characterIndex=0;setTimeout(typeWriter,500);}
}
window.onload=typeWriter;

// Sections
const homePage=document.getElementById('home-page');
const aboutPage=document.getElementById('about-page');
const contactPage=document.getElementById('contact-page');
const aboutTextElement=document.querySelector('.about-typewriter');
const aboutText=aboutTextElement.innerText;
aboutTextElement.innerText='';
let i=0;
function typeAbout(){
    if(i<aboutText.length){aboutTextElement.innerText+=aboutText.charAt(i);i++;setTimeout(typeAbout,50);}
}

// Show section
function showSection(section){
    homePage.style.display='none';aboutPage.style.display='none';contactPage.style.display='none';
    if(section==='home')homePage.style.display='block';
    else if(section==='about'){aboutPage.style.display='block';i=0;aboutTextElement.innerText='';typeAbout();}
    else if(section==='contact')contactPage.style.display='block';
    cancel();
}

// Navigation links
document.querySelectorAll('nav a, .dropdown a').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href=this.getAttribute('href');
        if(href==='#home')showSection('home');
        else if(href==='#about')showSection('about');
        else if(href==='#contact')showSection('contact');
    });
});
