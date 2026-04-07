//1.

class Ksatria {
    constructor(namaKsatria){
        this.nama = namaKsatria;
        this.darah = 100;
    }

    kenaSerang(demage){
        this.darah = this.darah - demage;

        if (this.darah <= 0) {
            console.log(`anda telah gugur`);
        }
    }

    minumRamuan(tambah){
        this.darah = this.darah + tambah;
        if (this.darah > 100){
            this.darah = 100;
        }
    }

    statusDarah(){
        console.log("sisa darah" +  " "+  this.darah);
    }

}

let obj1 = new Ksatria("arthur");

obj1.kenaSerang(30);

obj1.statusDarah();

obj1.minumRamuan(40);

obj1.statusDarah();


//2.
class LampuPintar {
    constructor(lokasiLampu = "Teras", isNyalaLampu = false){
        this.lokasi = lokasiLampu;
        this.isNyala = isNyalaLampu;
    }

    saklar(){
        if ( this.isNyala === false ){
            this.isNyala = true
            console.log("lampu hidup")
        }else {
            this.isNyala = false
            console.log("lampu mati")
        }
    }

    cekStatusNyala(){
        console.log(this.isNyala);
    }
}


let obj = new LampuPintar("kamar",true);

obj.saklar();

//3.
class EWallet {
    constructor(namaPemilik, sisaSaldo = 0 ){
        this.nama = namaPemilik;
        this.saldo = sisaSaldo;
    }

    topUp(jumlah){
        this.saldo = this.saldo + jumlah;
        console.log(this.saldo);
    }

    bayar(jumlah){
        if (this.saldo >= jumlah) {
            this.saldo = this.saldo - jumlah;
            console.log(`pembayaran berhasil sisa saldo ${this.saldo}`);
        }else {
            console.log(`saldo tidak cukup untuk bayar ${jumlah}`);
        }
    }
}

let dompetSaya = new EWallet("john");

dompetSaya.topUp(100000);

dompetSaya.bayar(20000)