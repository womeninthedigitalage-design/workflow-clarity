const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));

const words = ['follow-up', 'lead capture', 'client onboarding', 'admin'];
const wordTarget = document.querySelector('#rotating-word');
let wordIndex = 0;
if (wordTarget) setInterval(() => {
  wordTarget.style.opacity = '0'; wordTarget.style.transform = 'translateY(8px)';
  setTimeout(() => { wordIndex = (wordIndex + 1) % words.length; wordTarget.textContent = words[wordIndex]; wordTarget.style.opacity = '1'; wordTarget.style.transform = 'translateY(0)'; }, 180);
}, 2400);

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
