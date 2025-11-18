const form = document.getElementById('transaksiForm');
const tbody = document.querySelector('#tabelTransaksi tbody');

let dataTransaksi = JSON.parse(localStorage.getItem('dataTransaksi')) || [];

function tampilkanData() {
    tbody.innerHTML = '';
    dataTransaksi.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.nis}</td>
      <td>${item.tanggal}</td>
      <td>${item.jenis}</td>
      <td>${parseInt(item.jumlah).toLocaleString('id-ID')}</td>
      <td>${item.bulan}</td>
      <td>${item.keterangan}</td>
    `;
        tbody.appendChild(tr);
    });
}

tampilkanData();

form.addEventListener('submit', e => {
    e.preventDefault();

    const transaksiBaru = {
        nama: document.getElementById('nama').value,
        nis: document.getElementById('nis').value,
        tanggal: document.getElementById('tanggal').value,
        jenis: document.getElementById('jenis').value,
        jumlah: document.getElementById('jumlah').value,
        bulan: document.getElementById('bulan').value,
        keterangan: document.getElementById('keterangan').value
    };

    dataTransaksi.push(transaksiBaru);
    localStorage.setItem('dataTransaksi', JSON.stringify(dataTransaksi));
    tampilkanData();
    form.reset();
});
