import { supabase } from '../js/supabaseClient.js';

const tableBody = document.getElementById('article-list');

async function loadArticles() {
  const { data: articles } = await supabase.from('articles').select('*').order('created_at', { ascending: false });
  tableBody.innerHTML = '';
  articles.forEach((article) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="border-b py-2">${article.title}</td>
      <td class="border-b py-2">
        <button class="text-blue-600 mr-2" onclick="editArticle('${article.id}')">Edit</button>
        <button class="text-red-600" onclick="deleteArticle('${article.id}')">Hapus</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

window.editArticle = async (id) => {
  const { data } = await supabase.from('articles').select('*').eq('id', id).single();
  alert(`Edit fitur diarahkan ke halaman form.html?edit=${data.id}`);
};

window.deleteArticle = async (id) => {
  if (confirm('Yakin mau hapus artikel ini?')) {
    await supabase.from('articles').delete().eq('id', id);
    loadArticles();
  }
};

loadArticles();
