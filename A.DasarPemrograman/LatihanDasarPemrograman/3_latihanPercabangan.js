
//1.
// input variabel

let passwordInput = "kopi123";
let passwordInputBenar = "kopi123";

// proses pengecekan
if (passwordInput === passwordInputBenar) {
    console.log(`berhasil login`);
}else {
    console.log(`password salah, coba lagi`);
}


//2.

let tinggiBadan = 175;

if (tinggiBadan >= 180) {
    console.log(`kategori : pemain utama`);
}else if(tinggiBadan >= 170) {
    console.log(`kategori : pemain cadangan`);
}else {
    console.log(`kategori : tim latihan`)
}

//3.
let angka = 11;

if (angka % 2 === 0) {
    console.log(`${angka} adalah bilangan genap`);
}else {
    console.log(`${angka} adalah bilangan ganjil`);
}

