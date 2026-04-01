// stack

let riwayatBrowser = [];

// push : menambah halama baru
riwayatBrowser.push("Halaman Utama");
riwayatBrowser.push("Halaman Produk");
riwayatBrowser.push("Halaman Keranjang");



// pop : kembali ke halaman sebelumnya
let halamanKembali = riwayatBrowser.pop();

console.log("Kembali dari : " + halamanKembali); // Output: "Kembali dari : Halaman Keranjang"
console.log("Riwayat Browser Saat Ini: " + riwayatBrowser); // Output: "Riwayat Browser Saat Ini: Halaman Utama,Halaman Produk"

// queue
let antreanPesan = [];

// enqueue : menambah pesan baru ke antrean
antreanPesan.push("Pesan Dari Budi");
antreanPesan.push("Pesan Dari Siti");
antreanPesan.push("Pesan Dari Andi");

// dequeue : memproses pesan pertama dalam antrean
let pesanDiproses = antreanPesan.shift();

// Output: "Memproses: Pesan Dari Budi"
console.log("Memproses: " + pesanDiproses);
console.log("Antrean Pesan Saat Ini: " + antreanPesan); // Output: "Antrean Pesan Saat Ini: Pesan Dari Siti,Pesan Dari Andi"