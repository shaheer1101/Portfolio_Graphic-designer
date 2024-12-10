AOS.init({ offset: 0 });

// Logo disappears when scrolling
window.onscroll = function () {
    const logo = document.getElementById('logo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'block';
    }
}

// Toggle Hamburger menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}
// Circle Progress Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    
    function animateProgress() {
        circles.forEach(circle => {
            const rect = circle.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const percent = circle.getAttribute('data-percent');
                circle.style.background = `conic-gradient(#077b32 ${percent * 100}%, transparent 0)`;
            }
        });
    }

    window.addEventListener('scroll', animateProgress);
    animateProgress(); // Initial check if already in view
});
