const API = 'http://localhost:3001/api/articles';
const artikelList = document.getElementById('artikelList');

fetch(API)
  .then(res => res.json())
  .then(data => {
    artikelList.innerHTML = '';
    data.forEach(a => {
      artikelList.innerHTML += `
        <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
          <h2 class="text-2xl font-semibold text-blue-700 mb-2">${a.title}</h2>
          <p class="text-sm text-gray-500 mb-1">by ${a.author} • ${new Date(a.created_at).toLocaleDateString()}</p>
          <div class="text-gray-700 mb-3">${a.content ? a.content.substring(0, 200) + '...' : ''}</div>
          <a href="artikel.html?id=${a.id}" class="text-blue-500 hover:underline text-sm">Lihat Selengkapnya →</a>
        </div>
      `;
    });
  })
  .catch(err => {
    artikelList.innerHTML = `<p class="text-red-500">Gagal load artikel: ${err}</p>`;
  });
