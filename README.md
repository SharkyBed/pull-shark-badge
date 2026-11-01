# 🦈 SharkyBed — Arena Panen Badge Pull Shark

Selamat datang di repository resmi organisasi **[SharkyBed](https://github.com/SharkyBed)**!  
Repository ini dibuat khusus sebagai sarana untuk belajar membuat **Pull Request (PR)** sekaligus mendapatkan badge achievement profil GitHub: **Pull Shark 🦈** (Level 1, Level 2, dan Level 3)!

---

## 🏆 Tingkatan Badge Pull Shark
| Level | Syarat Merged PR | Tampilan Badge | Keterangan |
|:---:|:---:|:---:|:---|
| **Level 1** | **1 PR** | 🥉 Pull Shark | Langsung dapat setelah 1x PR di-merge |
| **Level 2** | **16 PRs** | 🥈 Pull Shark x2 | Perlu 16 Pull Request berhasil di-merge |
| **Level 3** | **128 PRs** | 🥇 Pull Shark x3 (Gold) | Level tertinggi Pull Shark |

> ⚡ **Auto-Merge Aktif:** Repository ini dilengkapi GitHub Actions yang otomatis me-review dan me-*merge* PR kamu dalam hitungan detik!

---

## 🚀 Cara Cepat Mendapatkan Badge (Lewat Browser)

Tidak perlu install apa pun! Kamu bisa melakukannya langsung dari browser:
1. Klik tombol **Fork** di pojok kanan atas repository ini.
2. Di repo hasil fork milikmu, buka file [`SHARKS.md`](SHARKS.md).
3. Klik icon pensil ✏️ (**Edit this file**).
4. Tambahkan baris nama dan username GitHub kamu pada tabel.
5. Klik **Commit changes...**.
6. Klik tombol kuning **"Compare & pull request"**.
7. Beri judul PR kamu, lalu klik **Create pull request**.
8. Tunggu 10–30 detik, bot SharkyBed akan otomatis me-merge PR kamu! 🎉
9. Cek profil GitHub kamu di bagian **Achievements** &mdash; badge **Pull Shark** akan segera muncul! 🦈

---

## 💻 Cara Lewat Terminal / Git Lokal

```bash
# 1. Clone repo fork kamu
git clone https://github.com/<USERNAME-KAMU>/pull-shark-badge.git
cd pull-shark-badge

# 2. Buat branch baru
git checkout -b hiu-baru-<namamu>

# 3. Edit data/sharks.json atau SHARKS.md
# Tambahkan info profil kamu

# 4. Commit dan push
git add .
git commit -m "feat: add shark hunter <namamu> 🦈"
git push origin hiu-baru-&lt;namamu&gt;

# 5. Buka Pull Request di GitHub
```

---

## 🌐 Menjalankan Web Showcase Lokal
Website showcase murni menggunakan HTML, CSS, dan Vanilla JavaScript:
- Cukup buka file `index.html` langsung di browser, atau
- Jalankan `python3 -m http.server 8000` atau extension Live Server di VS Code.

---

## 🤝 Aturan Berburu Badge
- Jangan menghapus data kontributor atau hiu lain yang sudah ada.
- Gunakan pesan commit yang sopan dan ramah.
- Kamu boleh membuat beberapa PR berkala untuk menaikkan level badge dari Bronze &rarr; Silver &rarr; Gold!

Happy Pull Requesting! 🦈✨
