//1.
let hargaProduk = [15000, 20000, 35000, 50000];

let formatRupiah = hargaProduk.map((Rupiah) => "Rp" + Rupiah);

console.log(formatRupiah);

//2.
let stokGudang = [
    {nama: "kertas A4", jumlah: 50},
    {nama: "tinta printer", jumlah: 8},
    {nama: "pulpen hitech", jumlah: 25},
    {nama: "penghapus", jumlah: 3},
];

let stokKritis = stokGudang.filter((item) => item.jumlah < 10);

console.log(stokKritis);

//3.
let keranjang = [
    {produk: "sabun", harga: 5000, qty: 3},
    {produk: "Susu", harga: 15000, qty: 2},
    {produk: "sabun", harga: 5000, qty: 3},
];

let totalSementara;

let totalBayar = keranjang.reduce((total, item) => {
    return total + (item.harga * item.qty);
}, 0 );

console.log(totalBayar);
