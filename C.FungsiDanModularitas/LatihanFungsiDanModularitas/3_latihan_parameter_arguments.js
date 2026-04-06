//1. 

function kirimPesan(teks = "Halo", pengirim = "Anonim") {
    
    console.log(`${pengirim} mengirim pesan ${teks}`);
    
    return
}

kirimPesan("apakabar", "budi");
kirimPesan("apakabar");
kirimPesan();

//2. 
function spesifikasiMobil({merk, warna, transmisi = "Manual"}) {
    console.log(`Mobil ${merk} berwarna ${warna} dengan transmisi ${transmisi}`)

    return
}

spesifikasiMobil({warna: "Merah", merk: "Toyota"});

//3.
function hitungPajak(harga, persenPajak = 11) {
    let hitungNilaiPajak = (harga * persenPajak) /100

    console.log(hitungNilaiPajak);

    return
}

hitungPajak(500000);
hitungPajak(1000000, 10);

