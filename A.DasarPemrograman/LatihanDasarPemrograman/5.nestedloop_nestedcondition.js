//1.

let hasAccessCard = true;
let pinCode = 1234;

if (hasAccessCard === true) {
    if (pinCode === 1234) {
        console.log("Akses Diterima");
    }else {
        console.log("Pin Salah!");
    }
}else {
    console.log("Akses Ditolak");
}

//2. 

for (let i = 1; i <= 5; i++) {
    barisBintang = " ";
    for (let j = 1; j <= i; j++) {
        barisBintang += " * ";
    }
    console.log(barisBintang);
}


//3.
for ( let minggu = 1; minggu <=2; minggu++) {
    console.log(`--- Minggu ke ${minggu} ---`);
    for (let hari = 1; hari <= 3; hari++) {
        console.log(`Belajar hari ke ${hari}`);
    }
}
