// membuat data object /dictonary

let profilPengguna = {
    namaLengkap: "John Doe",
    usia: 30,
    isPremium: true,
    hobi: ["membaca", "bersepeda", "memasak"],
};

// read
console.log(profilPengguna.namaLengkap); // Output: "John Doe"

// create
profilPengguna.alamat = "Jl. Merdeka No. 123"; // Menambahkan properti baru "alamat"

// update
profilPengguna.usia = 31; // Mengubah nilai properti "usia" menjadi 31

// delete
delete profilPengguna.isPremium; // Menghapus properti "isPremium"

