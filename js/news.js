import { supabase } from "./supabaseClient.js";

const container = document.getElementById("news-list");

const paginationContainer = document.getElementById("pagination");

let currentPage = 1;
const articlesPerPage = 6;

async function fetchArticles(page = 1, limit = 6) {
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

  const maxVisible = 9;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  const createButton = (label, page, disabled = false, isActive = false) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = `px-3 py-1 rounded ${
      isActive
        ? "bg-primary-950 text-white"
        : "bg-white border text-primary-950 hover:bg-gray-100"
    } ${disabled ? "cursor-not-allowed opacity-50" : ""}`;
    btn.disabled = disabled || isActive;
    if (!disabled && !isActive) {
      btn.addEventListener("click", () => loadPage(page));
    }
    return btn;
  };

  paginationContainer.appendChild(
    createButton("Sebelumnya", currentPage - 1, currentPage === 1)
  );

  if (startPage > 1) {
    paginationContainer.appendChild(createButton("1", 1));
    if (startPage > 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.className = "px-2 text-gray-500";
      paginationContainer.appendChild(dots);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationContainer.appendChild(
      createButton(i.toString(), i, false, i === currentPage)
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.className = "px-2 text-gray-500";
      paginationContainer.appendChild(dots);
    }
    paginationContainer.appendChild(createButton(totalPages.toString(), totalPages));
  }

  paginationContainer.appendChild(
    createButton("Berikutnya", currentPage + 1, currentPage === totalPages)
  );
}

loadPage(currentPage);
