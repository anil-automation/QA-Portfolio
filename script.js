const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
      nav.classList.remove('open');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
