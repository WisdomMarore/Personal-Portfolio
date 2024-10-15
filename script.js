// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP animations
gsap.from('.hero h1, .hero h2, .hero .cta-button', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.skill', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
});

gsap.from('.project', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('form input, form textarea, form button', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
});