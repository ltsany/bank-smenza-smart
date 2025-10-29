(function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nama = form.nama.value.trim();
        const email = form.email.value.trim();
        const pesan = form.pesan.value.trim();

        if (!nama || !email || !pesan) {
            feedback.textContent = 'Mohon lengkapi semua field sebelum mengirim.';
            feedback.style.color = '#b91c1c';
            return;
        }

        feedback.textContent = 'Pesan terkirim. Terima kasih — admin akan menghubungi Anda.';
        feedback.style.color = '#15803d';

        form.reset();
        setTimeout(() => feedback.textContent = '', 5000);
    });
})();