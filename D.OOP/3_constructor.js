class PemainGame {
    constructor(namaPemain, levelAwal) {
        this.nama = namaPemain;
        this.level = levelAwal;
        this.nyawa = 100;

        console.log(`[SISTEM] :  pemain ${this.nama} telah dibuat`)

    }
}

let player1 = new PemainGame("budi", 1);
console.log(player1.nama);
console.log(player1.level);
console.log(player1.nyawa);