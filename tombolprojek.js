// Toggle menu mobile
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Tutup menu saat link diklik
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Validasi form kontak
const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Semua field wajib diisi.';
    status.style.color = '#E74C3C';
    return;
  }

  status.textContent = 'Pesan berhasil dikirim!';
  status.style.color = '#6C5CE7';
  form.reset();
});

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dot navigasi + highlight section aktif saat scroll
const dotButtons = document.querySelectorAll('.dot-nav button');
const allSections = document.querySelectorAll('section[id]');

dotButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dotButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === entry.target.id);
      });
    }
  });
}, { threshold: 0.5 });

allSections.forEach(sec => sectionObserver.observe(sec));