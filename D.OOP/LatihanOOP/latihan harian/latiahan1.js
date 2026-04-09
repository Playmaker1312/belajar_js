//1.
class Laptop {
    constructor(merk, harga, ram){
        this.merk = merk;
        this.harga = harga;
        this.ram = ram;
    }

    cekStatus(){
        console.log(`nama laptop : ${this.merk} harga : ${this.harga} ram : ${this.ram}GB `);
    }
}

let obj = new Laptop("asus", 9000000, 8);

obj.cekStatus();

//2.
class kalkulatorSederhana {
    tambah(a, b){
        return a + b; //tidak bisa keluar karna cuman nampilin nilai balik bukan nampilin layar
    }

    kali(a, b){
        console.log(a * b);
    }
}

let obj1 = new kalkulatorSederhana();


console.log(obj1.tambah(12, 13))
obj1.kali(2, 2);

//3.

class Hero {
    constructor(nama, level){
        this.nama = nama;
        this. level = level;
    }

    tambahLevel(){
        return this.level = this.level + 1;
    }
}

let obj2 = new Hero("tes", 1);

console.log(obj2.tambahLevel());

//4.
class PlaylistLagu {
    constructor(daftarLagu = []){
        this.daftarLagu = [];
    }

    tambah(judul){
        return this.daftarLagu.push(judul);
    }
}

let obj4 = new PlaylistLagu();

obj4.tambah("aduh");
obj4.tambah("aduhai");
console.log(obj4);

//5.
class Rekening {
    #saldo

    constructor(nama, saldo){
        this.nama = nama;
        this.#saldo = saldo
    }

    cekSaldo(){
        console.log(`saldo anda adalah ${this.#saldo}`)
    }
}

let obj5 = new Rekening("budi", 500000);

obj5.cekSaldo();

//6.
class Hewan {
    constructor(nama){
        this.nama = nama;
    }

    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}

class Kucing extends Hewan {
    
}

let obj6 = new Kucing('kucing')

obj6.makan();

//7.
class Karyawan {
    constructor(nama){
        this.nama = nama;
    }
}

class Maneger extends Karyawan {
    constructor(nama, departemen){
        super(nama);
        this.departemen = departemen;
    }

    lapor(){
        console.log(`manager dengan nama : ${this.nama}, dari departemen: ${this.departemen}`);
    }
}

let obj7 = new Maneger("susanto", "gatau");

obj7.lapor();

//8.
class Termometer {
    #celcius
    constructor(celcius) {
        this.#celcius = celcius
    }

    cekSuhu() {
        console.log(`suhu saat ini adalah ${this.#celcius}`)
    }

    fahrenheit(){
        return this.#celcius * 9/5 + 32;
    }
}

let obj9 = new Termometer(30);

obj9.cekSuhu();
console.log(obj9.fahrenheit());

//9.
class Lingkaran {
    static hitungLuasJari(JariJari){
        if (JariJari % 7 === 0){
            return 22/7 * JariJari * JariJari;
        }else {
            return 3.14 * JariJari * JariJari;
        }
    }
}



console.log(Lingkaran.hitungLuasJari(10));

//10.
class EmailNotifikasi extends Notifikasi {
    kirim(pesan){
        console.log(`[EMAIL] : Mengirim pesan ${pesan} ke kotak masuk user`);
    }
}


//Subclass 2
class SMSNotifikasi extends Notifikasi {
    kirim(pesan){
        console.log(`[SMS] : Mengirimi teks ${pesan} memotong pulsa user`);
    }
}

// --- SIHIR POLIMORFISME BEKERJA ---

// kumpulkan berbagai object dalam satu wadah

let daftarAlatNotif = [
    new EmailNotifikasi(),
    new SMSNotifikasi(),
    new Notifikasi()
];


daftarAlatNotif.forEach((alat) => {
    alat.kirim("promo diskon 50% hari ini");
});





