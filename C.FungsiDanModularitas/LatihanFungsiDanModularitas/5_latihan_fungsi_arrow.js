//1.

const hitungKuadrat = (n) => n * n;

console.log(hitungKuadrat(4));

//2.
let daftarBarang = ["laptop", "mouse", "keyboard"];

daftarBarang.forEach((barang) => console.log(`barang adalah : RP ${barang}`));

//3.
let nilaiUjian = [60, 85, 90, 50, 75, 100];


let lulus = nilaiUjian.filter(skor => skor > 70);

console.log(lulus);