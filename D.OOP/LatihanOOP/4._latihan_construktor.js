//1.

class Hero {
    constructor(namaHero, peranHero){
        this.nama = namaHero;
        this.peran = peranHero;
        this.level = 1;
        this.hp = 100;

        console.log(`hero ${this.nama} dengan kelas ${this.peran} telah memasuki arena`)
    }
}

let hero1 = new Hero("aragon", "warrior");

console.log(hero1);


//2.
class PendaftaranSiswa {
    constructor(nama, umur){
        if (umur < 7){
            console.log(`Maaf ${nama}, umur anda belum cukup untuk masuk sd`);
        }else {
            this.nama = nama;
            this.umur = umur;
            console.log(`pendaftaran ${nama} berhasil`);
        }
    }
}

let anakSatu = new PendaftaranSiswa("budi", 3);
