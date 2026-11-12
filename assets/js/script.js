// 1. Dark / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
    themeIcon.className = newTheme === 'light' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
});

// 2. Filter Kategori Proyek
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Ubah status aktif tombol
        filterButtons.forEach(b => {
            b.classList.remove('btn-primary', 'active');
            b.classList.add('btn-outline-primary');
        });
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-primary', 'active');

        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 3. Validasi & Simulasi Pengiriman Form Kontak
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formAlert.classList.remove('d-none');
    contactForm.reset();

    setTimeout(() => {
        formAlert.classList.add('d-none');
    }, 4000);
});