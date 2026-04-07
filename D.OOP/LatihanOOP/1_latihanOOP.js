//1.
class buku {
    constructor(judulBuku, penulisBuku, tahunTerbit) {
        this.judul = judulBuku;
        this.penulis = penulisBuku;
        this.tahun = tahunTerbit;
    }

    tampilkanInfo() {
        console.log(`Buku ${this.judul} karya ${this.penulis} terbit tahunn ${this.tahun}`);
    }
}


let buku1 = new buku("bumi", "tereliye", 2010);

console.log(buku1);

//2.
class KarakterGame {
    constructor(namaPlayer) {
        this.nama = namaPlayer;
        this.darah = 100;
    }

    serang() {
        this.darah = this.darah - 10;
    }

    cekStatus() {
        console.log(`sisa darah ${this.darah}`);
    }
}

let Player1 = new KarakterGame("agamoto");

Player1.serang();

Player1.cekStatus();

