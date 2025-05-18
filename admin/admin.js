import { supabase } from "../js/supabaseClient.js";

const tableBody = document.getElementById("article-list");

async function loadArticles() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("id, title, slug, author, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    tableBody.innerHTML = `<tr><td colspan='4' class='py-4 text-red-600'>Gagal memuat data artikel</td></tr>`;
    return;
  }

  if (!articles.length) {
    tableBody.innerHTML = `<tr><td colspan='4' class='py-4 text-gray-500'>Belum ada artikel.</td></tr>`;
    return;
  }

  tableBody.innerHTML = "";
  articles.forEach((article) => {
    const publishedDate = new Date(article.created_at).toLocaleDateString();
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border-b py-2">${article.title}</td>
      <td class="border-b py-2">${article.author || "-"}</td>
      <td class="border-b py-2">${publishedDate}</td>
      <td class="border-b py-2 space-x-2">
        <a href="/${article.slug}" class="text-green-600 hover:underline text-sm" target="_blank">View</a>
        <a href="form.html?edit=${article.id}" class="text-blue-600 hover:underline text-sm">Edit</a>
        <button class="delete-btn text-red-600 hover:underline text-sm" data-id="${article.id}">Hapus</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  addDeleteListeners();
}

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-id");
      const konfirmasi = confirm("Yakin ingin menghapus artikel ini?");
      if (!konfirmasi) return;

      const { error } = await supabase.from("articles").delete().eq("id", id);

      if (error) {
        alert("Gagal menghapus artikel: " + error.message);
      } else {
        alert("Artikel berhasil dihapus.");
        loadArticles();
      }
    });
  });
}

loadArticles();