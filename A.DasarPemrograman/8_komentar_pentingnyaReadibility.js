// ❌ CONTOH BURUK (Readability rendah, penamaan variabel tidak jelas, komentar tidak berguna)
let x = 10000; // bikin variabel x isi 10000
let y = x * 0.11; // kali dengan 0.11
let z = x + y; // tambah x dan y

// ✅ CONTOH BAIK (Readability tinggi, variabel jelas, komentar memberi konteks "Mengapa")
let hargaLaptop = 10000;

// Menggunakan PPN 11% sesuai dengan penyesuaian tarif pajak pemerintah tahun 2022
let nilaiPajak = hargaLaptop * 0.11; 
let totalHarga = hargaLaptop + nilaiPajak;

/*
  Catatan Revisi: 
  Fungsi diskon sementara dimatikan karena ada bug pada sistem database.
  Akan diperbaiki pada sprint minggu depan. - Budi
*/
// let totalSetelahDiskon = totalHarga - 500; 