//1. 
function sapaPengguna(nama){
    return `Halo ${nama} selamat datang di aplikasi`;
}

console.log(sapaPengguna("fakri"));

//2. 

function cekStatusLulus(nilai) {
    if (nilai >= 75 ){
        return "lulus"
    }else {
        return "tidak lulus"
    }
}

console.log(cekStatusLulus(70));

//3. 

function hitungTotalKeranjang(daftarHarga = []){
    total = 0;
    for (let i = 0; i < daftarHarga.length; i++){
        total = total + daftarHarga[i];
    } 

    return total
}

let belanjaanSaya = [15000, 20000, 50000, 5000];


console.log(hitungTotalKeranjang(belanjaanSaya));