// abstraction (class setengah jadi)

class bentukGeometri {
    constructor(){
        // mencegah class ini dicetak langsung dengan kata kunci 'new'
        if (this.constructor === bentukGeometri) {
            throw new Error("Class ini adalah abstrak tidak bisa di cetak langsung");
        }
    }

      // Metode abstrak (metode kosong yang wajib diisi oleh child class)
        hitungLuas() {
            throw new Error("Method ini harus di buat oleh subclass nya");
        }
}

// subclass
class Persegi extends bentukGeometri {
    constructor(sisi){
        super();
        this.sisi = sisi;
    }

    // mematuhi kontrak : wajib membuat method yang ada diparent class
    hitungLuas() {
        return this.sisi * this.sisi;
    }
}


let kotakKu = new Persegi(5);
console.log("Luas Persegi: " + kotakKu.hitungLuas());
