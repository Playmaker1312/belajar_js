//1.

// variabel nama depan dan belakang
let namaDepan = "John";
let namaBelakang = "Doe";

//variabel umur 
let umur = 30;

// gabungkan
let namaLengkap = namaDepan + " " + namaBelakang;

console.log(`nama lengkap : ${namaLengkap} umur ${umur} tahun`);

//2

// harga barang
let hargaBarang = 150000;

// persentase diskon
let persentaseDiskon = 0.15;

// total diskon
let totalDiskon = hargaBarang * persentaseDiskon;

// harga setelah diskon
let hargaAkhir = hargaBarang - totalDiskon;

console.log(`harga akhir setelah diskon : ${hargaAkhir}`);

//3

let isLoggedIn = true;

let username = "john";

if (isLoggedIn) {
    console.log(`Selamat datang, ${username}`);
}

