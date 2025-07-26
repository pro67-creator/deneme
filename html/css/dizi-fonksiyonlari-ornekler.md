# JavaScript Dizi Fonksiyonları - 20 Basit Örnek

Bu dosyada JavaScript dizi fonksiyonlarının temel kullanımını gösteren 20 basit örnek bulunmaktadır.

---

## 1. Map - Sayıları İki Katına Çıkarma

```javascript
const sayilar = [1, 2, 3, 4, 5];
const ikiKati = sayilar.map(sayi => sayi * 2);
console.log(ikiKati); // [2, 4, 6, 8, 10]
```

---

## 2. Filter - Çift Sayıları Bulma

```javascript
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);
console.log(ciftSayilar); // [2, 4, 6, 8, 10]
```

---

## 3. Reduce - Sayıları Toplama

```javascript
const sayilar = [1, 2, 3, 4, 5];
const toplam = sayilar.reduce((acc, sayi) => acc + sayi, 0);
console.log(toplam); // 15
```

---

## 4. Find - İlk Büyük Sayıyı Bulma

```javascript
const sayilar = [3, 7, 2, 9, 1, 5];
const buyukSayi = sayilar.find(sayi => sayi > 5);
console.log(buyukSayi); // 7
```

---

## 5. Map - İsimleri Büyük Harfe Çevirme

```javascript
const isimler = ["ali", "veli", "ayşe"];
const buyukHarfler = isimler.map(isim => isim.toUpperCase());
console.log(buyukHarfler); // ["ALI", "VELİ", "AYŞE"]
```

---

## 6. Filter - Uzun Kelimeleri Filtreleme

```javascript
const kelimeler = ["ev", "araba", "at", "bilgisayar"];
const uzunKelimeler = kelimeler.filter(kelime => kelime.length > 3);
console.log(uzunKelimeler); // ["araba", "bilgisayar"]
```

---

## 7. ForEach - Her Elemanı Yazdırma

```javascript
const meyveler = ["elma", "armut", "muz"];
meyveler.forEach(meyve => console.log(meyve));
// elma
// armut
// muz
```

---

## 8. Some - Çift Sayı Var mı Kontrolü

```javascript
const sayilar = [1, 3, 5, 8, 9];
const ciftVarMi = sayilar.some(sayi => sayi % 2 === 0);
console.log(ciftVarMi); // true
```

---

## 9. Every - Hepsi Pozitif mi Kontrolü

```javascript
const sayilar = [2, 4, 6, 8];
const hepsiPozitif = sayilar.every(sayi => sayi > 0);
console.log(hepsiPozitif); // true
```

---

## 10. Map - Yaşları Hesaplama

```javascript
const dogumYillari = [1990, 1985, 2000, 1995];
const yaslar = dogumYillari.map(yil => 2024 - yil);
console.log(yaslar); // [34, 39, 24, 29]
```

---

## 11. Filter - Geçen Notları Bulma

```javascript
const notlar = [45, 75, 60, 30, 85];
const gecenNotlar = notlar.filter(not => not >= 60);
console.log(gecenNotlar); // [75, 60, 85]
```

---

## 12. Reduce - En Büyük Sayıyı Bulma

```javascript
const sayilar = [3, 7, 2, 9, 1, 5];
const enBuyuk = sayilar.reduce((max, sayi) => sayi > max ? sayi : max);
console.log(enBuyuk); // 9
```

---

## 13. Map - Fiyatlara KDV Ekleme

```javascript
const fiyatlar = [100, 200, 50];
const kdvliFiyatlar = fiyatlar.map(fiyat => fiyat * 1.18);
console.log(kdvliFiyatlar); // [118, 236, 59]
```

---

## 14. Filter - Kısa İsimleri Bulma

```javascript
const isimler = ["Ali", "Mehmet", "Su", "Ahmet"];
const kisaIsimler = isimler.filter(isim => isim.length <= 3);
console.log(kisaIsimler); // ["Ali", "Su"]
```

---

## 15. Find - Belirli Harfle Başlayan İsim

