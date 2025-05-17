import { supabase } from "../js/supabaseClient.js";

const tableBody = document.getElementById("article-list");

// Add toast container
const toastContainer = document.createElement("div");
toastContainer.className = "fixed bottom-4 right-4 z-50 space-y-2";
document.body.appendChild(toastContainer);

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `px-4 py-2 rounded shadow text-white animate-fade-in-up ${
    type === "success" ? "bg-green-600" : "bg-red-600"
  }`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

async function loadArticles() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("id, title")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    tableBody.innerHTML = `<tr><td colspan='2' class='py-4 text-red-600'>Gagal memuat data artikel</td></tr>`;
    return;
  }

  if (!articles.length) {
    tableBody.innerHTML = `<tr><td colspan='2' class='py-4 text-gray-500'>Belum ada artikel.</td></tr>`;
    return;
  }

  tableBody.innerHTML = "";
  articles.forEach((article) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border-b py-2">${article.title}</td>
      <td class="border-b py-2 space-x-2">
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
        showToast("Gagal menghapus artikel: " + error.message, "error");
      } else {
        showToast("Artikel berhasil dihapus.", "success");
        loadArticles();
      }
    });
  });
}

// CSS animation via tailwind plugin
const style = document.createElement("style");
style.textContent = `
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out;
  }
`;
document.head.appendChild(style);

loadArticles();
git