//enkapulasi
class ItemMenu {
    #stok
    constructor(namaMenu, harga, stokAwal) {
        this.nama = namaMenu;
        this.harga = harga;
        this.#stok = stokAwal;
    }

    //getter
    cekStok(){
        return this.#stok;
    }

    //setter
    kurangiStok(){
        if(this.#stok > 0){
            this.#stok = this.#stok - 1;
            return true;
        }else {
            return false;
        }
    }

    siapkanPesanan() {
        throw new Error("Metode ini wajib dibuat di subclass");
    }
}

// inherit dan polumorphism
class kopi extends ItemMenu {
    constructor(namaMenu, harga, stokAwal, jenisBiji){
        super(namaMenu, harga, stokAwal);
        this.jenisBiji = jenisBiji
    }

    siapkanPesanan(){
        console.log(`menyeduh kopi ${this.jenisBiji}`);
    }
}

// inherit dan polumorphism
class cemilan extends ItemMenu {
    constructor(namaMenu, harga, stokAwal, perluDipanaskan){
        super(namaMenu, harga, stokAwal);
        this.perluDipanaskan = perluDipanaskan
    }

    siapkanPesanan(){
        if(this.perluDipanaskan) {
            console.log(`memanaskan ${this.nama} dimicrowave` );
        } else {
            console.log(`mengambil ${this.nama} dari etalase`);
        }
    }

}

// membuat objek
let menuEspresso = new kopi("espresso", 25000, 20, "arabica");
let menuCroissant = new kopi("croissant", 30000, 2, true);
let menuDonat = new kopi("donat", 55000, 1, "false");

//fungsi untuk menerima pesanan
function prosesPesanan(item) {
    console.log(`ada pesanan : ${item.nama}`);

    if(item.kurangiStok()){
        item.siapkanPesanan();
        console.log(`pesanan selesai total harga Rp${item.harga}. sisa stok ${item.cekStok()}`);
    }else {
        console.log(`maaf, pesanan dibatalkan stok item:${item.nama} sudah habis\n`)
    }
}

prosesPesanan(menuEspresso);
prosesPesanan(menuCroissant);





