//1.

class Anggota {
    constructor(namaAnggota, idAnggota) {
        this.nama = namaAnggota;
        this.id = idAnggota;
        this.bukuDipinjam = [];
    }

    Tampilkan() {
        console.log(`nama anggota : ${this.nama} id anggota : ${idAnggota}`);
    }
}

let anggota1 = new Anggota("Budi", "ID:001");
let anggota2 = new Anggota("Siti", "ID:002");

console.log(`${anggota1} dan ${anggota2}`);

console.log(anggota1);
console.log(anggota2);