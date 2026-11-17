const namabarang = "laptop";
const hargabarang = 10000000;
const stock = 10;
const tersedia = true;
const daftarbarang = ["laptop", "mouse", "keyboard", "monitor", "printer"];
const barang = {
    kode: "iiv-001",
    nama: "laptop",
    harga: 10000000,
    stock: 10
}

console.log(namabarang);
console.log(hargabarang);
console.log(stock);
console.log(tersedia);
console.log(daftarbarang);
console.log("Nama Barang =",barang.nama);
console.log("Harga Barang =","$$",barang.harga);
console.log(barang.stock);
console.log(daftarbarang[0], tersedia);
console.log(daftarbarang[0], barang);
let angka1 = 10;
let angka2 = 5;
console.log("Angka 1:", angka1);
console.log("Angka 2:", angka2);
console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2);
console.log("Perkalian:", angka1 * angka2);
console.log("Pembagian:", angka1 / angka2   );
console.log("Sisa bagi:", angka1 % angka2); 
console.log("kali dan bagi:", angka1 * angka2 / 5);
console.log("hasil:", (angka1 * angka2) / (angka1 + angka2));
const daftarbarang2 = ["smartphone", "tablet", "earphone", "charger", "powerbank"];
console.log(daftarbarang2[0]);
console.log("Jumlah barang:", daftarbarang2.length);
const x = 15;
const y = 10;
console.log(x===y)
const stok = 5;
const status = "ada";
if (stok === 5 | status === "habis")
    {console.log("periksa keterangan barang")}
for (let i = 3; i <= 12; i ++)
    if (i % 2 === 0){console.log (i + "adalah angka genap")}

const daftarbarang1 = ["laptop","mouse","keyboard","speaker"];
for (let i = 3; i <= console.length; i--)
    {console.log(i)}
function Tentukanstatusstok(stock1) {
    if (stock1 === 0) {
        return "habis";
    } else if (stock1 < 5) {
        return "menipis";
    } else {
        return "aman";
    }
}
console.log(Tentukanstatusstok(0));  
console.log(Tentukanstatusstok(3)); 
console.log(Tentukanstatusstok(15)); 
// 1. Mengambil elemen berdasarkan ID-nya
const judul = document.getElementById("judulUtama");

// 2. Mengubah teks di dalam elemen tersebut
judul.textContent = "Judul Telah Diubah!";

// 3. Mengubah warna teks melalui CSS via JavaScript
judul.style.color = "blue";