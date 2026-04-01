let namaDepan = "John";
let namaBelakang = "Doe";
let kalimatPanjang ="Belajar JavaScript itu menyenangkan!";

// concetanition  (penggabungan dengan tanda +)
let namaLengkap = namaDepan + " " + namaBelakang;
console.log(namaLengkap); // Output: "John Doe"


//formating (lebih rapi dari +)
let namaLengkapFormat = `${namaDepan} ${namaBelakang}`;
console.log(namaLengkapFormat); // Output: "John Doe"

//slicing (memotong string);
let potonganKalimat = kalimatPanjang.slice(8, 18);
console.log(potonganKalimat); // Output: "JavaScript"

//case conversion
let kalimatUpperCase = kalimatPanjang.toUpperCase();
console.log(kalimatUpperCase); // Output: "BELAJAR JAVASCRIPT ITU MENYENANGKAN!"
let kalimatLowerCase = kalimatPanjang.toLowerCase();
console.log(kalimatLowerCase); // Output: "belajar javascript itu menyenangkan!"