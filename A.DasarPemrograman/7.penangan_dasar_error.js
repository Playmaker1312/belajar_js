// blok try

try {
    console.log(`konversi data`);

    // ini akan memicu error
    let data = JSON.parse("ini bukan format json yang benar")

    // baris di bawah ini tiakan pernah di eksekusi karena program akan loncat ke catch
    console.log(` data berhasil dikonversi`);
}
// blok catch jaring pengaman untuk menangkan error pada blok try
catch (error) {
    console.log(`terjadi error saat konversi data`);
    console.log(`error : ${error.message}`);
}

// blok finally akan selalu dieksekusi baik terjadi error atau tidak
finally {
    console.log(`blok finally selalu dieksekusi`);
}

