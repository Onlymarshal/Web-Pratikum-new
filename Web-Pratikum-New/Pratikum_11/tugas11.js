// Keliling Lingkaran

var r = 21
var phi = 22/7

var keliling = 2*phi*r
console.log("Keliling =",keliling)
document.write("Keliling =",keliling,"<br>")

// Kurs Dolar Ke Rupiah 
var DolarKeRupiah = 14650
var SatuDolar = DolarKeRupiah
var DuaDolar = DolarKeRupiah*2

console.log("Konvert 1 Dolar ke rupiah =",SatuDolar)
console.log("Konvert 2 Dolar ke rupiah =",DuaDolar)
document.writeln("Konvert 1 Dolar ke rupiah =",SatuDolar,"<br>")
document.writeln("Konvert 2 Dolar ke rupiah =",DuaDolar,"<br>")

// Menghitung Biaya Parkir 
var biaya_parkir = 3000
var biaya_tambahan = 1000
var jam_masuk = 8
var jam_keluar = 11

var Selisih_jam = jam_keluar - jam_masuk

var dua_jam = 2

if (Selisih_jam <= dua_jam ){
    console.log("Jam Masuk =",jam_masuk)
    console.log("Jam Keluar =",jam_keluar)
    console.log("Biaya Parkir =",biaya_parkir)
    document.writeln("Jam Masuk =",jam_masuk,"<br>")
    document.writeln("Jam Keluar =",jam_keluar,"<br>")
    document.writeln("Biaya Parkir =",biaya_parkir,"<br>")
} else {
    console.log("Jam Masuk =",jam_masuk)
    console.log("Jam Keluar =",jam_keluar)
    console.log("Biaya Parkir =",biaya_parkir + biaya_tambahan)
    document.writeln("Jam Masuk =",jam_masuk,"<br>")
    document.writeln("Jam Keluar =",jam_keluar,"<br>")
    document.writeln("Biaya Parkir =",biaya_parkir + biaya_tambahan,"<br>")
}








