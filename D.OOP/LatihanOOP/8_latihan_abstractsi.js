
//1.
class MakhlukHidup {
    constructor(){
        if (this.constructor === MakhlukHidup){
            throw new Error("Tidak bisa cetak MakhlukHidup langsung");
        }
    }

        makan(){
            throw new Error("Method harus di buat di subclass");
        }
}

class singa extends MakhlukHidup {
    makan(){
        console.log(`singa lagi makan`);
    }
}


let obj = new singa()

obj.makan();

//2.
class StandarPembayaran {
    prosesBayar(nomimal){
        throw new Error('isi nominal ini');
    }
}

class pembayaranQRIS extends StandarPembayaran {
    prosesBayar(nominal){
        console.log(`Memindai kode QR Rp${nominal}`);
    }
}

class pembayaranTunai extends StandarPembayaran {
    prosesBayar(nominal){
        console.log(`Merima uang kertas sebesar Rp${nominal}`);
    }
}

function jalankanTransaksi(alat, total) {
    alat.prosesBayar(total);
}

jalankanTransaksi( new pembayaranQRIS(), 5000);
jalankanTransaksi( new pembayaranTunai(), 5000);
