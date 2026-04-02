// 1.
// input harga dan jumlah sembako
let hargaBeras = 15000;
let jumlahBeras = 5;

let hargaMinyak = 20000;
let jumlahMinyak = 2;

//proses perhitungan total harga
let totalharga = (hargaBeras * jumlahBeras) + (hargaMinyak * jumlahMinyak);

//proses perhitungan pajak
let pajak = totalharga * 0.11;

//proses perhitungan akhir
let hargaAkhir = totalharga + pajak;
console.log(`total harga: ${totalharga}`);

// 2. 
let umurPendaftar = 18;

let syaratMinimumUmur = 17;

let isBolehBuatSIM = umurPendaftar >= syaratMinimumUmur;

console.log(`apakah boleh buat SIM? ${isBolehBuatSIM}`);

// 3. 
let pinInputUser = "1234";
let pinDatabase = 1234;

cekSama = pinInputUser == pinDatabase;
cekIdentik = pinInputUser === pinDatabase;

console.log(`apakah pin sama? ${cekSama}`);
console.log(`apakah pin identik? ${cekIdentik}`);