// Toggle the navbar menu on mobile
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Optionally, add smooth scroll on link click
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});
