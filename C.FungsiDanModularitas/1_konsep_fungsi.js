// deklarasi fungsi dengan dua parameter
function hitungHargaAkhir(hargaAsli, persentaseDiskon) {
    // proses perhitungan 
    let potongan = hargaAsli * (persentaseDiskon / 100);
    let hargaAkhir = hargaAsli - potongan;

    // return value (mengirimkan hasil kembali ke luar fungsi)
    return hargaAkhir;
}


// pemanggilan fungsi dengan argumen (100000, 20);
let totalBayar = hitungHargaAkhir(100000, 20);

console.log("Total Bayar: " + totalBayar); // Output: "Total Bayar: 80000"

//fungsi bisa dipanggil berulang kali dengan data berbeda
let totalBayar2 = hitungHargaAkhir(50000, 10);
console.log("Total Bayar: " + totalBayar2); // Output: "Total Bayar: 45000"