```javascript
const isimler = ["Ali", "Veli", "Ayşe", "Mehmet"];
const aIleBaslayan = isimler.find(isim => isim.startsWith("A"));
console.log(aIleBaslayan); // "Ali"
```

---

## 16. Map - Kelimelerin Uzunluğunu Bulma

```javascript
const kelimeler = ["merhaba", "dünya", "javascript"];
const uzunluklar = kelimeler.map(kelime => kelime.length);
console.log(uzunluklar); // [7, 5, 10]
```

---

## 17. Filter - Tek Sayıları Bulma

```javascript
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tekSayilar = sayilar.filter(sayi => sayi % 2 === 1);
console.log(tekSayilar); // [1, 3, 5, 7, 9]
```

---

## 18. Reduce - Kelimeleri Birleştirme

```javascript
const kelimeler = ["Merhaba", "dünya"];
const cumle = kelimeler.reduce((acc, kelime) => acc + " " + kelime);
console.log(cumle); // "Merhaba dünya"
```

---

## 19. Some - Negatif Sayı Var mı?

```javascript
const sayilar = [5, 10, -3, 8];
const negatifVarMi = sayilar.some(sayi => sayi < 0);
console.log(negatifVarMi); // true
```

---

## 20. Every - Hepsi 10'dan Küçük mü?

```javascript
const sayilar = [3, 7, 2, 9, 1, 5];
const hepsiKucuk = sayilar.every(sayi => sayi < 10);
console.log(hepsiKucuk); // true
```

---

## Bonus: Fonksiyonları Birlikte Kullanma

```javascript
// Çift sayıları bulup karelerini alma
const sayilar = [1, 2, 3, 4, 5, 6];
const sonuc = sayilar
    .filter(sayi => sayi % 2 === 0)  // [2, 4, 6]
    .map(sayi => sayi * sayi);       // [4, 16, 36]

console.log(sonuc); // [4, 16, 36]
```

---

## Pratik İpuçları

1. **Map** - Dönüştürme işlemleri için kullan
2. **Filter** - Koşula göre seçim için kullan  
3. **Reduce** - Tek değer elde etmek için kullan
4. **Find** - İlk eşleşeni bulmak için kullan
5. **ForEach** - Sadece işlem yapmak için kullan
6. **Some** - "En az bir" kontrolü için kullan
7. **Every** - "Hepsi" kontrolü için kullan


---

## Map ve Filter Birlikte Kullanım - 10 Örnek

### 21. Çift Sayıları Bulup Karesini Alma

```javascript
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8];
const sonuc = sayilar
    .filter(sayi => sayi % 2 === 0)    // [2, 4, 6, 8]
    .map(sayi => sayi * sayi);         // [4, 16, 36, 64]

console.log(sonuc); // [4, 16, 36, 64]
```

---

### 22. Geçen Notları Bulup Harf Notuna Çevirme

```javascript
const notlar = [45, 75, 60, 30, 85, 90];
const harfNotlari = notlar
    .filter(not => not >= 60)         // [75, 60, 85, 90]
    .map(not => not >= 85 ? "A" : "B"); // ["B", "B", "A", "A"]

console.log(harfNotlari); // ["B", "B", "A", "A"]
```

---

### 23. Uzun İsimleri Bulup Büyük Harfe Çevirme

```javascript
const isimler = ["Ali", "Mehmet", "Su", "Ahmet", "Fatma"];
const sonuc = isimler
    .filter(isim => isim.length > 3)   // ["Mehmet", "Ahmet", "Fatma"]
    .map(isim => isim.toUpperCase());  // ["MEHMET", "AHMET", "FATMA"]

console.log(sonuc); // ["MEHMET", "AHMET", "FATMA"]
```

---

### 24. Pahalı Ürünleri Bulup İndirimli Fiyat Hesaplama

```javascript
const fiyatlar = [50, 150, 300, 75, 500];
const indirimli = fiyatlar
    .filter(fiyat => fiyat > 100)      // [150, 300, 500]
    .map(fiyat => fiyat * 0.8);        // [120, 240, 400] (%20 indirim)

console.log(indirimli); // [120, 240, 400]
```

---

