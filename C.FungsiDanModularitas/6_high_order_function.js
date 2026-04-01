let daftarHarga = [10000, 25000, 50000, 15000];

//map : mengubah setiap data

// petakan setiap harga dengan diskon 0.9
let hargaDiskon = daftarHarga.map((harga) => harga * 0.9);

console.log(" Setelah Map: ", hargaDiskon);

//filter : menyaring data

// saring harga yang lebih dari 20000
let hargaMahal = daftarHarga.filter((harga) => harga > 20000);

console.log(" Setelah Filter: ", hargaMahal);

// reduce : merangkum data menjadi satu nilai 

let totalBelanja = daftarHarga.reduce((totalSementara, harga) => totalSementara + harga, 0);

console.log(" Setelah Reduce: ", totalBelanja);

// bukti array asli tidak pernah di sentuh sama sekali
console.log("array asli : ", daftarHarga);

