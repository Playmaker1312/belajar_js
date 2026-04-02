
//1. 
try {
    console.log(namaPengguna);
} catch (error) {
    console.log(`Terjadi error: ${error.message}`);
}

//2.
let angkaAtas = 100;
let pembagi = 5;

try {
    if (pembagi === 0) {
        throw new Error(`pembagi tidak boleh nol`);
    }else {
        let hasil = angkaAtas / pembagi;
        console.log(`Hasil pembagian: ${hasil}`);
    }
} catch (error) {
    console.log(`Terjadi error: ${error.message}`);
}

//3.
let isInternetConnected = true;

try {
    console.log(`sedang mencoba mengunduh data`)

    if (!isInternetConnected){
        throw new Error(`Koneksi terputus`)
    }else {
        console.log(`Data berhasil diunduh`)
    }


} 

catch (error) {
    console.log(`gagal mengunduh: ${error.message}`);
} 

finally {
    console.log(`Menutup koneksi ke server. proses Selesai`)
}

