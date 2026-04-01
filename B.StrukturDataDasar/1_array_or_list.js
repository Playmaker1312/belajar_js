
// create
let keranjangBuah = ["apel", "mangga", "jeruk"];

//add
keranjangBuah.push("pisang"); // Menambahkan "pisang" ke dalam array
console.log(keranjangBuah); // Output: ["apel", "mangga", "jeruk", "pisang"]

//read
console.log(keranjangBuah[0]); // Output: "apel"
console.log(keranjangBuah.length); // Output: 4

//update
keranjangBuah[1] = "semangka"; // Mengubah elemen pada indeks 1 menjadi "semangka"
console.log(keranjangBuah); // Output: ["apel", "semangka", "jeruk", "pisang"]

//delete
keranjangBuah.pop(); // Menghapus elemen terakhir dari array
console.log(keranjangBuah); // Output: ["apel", "semangka", "jeruk"]