### 25. Pozitif Sayıları Bulup 10 ile Çarpma

```javascript
const sayilar = [-5, 3, -2, 7, 0, 4, -1];
const sonuc = sayilar
    .filter(sayi => sayi > 0)          // [3, 7, 4]
    .map(sayi => sayi * 10);           // [30, 70, 40]

console.log(sonuc); // [30, 70, 40]
```

---

### 26. Kısa Kelimeleri Bulup Ünlem Ekleme

```javascript
const kelimeler = ["merhaba", "hi", "selam", "hey", "nasılsın"];
const sonuc = kelimeler
    .filter(kelime => kelime.length <= 3)  // ["hi", "hey"]
    .map(kelime => kelime + "!");          // ["hi!", "hey!"]

console.log(sonuc); // ["hi!", "hey!"]
```

---

### 27. Yetişkin Yaşları Bulup Emeklilik Yılı Hesaplama

```javascript
const yaslar = [15, 25, 45, 17, 35, 65];
const emeklilik = yaslar
    .filter(yas => yas >= 18)          // [25, 45, 35, 65]
    .map(yas => 65 - yas);             // [40, 20, 30, 0]

console.log(emeklilik); // [40, 20, 30, 0] (emekliliğe kalan yıl)
```

---

### 28. Tek Sayıları Bulup Yarısını Alma

```javascript
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sonuc = sayilar
    .filter(sayi => sayi % 2 === 1)    // [1, 3, 5, 7, 9]
    .map(sayi => sayi / 2);            // [0.5, 1.5, 2.5, 3.5, 4.5]

console.log(sonuc); // [0.5, 1.5, 2.5, 3.5, 4.5]
```

---

### 29. Büyük Harfli Kelimeleri Bulup Uzunluğunu Alma

```javascript
const kelimeler = ["MERHABA", "dünya", "JAVASCRIPT", "kod", "PROGRAM"];
const sonuc = kelimeler
    .filter(kelime => kelime === kelime.toUpperCase()) // ["MERHABA", "JAVASCRIPT", "PROGRAM"]
    .map(kelime => kelime.length);                     // [7, 10, 7]

console.log(sonuc); // [7, 10, 7]
```

---

### 30. Çift Uzunluklu Kelimeleri Bulup İlk Harfini Alma

```javascript
const kelimeler = ["ev", "araba", "at", "bilgisayar", "masa", "kalem"];
const sonuc = kelimeler
    .filter(kelime => kelime.length % 2 === 0)  // ["ev", "at", "masa"]
    .map(kelime => kelime[0]);                   // ["e", "a", "m"]

console.log(sonuc); // ["e", "a", "m"]
```

---

## Üçlü Kombinasyon Örnekleri

### Bonus 1: Filter + Map + Reduce

```javascript
// Çift sayıları bulup karelerini alıp toplama
const sayilar = [1, 2, 3, 4, 5, 6];
const sonuc = sayilar
    .filter(sayi => sayi % 2 === 0)    // [2, 4, 6]
    .map(sayi => sayi * sayi)          // [4, 16, 36]
    .reduce((toplam, sayi) => toplam + sayi, 0); // 56

console.log(sonuc); // 56
```

### Bonus 2: Filter + Map + Join

```javascript
// Uzun isimleri bulup büyük harfe çevirip birleştirme
const isimler = ["Ali", "Mehmet", "Su", "Ahmet"];
const sonuc = isimler
    .filter(isim => isim.length > 3)   // ["Mehmet", "Ahmet"]
    .map(isim => isim.toUpperCase())   // ["MEHMET", "AHMET"]
    .join(" - ");                      // "MEHMET - AHMET"

console.log(sonuc); // "MEHMET - AHMET"
```

---

## Pratik Kullanım İpuçları

1. **Önce filtrele, sonra dönüştür** - Performans için daha az eleman üzerinde işlem yap
2. **Zincirleme kullanım** - Kodun okunabilirliğini artırır
3. **Her adımı test et** - Ara sonuçları console.log ile kontrol et
4. **Anlamlı değişken isimleri** - Kodun ne yaptığını açık hale getir
