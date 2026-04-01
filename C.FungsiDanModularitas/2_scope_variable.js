// global scope
let namaPahlawan = "Batman";

function jalakanMisi() {
    // local scope
    let senjata = "batarang";

    // fungsi  melihat keluar (mengakses varabel global)
    console.log(namaPahlawan + " menggunakan senjata: " + senjata); // Output: "Batman menggunakan senjata: batarang"
}

jalakanMisi();

// mencoba mengakses variabel lokal di luar fungsi
// console.log(senjata); // Error: senjata is not defined

