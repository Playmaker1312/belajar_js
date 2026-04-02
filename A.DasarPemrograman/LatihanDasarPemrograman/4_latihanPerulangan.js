//1. 

for (let i = 10; i >= 1; i--) {
    console.log(`detik ke ${i}`);
}

console.log('ROKET MELUNCUR');

//2.

let literBensin = 0;
let kapasitasMaksimal = 5;

while (literBensin < kapasitasMaksimal) {
    literBensin++;
    console.log(`liter bensin saat ini : ${literBensin}`);
}

console.log(`tangki bensin sudah penuh`);

//3.

for (let j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log(`${j} adalah bilangan genap`);
    }else {
        console.log(`${j}`);
    }
}