// //1.
// let stactUndo = [];

// stactUndo.push("halo");
// stactUndo.push("Nama");
// stactUndo.push("Saya");

// let kataDibatalkan = stactUndo.pop();

// console.log(`Membatalkan kata ${kataDibatalkan}`);
// console.log(`${stactUndo}`);

// //2.
// let antreanPrinter = [];

// antreanPrinter.push("Laporan_Keuangan.pdf");
// antreanPrinter.push("Laporan_kontrak.pdf");
// antreanPrinter.push("Foto_Profil.pdf");

// let dokumenDicetak = antreanPrinter.shift();

// console.log(`sedangMencetak ${dokumenDicetak}`);
// console.log(antreanPrinter)

//3.

let kataAsli = "javascript";
let tumpukanHuruf = [];

for (let i = 0; i < kataAsli.length; i++){
    tumpukanHuruf.push(kataAsli[i]);
    
}

console.log(`${tumpukanHuruf}`);

let hasil = "";

while (tumpukanHuruf.length > 0) {
    hasil += tumpukanHuruf.pop();
}

console.log(hasil);