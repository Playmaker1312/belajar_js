//deklarasi fungsi rekursif
function hitungFaktorial(angka) {
    // jika angka sudah mencapai 1 atau 0
    if (angka === 0 || angka === 1) {
        return 1;
    }
        
    // recursive case ( memanggil dirinya sendiri )
    return angka * hitungFaktorial(angka - 1);
}

console.log("hasil dari faktorial 5 adalah : " + hitungFaktorial(5)); // hasil dari faktorial 5 adalah : 120

