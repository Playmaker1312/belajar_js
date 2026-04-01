// membuat class
class Mobil {
    // constructor: fungsi yang otomatis jalan saat objek dicetak

    constructor(merkMobil, warnaMobil) {
        // 'this' merujuk pada object yang sedang di buat saat itu
        this.merk = merkMobil;
        this.warna = warnaMobil;
        this.bensin = 100;
    }

    // method tindakan  yang bisa di lakukan dalam mobil
    nyalaMesin() {
        console.log(`mesin mobil ${this.merk} berwarna ${this.warna} menyala`);
    }

    jalan(jarak) {
        this.bensin = this.bensin - jarak ;
        console.log(`mobil ${this.merk} berjalan. sisa bensin : ${this.bensin}`);
    }
}

// instansiasi objek dari class
let mobilA = new Mobil("Toyota", "Merah");
let mobilB = new Mobil("Honda", "Hitam");

// menggunakan object

mobilA.nyalaMesin();
mobilA.jalan(30);

mobilB.nyalaMesin();
mobilB.jalan(50);