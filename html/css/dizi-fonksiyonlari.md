# JavaScript Dizi Fonksiyonları - Temel Seviye

> **Not:** JavaScript'te "dictionary" kavramı yoktur. Bunun yerine **Object** (nesne) kullanılır. Ancak bu ders notunda dizi fonksiyonları (array methods) anlatılmaktadır. Object işlemleri için `Object.keys()`, `Object.values()`, `Object.entries()` gibi fonksiyonlar kullanılır.

## İçindekiler
- [Map Fonksiyonu](#map-fonksiyonu)
- [Filter Fonksiyonu](#filter-fonksiyonu)
- [Find Fonksiyonu](#find-fonksiyonu)
- [ForEach Fonksiyonu](#foreach-fonksiyonu)

---

## Map Fonksiyonu

`map()` fonksiyonu, dizideki her elemanı dönüştürerek yeni bir dizi oluşturur.

### Söz Dizimi
```javascript
dizi.map(function(eleman, index, dizi) {
    // dönüştürme işlemi
    return yeniEleman;
});
```

### Temel Örnekler

```javascript
// Sayıları 2 ile çarpma
const sayilar = [1, 2, 3, 4, 5];
const ikiKati = sayilar.map(sayi => sayi * 2);
console.log(ikiKati); // [2, 4, 6, 8, 10]

// Metinleri büyük harfe çevirme
const isimler = ["ahmet", "mehmet", "ayşe"];
const buyukHarfler = isimler.map(isim => isim.toUpperCase());
console.log(buyukHarfler); // ["AHMET", "MEHMET", "AYŞE"]

// Obje dizisinden belirli özellik alma
const ogrenciler = [
    {isim: "Ali", yas: 20},
    {isim: "Veli", yas: 22},
    {isim: "Deli", yas: 19}
];
const isimListesi = ogrenciler.map(ogrenci => ogrenci.isim);
console.log(isimListesi); // ["Ali", "Veli", "Deli"]
```

---

## Filter Fonksiyonu

`filter()` fonksiyonu, belirli koşulu sağlayan elemanları seçerek yeni bir dizi oluşturur.

### Söz Dizimi
```javascript
dizi.filter(function(eleman, index, dizi) {
    // koşul kontrolü
    return true/false;
});
```

### Temel Örnekler

```javascript
// Çift sayıları filtreleme
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);
console.log(ciftSayilar); // [2, 4, 6, 8, 10]

// Belirli yaştan büyük öğrencileri filtreleme
const ogrenciler = [
    {isim: "Ali", yas: 17},
    {isim: "Veli", yas: 20},
    {isim: "Deli", yas: 16},
    {isim: "Seli", yas: 22}
];
const yetiskinler = ogrenciler.filter(ogrenci => ogrenci.yas >= 18);
console.log(yetiskinler); 
// [{isim: "Veli", yas: 20}, {isim: "Seli", yas: 22}]

// Belirli uzunluktan kısa kelimeleri filtreleme
const kelimeler = ["ev", "araba", "at", "bilgisayar", "kalem"];
const kisaKelimeler = kelimeler.filter(kelime => kelime.length <= 3);
console.log(kisaKelimeler); // ["ev", "at"]
```

---

## Find Fonksiyonu

`find()` fonksiyonu, koşulu sağlayan ilk elemanı döndürür.

### Temel Örnekler

```javascript
// Belirli bir sayıyı bulma
const sayilar = [1, 3, 5, 8, 9, 12];
const ilkCiftSayi = sayilar.find(sayi => sayi % 2 === 0);
console.log(ilkCiftSayi); // 8

// Obje dizisinde arama
const ogrenciler = [
    {id: 1, isim: "Ali", not: 85},
    {id: 2, isim: "Veli", not: 92},
    {id: 3, isim: "Deli", not: 78}
];
const ogrenci = ogrenciler.find(ogr => ogr.id === 2);
console.log(ogrenci); // {id: 2, isim: "Veli", not: 92}

// Bulunamayan durumda undefined döner
const yuksekNotlu = ogrenciler.find(ogr => ogr.not > 95);
console.log(yuksekNotlu); // undefined
```

---

## ForEach Fonksiyonu

`forEach()` fonksiyonu, her eleman için bir işlem yapar ama yeni dizi döndürmez.

### Temel Örnekler

```javascript
// Her elemanı yazdırma
const meyveler = ["elma", "armut", "muz"];
meyveler.forEach(meyve => console.log(meyve));
// elma
// armut  
// muz

// Index ile birlikte kullanma
const sayilar = [10, 20, 30];
sayilar.forEach((sayi, index) => {
    console.log(`${index}. eleman: ${sayi}`);
});
// 0. eleman: 10
// 1. eleman: 20
// 2. eleman: 30

// Obje dizisi ile çalışma
const urunler = [
    {isim: "Laptop", fiyat: 5000},
    {isim: "Mouse", fiyat: 50},
    {isim: "Klavye", fiyat: 200}
];
urunler.forEach(urun => {
    console.log(`${urun.isim}: ${urun.fiyat} TL`);
});
```
---

## Fonksiyonları Birlikte Kullanma

```javascript
// Örnek: Öğrencilerden geçenleri bulup isimlerini alma
const ogrenciler = [
    {isim: "Ali", not: 45},
    {isim: "Veli", not: 75},
    {isim: "Deli", not: 85},
    {isim: "Seli", not: 55}
];

const gecenOgrenciIsimleri = ogrenciler
    .filter(ogrenci => ogrenci.not >= 60)  // Geçenleri filtrele
    .map(ogrenci => ogrenci.isim);         // İsimlerini al

console.log(gecenOgrenciIsimleri); // ["Veli", "Deli"]

// Örnek: Sayıları filtrele, karesini al.
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sonuc = sayilar
    .filter(sayi => sayi % 2 === 0)    // Çift sayıları al
    .map(sayi => sayi * sayi)          // Karelerini al
    

console.log(sonuc); // 220 (4 + 16 + 36 + 64 + 100)
```

---

## Pratik Alıştırmalar

```javascript
// Alıştırma 1: Aşağıdaki diziyi kullanarak çözümleyin
const urunler = [
    {isim: "Laptop", fiyat: 5000, kategori: "elektronik"},
    {isim: "Gömlek", fiyat: 100, kategori: "giyim"},
    {isim: "Mouse", fiyat: 50, kategori: "elektronik"},
    {isim: "Pantolon", fiyat: 200, kategori: "giyim"},
    {isim: "Klavye", fiyat: 150, kategori: "elektronik"}
];

// 1. Elektronik ürünleri filtreleyin
// 2. Fiyatı 100 TL'den fazla olan ürünleri bulun
// 3. Tüm ürün isimlerini büyük harfe çevirin
// 4. Toplam ürün fiyatını hesaplayın
// 5. En pahalı ürünü bulun
```

