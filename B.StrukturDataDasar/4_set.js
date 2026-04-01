let daftarNamaGanda = ["John Doe", "Jane Smith", "John Doe", "Alice Johnson", "Jane Smith"];

// Menggunakan Set untuk menghapus duplikat
let daftarTamuVIP = new Set(daftarNamaGanda);

// jika dicetak maka akan otomatis membuang duplikat
console.log(daftarTamuVIP);

// crud pada set
daftarTamuVIP.add("Bob Brown"); // Menambahkan nama baru ke dalam Set
console.log(daftarTamuVIP); // Output: Set(4) {"John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"}

// mengecek keberadaan data
let apakahAdaJohnDoe = daftarTamuVIP.has("John Doe");
console.log(apakahAdaJohnDoe); // Output: true

// menghapus data
daftarTamuVIP.delete("Jane Smith"); // Menghapus "Jane Smith" dari Set
console.log(daftarTamuVIP); // Output: Set(3) {"John Doe", "Alice Johnson", "Bob Brown"}

let arrayBersish = [...daftarTamuVIP]; // Mengubah Set kembali menjadi Array
console.log(arrayBersish); // Output: ["John Doe", "Alice Johnson", "Bob Brown"]