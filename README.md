# 🗳️ XIPOL

**XIPOL CMS** adalah dashboard admin ringan dan responsif yang dibangun dengan [Tailwind CSS](https://tailwindcss.com/) dan **Vanilla JavaScript**. Dirancang untuk kebutuhan program studi Ilmu Politik, CMS ini memungkinkan admin untuk mengelola artikel, halaman, dan pengguna dengan mudah.

---

## 🎯 Fitur

- 🔒 Login admin menggunakan Firebase Authentication
- 📚 CRUD artikel (judul, gambar, isi, tag, author)
- 🖼️ Upload gambar (siap terintegrasi dengan Firebase Storage)
- 📝 Editor WYSIWYG menggunakan Quill.js
- 🧩 Komponen modular (sidebar, header)
- 🌓 Sidebar bisa di-minimize dengan ikon-only mode
- 🎨 Styling penuh dengan Tailwind (tema warna Ilmu Politik)
- ⚡ Tidak butuh framework frontend

---

## 🏗️ Struktur Folder

```
xilmupolitik/
├── index.html              # Halaman publik / blog
├── login.html              # Halaman login admin
├── register.html           # Halaman pendaftaran (opsional)
├── dashboard.html          # Panel utama admin
├── article.html            # Manajemen & input artikel
├── user.html               # Manajemen pengguna (opsional)
├── components/
│   ├── sidebar.js          # Komponen sidebar modular
│   ├── header.js           # Komponen header (jika dipakai)
├── js/
│   ├── auth.js             # Login Firebase
│   ├── dashboard.js        # Logika CRUD (jika pakai Firebase)
├── assets/                 # Gambar dan aset tambahan
└── README.md               # Dokumentasi proyek
```

---

## 🔧 Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/yourusername/xilmupolitik.git
cd xilmupolitik
```

### 2. Konfigurasi Firebase (Opsional)

Jika ingin menggunakan Firebase:

- Buat project di [Firebase Console](https://console.firebase.google.com/)
- Aktifkan:
  - **Authentication → Email/Password**
  - **Firestore Database**
  - **Storage**
- Masukkan config ke dalam file JS:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
```

### 3. Buka di browser

Buka file `index.html` atau `dashboard.html` di browser secara langsung, atau host di GitHub Pages / Netlify / Vercel.

---

## 🖼️ Preview

> Tambahkan screenshot atau preview UI di sini nanti.

---

## 🤝 Kontribusi

Ingin membantu proyek ini? Silakan fork repo ini dan kirim pull request. Kontribusi dari siapa pun sangat dihargai.

---

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT** — bebas digunakan dan dimodifikasi untuk kebutuhan akademik maupun publik.

---

## ✉️ Kontak
Untuk kolaborasi atau pertanyaan, silakan hubungi langsung melalui GitHub.
