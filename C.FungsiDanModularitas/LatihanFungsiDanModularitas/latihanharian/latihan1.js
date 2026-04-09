//1.



function sapaUser(nama){
    console.log(`Halo ${nama} selamat belajar javascript`);
}

sapaUser('budi');

//2.
const menitDetik = (menit) =>  menit * 60;

const hasil = menitDetik(10);

console.log(`${hasil} menit adalah  detik`);

//3
function hitungHarga(hargaAsli, diskon = 10){
    return hargaAsli * diskon/100;
}

console.log(hitungHarga(100000));

//4.

function jumlahHarga(...angka){
    return angka.reduce((total, n) => total + n, 0);
}

console.log(jumlahHarga(1,2,3));


//5.
function prosesAngka(angka, callback){
    callback(angka);
}

prosesAngka(5, (n) => console.log(n * n));
prosesAngka(10, (n) => console.log(n * 2));


