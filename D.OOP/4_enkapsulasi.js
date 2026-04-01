class DompetDigital {
    #saldo; // private property

    constructor(namaPemilik, saldoAwal) {
        this.pemilik = namaPemilik;
        this.#saldo = saldoAwal;
    }

    // getter
    cekSaldo() {
        return `saldo ${this.pemilik} adalah ${this.#saldo}`;
    }

    // setter 
    topUp(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah top up harus lebih besar dari 0");
        } else {
            this.#saldo += this.#saldo + jumlah;
            console.log(`Top up berhasil! saldo ${this.pemilik} sekarang adalah ${this.#saldo}`);
        }
    }
}

let dompetBudi = new DompetDigital("budi", 100000);
console.log(dompetBudi.cekSaldo());
dompetBudi.topUp(50000);
console.log(dompetBudi.cekSaldo());