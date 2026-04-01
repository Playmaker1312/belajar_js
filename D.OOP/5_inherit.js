class karyawan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }

    bekerja() {
        console.log(`${this.nama} sedang bekerja`);
    }

    absen() {
        console.log(`${this.nama} sedang absen`);
    }
}


class manager extends Karyawan {
    constructor(nama, gaji, departemen) {
        super(nama, gaji);
        this.departemen = departemen;
        this.tnjuangan = 500000;
    }

    bekerja() {
        console.log(`${this.nama} sedang bekerja sebagai manager di departemen ${this.departemen}`);
    }

    memecat() {
        console.log(`${this.nama} sedang memecat karyawan`);
    }
}

let stafBiasa = new Karyawan("budi", 3000000);
let bosBesar = new manager("andi", 10000000, "IT");
stafBiasa.bekerja();
bosBesar.bekerja();
bosBesar.memecat();