// Fade-in on scroll animation
const fadeSections = document.querySelectorAll('.fade-section');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeSections.forEach(section => {
  appearOnScroll.observe(section);
});
