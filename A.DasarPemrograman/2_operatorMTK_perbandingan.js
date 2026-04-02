// operator matematika 

let hargaSepatu = 200000;
let diskon = 50000;

let setelahHargaDiskon = hargaSepatu - diskon;
let pajak = setelahHargaDiskon * 0.10;
let totalBayar = setelahHargaDiskon + pajak;

console.log(`total bayar : ${totalBayar}`);

//operator perbandingan
let uangDompet = 200000;

// membandingkan total bayar dengan uang dompet

let isUangCukup = uangDompet >= totalBayar;

console.log(`apakah uang cukup ? ${isUangCukup}`);

//contoh penggunaan indentik
let angkaTeks = "5"; //string
let angkaBeneran = 5; // number

console.log(angkaTeks == angkaBeneran); // true karena hanya membandingkan nilai
console.log(angkaTeks === angkaBeneran); // false karena membandingkan nilai dan tipe data