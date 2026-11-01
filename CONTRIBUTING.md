# Panduan Berkontribusi Pull Shark 🦈

Terima kasih telah berkontribusi ke repository SharkyBed!

## Format Kontribusi
Kamu bisa memilih salah satu cara berkontribusi:

### Opsi A: Tambah baris di `SHARKS.md` (Paling Mudah)
Cukup tambahkan baris baru di tabel `SHARKS.md`:
```markdown
| No | Username GitHub | Tanggal PR | Target Badge | Pesan / Motto |
|:---|:---|:---|:---|:---|
| ... | [@username-kamu](https://github.com/username-kamu) | 2026-11-01 | Bronze x1 | Hunter badge! 🦈 |
```

### Opsi B: Tambah data di `data/sharks.json` (Untuk Tampil di Web)
Tambahkan objek JSON berikut ke dalam array `data/sharks.json`:
```json
{
  "username": "username-github",
  "name": "Nama Panggilan",
  "sharkType": "Tiger Shark 🦈",
  "quote": "Pesan semangat kamu!",
  "avatar": "https://avatars.githubusercontent.com/username-github",
  "badgeLevel": "Bronze",
  "links": {
    "github": "https://github.com/username-github"
  }
}
```

Setelah PR dibuat, bot GitHub Actions akan otomatis me-merge PR kamu! 🎉
