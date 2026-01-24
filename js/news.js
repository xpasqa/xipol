import { supabase } from "./supabaseClient.js";

const container = document.getElementById("news-list");

const paginationContainer = document.getElementById("pagination");

let currentPage = 1;
const articlesPerPage = 12;

async function fetchArticles(page = 1, limit = 12) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, count, error } = await supabase
    .from("articles")
    .select("title, slug, cover_image, published_date, author, category", { count: "exact" })
    .order("published_date", { ascending: false })
    .range(from, to);

  if (error) {
    container.innerHTML = `<p class="text-red-500">Gagal memuat artikel: ${error.message}</p>`;
    throw error;
  }

  return { articles: data, total: count };
}

function renderArticles(articles) {
  container.innerHTML = "";

  if (!articles || articles.length === 0) {
    container.innerHTML = `<p class="text-gray-500">Belum ada artikel yang tersedia.</p>`;
    return;
  }

  articles.forEach((article) => {
    const date = new Date(article.published_date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    container.innerHTML += `
      <a href="article.html?slug=${article.slug}" class="block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
        <img src="${article.cover_image}" alt="${article.title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <p class="text-sm text-primary-950 mb-1">${article.category || "Umum"}</p>
          <h2 class="text-xl font-semibold text-primary-950 mb-1">${article.title}</h2>
          <p class="text-sm text-gray-600">${article.author || 'Admin'} • ${date}</p>
        </div>
      </a>
    `;
  });
}

async function loadPage(page) {
  currentPage = page;
  const { articles, total } = await fetchArticles(page, articlesPerPage);
  renderArticles(articles);
  const totalPages = Math.ceil(total / articlesPerPage);
  renderPagination(totalPages, currentPage);
}

// Pagination handled dynamically; prevBtn and nextBtn removed.

function renderPagination(totalPages, currentPage) {
  paginationContainer.innerHTML = "";

  const createButton = (label, page, disabled) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = `px-4 py-2 rounded ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-primary-950 text-white hover:bg-primary-800"
    }`;
    btn.disabled = disabled;
    if (!disabled) {
      btn.addEventListener("click", () => loadPage(page));
    }
    return btn;
  };

  paginationContainer.appendChild(
    createButton("Sebelumnya", currentPage - 1, currentPage === 1)
  );

  paginationContainer.appendChild(
    createButton("Berikutnya", currentPage + 1, currentPage === totalPages)
  );
}

loadPage(currentPage);
