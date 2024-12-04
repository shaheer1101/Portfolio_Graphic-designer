// Initialize AOS (Animate On Scroll)
AOS.init({ offset: 0 });

// Function to show the hamburger menu (open)
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

// Function to close the hamburger menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "GRAPHIC DESIGNER",
    "VIDEO EDITOR",
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Change header opacity and logo position on scroll
window.onscroll = function() {
    const navbar = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    
    if (window.scrollY > 50) { // When scrolled more than 50px
        navbar.classList.add('scrolled'); // Add class to make the logo disappear
        logo.style.opacity = '0'; // Optional: Hide the logo when scrolling
    } else {
        navbar.classList.remove('scrolled'); // Remove class to restore the logo
        logo.style.opacity = '1'; // Restore logo visibility
    }
};
