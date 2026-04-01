/**
 * Menghitung total harga setelah dikenakan diskon dan pajak.
 * Fungsi ini tidak akan mengubah harga asli di database.
 * * @param {number} hargaAsli - Harga awal barang sebelum diskon.
 * @param {number} persentaseDiskon - Diskon dalam bentuk persen (misal: 20 untuk 20%).
 * @returns {number} - Mengembalikan total harga bersih yang harus dibayar pembeli.
 */
function hitungTotalPembayaran(hargaAsli, persentaseDiskon) {
    let nilaiDiskon = hargaAsli * (persentaseDiskon / 100);
    let setelahDiskon = hargaAsli - nilaiDiskon;
    let pajak = setelahDiskon * 0.11; // PPN 11%
    
    return setelahDiskon + pajak;
}

// Saat Anda mengetik 'hitungTotalPembayaran(' di editor kode, 
// VS Code akan otomatis menampilkan kotak bantuan: 
// "hargaAsli (number): Harga awal barang sebelum diskon."
