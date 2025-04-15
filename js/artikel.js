// artikel.js
const API = 'http://localhost:3001/api/articles';
const artikelContainer = document.getElementById('artikelContainer');

// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id) {
  artikelContainer.innerHTML = '<p class="text-red-500">ID artikel tidak ditemukan.</p>';
} else {
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(a => {
      artikelContainer.innerHTML = `
        <h1 class="text-3xl font-bold text-blue-700 mb-2">${a.title}</h1>
        <p class="text-sm text-gray-500 mb-4">by ${a.author} • ${new Date(a.created_at).toLocaleDateString()}</p>
        <div class="text-gray-800 leading-relaxed">${a.content}</div>
      `;
    })
    .catch(err => {
      artikelContainer.innerHTML = `<p class="text-red-500">Gagal load artikel: ${err}</p>`;
    });
}
