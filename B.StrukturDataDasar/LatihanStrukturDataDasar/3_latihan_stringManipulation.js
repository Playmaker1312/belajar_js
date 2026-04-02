//1.

let namaDepan = "John";
let namaBelakang = "Doe";

kalimatLowerCase = `${namaDepan}${namaBelakang}`.toLowerCase();
console.log(`${kalimatLowerCase}2026 `);

//2.
let kalimatPanjang = "Breaking News: Teknologi AI semakin canggih dan mulai membantu pekerjaan sehari hari di kantor";
let potongKalimat = kalimatPanjang.slice(15, 35);

console.log(potongKalimat); // Output: "Teknologi AI semakin"

//3.
let namaProduk = "sepatu lari";
let harga = 150000;
let diskon = 20000;
let pesan = `Harga ${namaProduk} adalah Rp${harga - diskon}`;
console.log(pesan); // Output: "Harga sepatu lari adalah Rp130000"