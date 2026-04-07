//1.
class Hero {
    constructor(nama) {
        this.nama = nama;
    }

    perkenalan(){
        console.log(`Halo saya adalah ${this.nama}`);
    }
}

class Mage extends Hero {
    

    constructor(nama, sihir) {
        super(nama);
        this.nama = nama;
        this.sihir = sihir
    }

    castSpell(){
        console.log(`${this.nama} mengeluarkan sihir ${this.sihir}`);
    }
}

let penyihir = new Mage("merlin", "api");

penyihir.castSpell();

//2.
class Kendaraan {
    constructor(nama){
        this.nama = nama;
    }

    bergerak(){
        console.log(`${nama} berpindah tempat`);
    }
}


class Pesawat extends Kendaraan{
    constructor(nama, jarak){
        super(nama)
        this.nama = nama;
        this.jarak = jarak;
    }

    bergerak(){
        console.log(`pesawat ${this.nama} ini bergerak sejauh ${this.jarak}km`);
    }
}


let obj = new Pesawat("garuda", 10000);

obj.bergerak();