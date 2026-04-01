class SmartTV {
    constructor(merkTV) {
        this.merk = merkTV,
        this.menyala = true,
        this.volume = 10
    }


    // method
    tekanTombolPower() {
        // membalikan keadaan: jika false jadi true, jika true jadi false

        this.menyala = !this.menyala;

        if (this.menyala) {
            console.log(`TV ${this.merk} menyala`);
        } else {
            console.log(`TV ${this.merk} mati`);
        }
    }


    // method 2
    tambahVolume() {
        this.volume = this.volume + 1;
        console.log(`TV ${this.merk} volume : ${this.volume}`);
    }
}

let tvKamar = new SmartTV("Samsung");

tvKamar.tekanTombolPower();
tvKamar.tambahVolume();
tvKamar.tekanTombolPower();

console.log(tvKamar);