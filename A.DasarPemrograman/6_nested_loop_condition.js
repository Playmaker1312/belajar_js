let username = "admin";
let password = "123456";

//loop luar : cek username dulu
if (username === "admin") {
    // loop dalam : cek password
    if (password === "123456"){
        console.log(`login berhasil`);
    }else {
        console.log(`password salah`);
    }
}else {
    console.log(`username salah`);
}