// ====== Smooth Scrolling for Navigation Links ======
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 60, // offset for navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ====== Scroll Reveal Animation ======
function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// ====== Light/Dark Mode Toggle ======
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
function setMode(dark) {
    if (dark) {
        body.classList.add('dark-mode');
        modeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        modeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}
modeToggle.addEventListener('click', () => {
    setMode(!body.classList.contains('dark-mode'));
});
// Load theme from storage
if (localStorage.getItem('theme') === 'dark') setMode(true);

// ====== Scroll-to-Top Button ======
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-top-btn';
scrollBtn.title = 'Scroll to top';
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);
scrollBtn.style.display = 'none';
window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== Mobile Navigation Toggle ======
// Create hamburger button
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    nav.insertBefore(hamburger, navLinks);
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
        });
    });
});

// ====== Active Nav Link Highlight on Scroll ======
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ====== Contact Form Validation ======
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        // Name validation
        const name = form.name.value.trim();
        const nameError = document.getElementById('name-error');
        if (!name) {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }
        // Email validation
        const email = form.email.value.trim();
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }
        // Message validation
        const message = form.message.value.trim();
        const messageError = document.getElementById('message-error');
        if (!message) {
            messageError.textContent = 'Message is required.';
            valid = false;
        } else {
            messageError.textContent = '';
        }
        // Success
        const formSuccess = document.getElementById('form-success');
        if (valid) {
            formSuccess.textContent = 'Thank you! Your message has been sent.';
            form.reset();
            setTimeout(() => { formSuccess.textContent = ''; }, 4000);
        } else {
            formSuccess.textContent = '';
        }
    });
}

// ====== Accessibility: Keyboard Navigation for Hamburger ======
document.addEventListener('keydown', function(e) {
    const hamburger = document.getElementById('hamburger');
    if (hamburger && (e.key === 'Enter' || e.key === ' ')) {
        if (document.activeElement === hamburger) {
            hamburger.click();
        }
    }
});

// ====== Console Greeting ======
console.log('Welcome to Khushi Kumari\'s Portfolio!'); 