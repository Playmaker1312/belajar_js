//Parent Class

class Notifikasi {
    kirim(pesan){
        console.log(`mengirim notifikasi sistem : ${pesan}`);
    }
}

//Subclass 1 
class EmailNotifikasi extends Notifikasi {
    kirim(pesan){
        console.log(`[EMAIL] : Mengirim pesan ${pesan} ke kotak masuk user`);
    }
}


//Subclass 2
class SMSNotifikasi extends Notifikasi {
    kirim(pesan){
        console.log(`[SMS] : Mengirimi teks ${pesan} memotong pulsa user`);
    }
}

// --- SIHIR POLIMORFISME BEKERJA ---

// kumpulkan berbagai object dalam satu wadah

let daftarAlatNotif = [
    new EmailNotifikasi(),
    new SMSNotifikasi(),
    new Notifikasi()
];


daftarAlatNotif.forEach((alat) => {
    alat.kirim("promo diskon 50% hari ini");
});