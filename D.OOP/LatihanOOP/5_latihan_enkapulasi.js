//1.

class UserAccount {
    #password

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    checkLogin(inputUser,inputPass){
        if (inputUser === this.username && inputPass === this.#password){
            console.log(`login berhasil`);
        }else {
            console.log(`login di tolak`)
        }
    }

}

let obj1 = new UserAccount("test", "test123");

obj1.checkLogin("test", "test123");


//2.
class MobilAman {
    #kecepatan = 0;

    constructor(namaMobil, kecepatan){
        this.nama = namaMobil;
        this.#kecepatan = kecepatan;
    }

    setKecepatan(nilaiBaru){
        if (nilaiBaru < 0 || nilaiBaru >= 200){
            console.log(`kecepatan tidak masuk akal`)
        }else {
            this.#kecepatan = nilaiBaru;
        }
    }

    getKecepatan(){
        console.log(`${this.#kecepatan}`);
    }
}

let avanza = new MobilAman("avanza");

avanza.setKecepatan(80);

avanza.getKecepatan();
