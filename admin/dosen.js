import { supabase } from "../js/supabaseClient.js";

async function loadDosen() {
  const tableBody = document.getElementById("dosen-list");

  const { data, error } = await supabase
    .from("lecturers")
    .select("*")
    .order("order", { ascending: true });

  if (error) {
    console.error("Gagal mengambil data dosen:", error);
    tableBody.innerHTML = `<tr><td colspan="7" class="text-red-600 py-4">Gagal memuat data dosen.</td></tr>`;
    return;
  }

  if (!data || data.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" class="text-gray-600 py-4">Belum ada data dosen.</td></tr>`;
    return;
  }

  tableBody.innerHTML = '';
  data.forEach((dosen) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="py-2">${dosen.order ?? ''}</td>
      <td class="py-2">${dosen.name}</td>
      <td class="py-2">${dosen.nip}</td>
      <td class="py-2">${dosen.email}</td>
      <td class="py-2">${dosen.field}</td>
      <td class="py-2">
        <a href="${dosen.google_scholar}" target="_blank" class="text-blue-600 underline">Lihat</a>
      </td>
      <td class="py-2 space-x-2">
  <a href="dosen-edit.html?edit=${dosen.id}" class="text-blue-600 underline">Edit</a>
  <button onclick="deleteDosen('${dosen.id}')" class="text-red-600 hover:underline">Hapus</button>
</td>

    `;

    tableBody.appendChild(row);
  });
}

// Optional: Tambah fungsi hapus jika diperlukan
window.deleteDosen = async function (id) {
  if (confirm("Yakin ingin menghapus dosen ini?")) {
    const { error } = await supabase.from("lecturers").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus dosen.");
    } else {
      alert("Dosen berhasil dihapus.");
      loadDosen();
    }
  }
};

document.addEventListener("DOMContentLoaded", loadDosen);
