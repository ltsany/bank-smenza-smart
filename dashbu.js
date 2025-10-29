// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animasi untuk feature cards dengan Intersection Observer
const featureCards = document.querySelectorAll('.feature-card');

// Tambahkan transition untuk animasi
featureCards.forEach(card => {
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe setiap feature card
featureCards.forEach(card => {
    observer.observe(card);
});

// Fungsi untuk tombol "Buka"
document.querySelectorAll('.feature-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.feature-card');
        const featureName = card.querySelector('h3').textContent;

        // Animasi klik
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);

        // Simulasi aksi buka fitur
        console.log(`Membuka fitur: ${featureName}`);
        alert(`Fitur "${featureName}" akan dibuka!`);
    });
});

// Optional: Navigation effect saat scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
        nav.style.backdropFilter = 'blur(15px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.backdropFilter = 'blur(10px)';
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});