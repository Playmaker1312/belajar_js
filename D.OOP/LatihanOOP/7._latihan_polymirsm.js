//1.

class Hewan {
    bersuara(suara){
        console.log(`hewan bersuara ${suara}`);
    }
}

class Kucing extends Hewan {
    bersuara(suara){
        console.log(`[Kucing] : Meooong`);
    }
}

class Anjing extends Hewan {
    bersuara(suara){
        console.log(`[Anjing] : Guk Guk`);
    }
}


let SuaraHewan = [
    new Anjing(),
    new Kucing(),
    new Hewan()
]

SuaraHewan.forEach((alat) => {
    alat.bersuara("macam macam suara hewan")
})

//2.
class Pembayaran {
    proses(){
        console.log(`melakukan proses validasi`);
    }
}

class KartuKredit extends Pembayaran {
    proses(){
        console.log('Memverifikasi limit kartu dan proses transaksi')
    }
}

class Ewallet extends Pembayaran {
    proses(){
        console.log(`Memeriksa saldo e wallet dan memotong saldo..`)
    }
}

let metode = [
    new KartuKredit(),
    new Ewallet(),
    new Pembayaran()
]

function bayarSekarang(metode){
    metode.proses();
}


bayarSekarang(new KartuKredit());
bayarSekarang(new KartuKredit());
bayarSekarang(new Ewallet());