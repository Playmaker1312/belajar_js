let hero = {
    nama : "Aragon",
    level : 10,
    senjata : "Pedang Api",
    isAlive : true,
}

console.log(hero.nama); // Output: "Aragon"

console.log(`hero ${hero.nama} menggunakan senjata ${hero.senjata}`);

//2.
let karyawan = {
    nama : "sari",
    umur : 24,
    jabatan : "junior developer",
    gaji : 15000000,
}

karyawan.umur = 25;
karyawan.jabatan = "seniur developer";
console.log(karyawan)

//3.
let tokoOnline = {
    namaToko : "TechGadget",
    daftarProduk : ["Mouse", "Keyboard", "Webcam"],
}

console.log(`produk kedeua ${tokoOnline.daftarProduk[1]}`);

tokoOnline.daftarProduk.push("Mouse Pad");

console.log(tokoOnline)