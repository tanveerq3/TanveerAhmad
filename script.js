const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const profilePhoto = document.querySelector('.profile-photo');
const profileFallback = document.querySelector('.profile-fallback');
if (profilePhoto && profileFallback) {
  profilePhoto.addEventListener('load', () => { profileFallback.style.display = 'none'; });
  profilePhoto.addEventListener('error', () => { profilePhoto.style.display = 'none'; profileFallback.style.display = 'grid'; });
}
