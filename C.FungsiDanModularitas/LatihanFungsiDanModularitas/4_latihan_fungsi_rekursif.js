//1.
function hitungMundur(n) {
    if (n === 0) {
        return "selesai";
    }

    console.log(n);
    return hitungMundur(n-1); 
}

console.log(hitungMundur(5));

//2.
function totalAngka(angka){
    if (angka === 1){
        return 1;
    }

    console.log(angka)
    return angka + totalAngka(angka - 1);
}

console.log(totalAngka(10));

//3.
const kategori = {
    nama: "elektronik",
    sub: {
        nama: "Gaming",
        sub: null
    }
};

function tampilkanKategori(kategori){
    if (kategori === null){
        return
    }

    console.log(kategori.nama);
    return tampilkanKategori(kategori.sub);
}

tampilkanKategori(kategori);