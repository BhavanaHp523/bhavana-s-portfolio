// Hamburger menu
function hamburg(){document.querySelector('.dropdown').style.transform='translateY(0)';}
function cancel(){document.querySelector('.dropdown').style.transform='translateY(-100%)';}

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
let i=
