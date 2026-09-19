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
  const showPhoto = () => {
    profilePhoto.style.display = 'block';
    profileFallback.style.display = 'none';
  };

  const showFallback = () => {
    profilePhoto.style.display = 'none';
    profileFallback.style.display = 'grid';
  };

  // Handle normal network loads.
  profilePhoto.addEventListener('load', showPhoto);
  profilePhoto.addEventListener('error', showFallback);

  // Handle refreshes where the browser loads the image from cache
  // before the load listener is attached.
  if (profilePhoto.complete) {
    if (profilePhoto.naturalWidth > 0) showPhoto();
    else showFallback();
  }
}
