// Fade-up on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Skill bars animate when visible
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fills = e.target.querySelectorAll('.skill-fill');
      fills.forEach((f, i) => {
        const w = f.dataset.w;
        setTimeout(() => {
          f.style.transform = `scaleX(${w})`;
        }, i * 80);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const grid = document.getElementById('skills-grid');
if (grid) skillObs.observe(grid);

// Smooth nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur
      ? 'var(--text)'
      : 'var(--muted)';
  });
});