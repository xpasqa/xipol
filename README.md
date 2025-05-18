# XIPOL CMS

**XIPOL CMS** adalah dashboard admin ringan dan responsif yang dibangun menggunakan **Tailwind CSS** dan **Vanilla JavaScript**. Sistem ini dirancang khusus untuk memenuhi kebutuhan pengelolaan konten di lingkungan **Program Studi Ilmu Politik**.

## ✨ Fitur Utama
- 🔥 Antarmuka modern dan cepat berbasis Tailwind
- 📄 Kelola artikel dengan integrasi ke Supabase
- 📁 Struktur halaman statis yang terhubung ke backend ringan
- 👥 Manajemen pengguna (login & register)

## 📁 Struktur Folder
```
├── admin/               # Halaman dashboard admin
├── components/          # Header/footer modular
├── img/                 # Gambar
├── js/                  # Supabase client & logic frontend
├── article.php          # Menampilkan artikel berdasarkan slug
├── index.html           # Halaman utama publik
├── news.html            # Halaman daftar semua artikel
├── login.html           # Halaman login admin
├── register.html        # Halaman registrasi
├── .github/workflows/   # Ping otomatis ke Supabase via GitHub Actions
├── .htaccess            # Redirect slug.html → article.php
└── README.md            # Dokumentasi
```

## 🚀 Teknologi
- **Frontend**: HTML + Tailwind CSS + Vanilla JS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Static hosting compatible (Netlify, Vercel, hPanel, dsb)

## ⚙️ Fitur Mendatang
- Editor teks WYSIWYG
- Upload gambar ke Supabase Storage
- Filter & pencarian artikel
- Hak akses user: admin vs editor

## 📌 Catatan
Supabase API diping otomatis tiap 3 hari via GitHub Actions untuk menjaga project tetap aktif.

---

> Dibuat untuk mendukung pengelolaan konten akademik di Ilmu Politik UIN Bandung.
