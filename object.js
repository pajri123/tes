// Object Literal

let mahasiswa1 = {
  nama: "pajri",
  energi: 10,

  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama},selamat makan`);
  },
};
let mahasiswa2 = {
  nama: "pajri",
  energi: 10,

  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama},selamat makan`);
  },
};

// Tutup Object Literal

// Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama},Selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama},Selamat Main`);
//   };

//   return mahasiswa;
// }

// let pajri = Mahasiswa("pajri", 10);
// let ando = Mahasiswa("ando", 20);

// Tutup Function Declaration

// // Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama},selamat main`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama},selamat main`);
//   };
// }

// let pajri = new Mahasiswa("pajri", 10);
