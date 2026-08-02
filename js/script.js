// Hamburger
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => mob.classList.toggle('open'));
function closeMobile() { mob.classList.remove('open'); }


// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            e.target.style.transitionDelay = `${i * 0.07}s`;
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
    });
}, { passive: true });


// Contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Default reload are off
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const subject = document.getElementById("sub").value.trim();
    const messages = document.getElementById("messages").value.trim();
    if (firstName === "" && lastName === "" && mail === "" && subject === "" && messages === "") {
        console.log("Your input box was empty!");
    } else {
        alert("Message received! Reading this over my next cup of coffee. ☕");
        contactForm.reset();
    }
});