// dashboard.js

const API = 'http://localhost:3001/api/articles';
const form = document.getElementById('formArtikel');
const artikelList = document.getElementById('artikelList');
let editingId = null;

// Load semua artikel
function loadArtikel() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        artikelList.innerHTML = '';
        data.forEach(a => {
          artikelList.innerHTML += `
            <div class="bg-white p-4 rounded shadow relative">
              <h3 class="text-lg font-bold">${a.title}</h3>
              <p class="text-sm text-gray-500">by ${a.author} | ${a.tags}</p>
              <div class="mt-2 text-sm">${a.content ? a.content.substring(0, 100) : ''}...</div>
              <p class="text-xs text-right text-${a.status === 'published' ? 'green' : 'yellow'}-600 capitalize">${a.status}</p>
              <div class="absolute top-2 right-2 space-x-2">
                <button onclick="editArtikel(${a.id})" class="text-blue-600 hover:underline text-sm">Edit</button>
                <button onclick="deleteArtikel(${a.id})" class="text-red-600 hover:underline text-sm">Hapus</button>
              </div>
            </div>
          `;
        });
      })
      .catch(err => {
        artikelList.innerHTML = `<p class="text-red-500">Gagal load artikel: ${err}</p>`;
      });
  }
}

// Submit form (create or update)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newArtikel = {
    title: form.title.value,
    author: form.author.value,
    image: form.image.value,
    content: tinymce.get("content").getContent(),
    tags: form.tags.value,
    status: form.status.value
  };

  const method = editingId ? 'PUT' : 'POST';
  const url = editingId ? `${API}/${editingId}` : API;

  fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newArtikel)
  })
    .then(res => res.json())
    .then(data => {
      alert(editingId ? 'Artikel berhasil diupdate' : 'Artikel berhasil ditambahkan');
      form.reset();
      loadArtikel(); // ⬅️ ini WAJIB dipanggil ulang setelah submit
      tinymce.get("content").setContent('');
      editingId = null;
      form.querySelector('button[type="submit"]').textContent = "Tambah Artikel";
      loadArtikel();
    })
    .catch(err => {
      alert('Gagal menyimpan artikel: ' + err.message);
    });
});

// Edit Artikel
function editArtikel(id) {
  fetch(`${API}/${id}`)
    .then(res => res.json())
    .then(a => {
      form.title.value = a.title;
      form.author.value = a.author;
      form.image.value = a.image;
      tinymce.get("content").setContent(a.content);
      form.tags.value = a.tags;
      form.status.value = a.status;
      editingId = a.id;

      form.querySelector('button[type="submit"]').textContent = "Update Artikel";
    });
}

// Delete Artikel
function deleteArtikel(id) {
  if (confirm("Yakin ingin menghapus artikel ini?")) {
    fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        loadArtikel();
      });
  }
}

// Load awal
loadArtikel();
