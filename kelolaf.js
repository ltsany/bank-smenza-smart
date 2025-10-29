// Filter + Search script
const filter = document.getElementById('filterKelas');
const search = document.getElementById('search');
const rows = document.querySelectorAll('#dataTable tbody tr');

// support if search input doesn't exist
if (!search) {
    // create a reference to avoid errors
    window.search = { value: '' };
}

function applyFilters() {
    const selected = (filter ? filter.value.toLowerCase() : 'all');
    const query = (document.getElementById('search') ? document.getElementById('search').value.toLowerCase() : '').trim();

    rows.forEach(row => {
        const kelas = row.cells[3].textContent.toLowerCase().trim();
        const nama = row.cells[1].textContent.toLowerCase();
        const nis = row.cells[2].textContent.toLowerCase();

        const matchKelas = (selected === 'all') || (kelas === selected);
        const matchSearch = (query === '') || (nama.includes(query) || nis.includes(query));

        row.style.display = (matchKelas && matchSearch) ? '' : 'none';
    });
}

if (filter) filter.addEventListener('change', applyFilters);
if (document.getElementById('search')) document.getElementById('search').addEventListener('input', applyFilters);

// run once on load to ensure consistency
applyFilters();