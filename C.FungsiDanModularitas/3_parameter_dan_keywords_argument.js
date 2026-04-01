// parameter default

//jika nama tidak di isi maka isinya tamu
//jika bahasa tidak di isi maka isinya ID
function sapaPengguna (nama = "Tamu", bahasa = "ID") {
    if (bahasa === "ID") {
        console.log("Halo, " + nama + "!");
    }else {
        console.log("Hello " + nama + "!");
    }
}

sapaPengguna(); // Output: "Halo, Tamu!"
sapaPengguna("Alice"); // Output: "Halo, Alice!"
sapaPengguna("Bob", "EN"); // Output: "Hello Bob!"

// keyword argument

// menggunakan tanda kurung kurawal {} untuk menerima object
function buatProfil({ nama, usia, kota = "jakarta"}) {
    console.log(`${nama} berurmur ${usia} tahun, tinggal di ${kota}`);
}

// panggil fungsi dengan menggunakan object sebagai argumen
buatProfil({
    nama: "John Doe",
    usia: 30,
})

