  # JavaScript Temelleri - Ders Notu

## 📌 Giriş
Bu ders notunda JavaScript'in temel kavramlarını, veri tiplerini ve operatörleri öğreneceğiz. Her konu için pratik örnekler ve açıklamalar bulacaksınız.

---

## 🔍 1. Programlama Dili Nedir?

### 1.1 Temel Tanım
**Programlama dili**, bilgisayarla iletişim kurmak için kullandığımız özel bir dildir. Tıpkı insanlar arasında iletişim kurarken Türkçe, İngilizce gibi dilleri kullandığımız gibi, bilgisayara ne yapmasını istediğimizi programlama dilleri ile söyleriz.

### 1.2 Günlük Hayattan Örnek
```
İnsan dili: "Mutfaktan su getir"
Programlama dili: console.log("Merhaba Dünya!");
```

### 1.3 Interpreted vs Compiled Languages

#### Compiled Languages (Derlenmiş Diller)
- **Çalışma şekli**: Kod önce makine diline çevrilir, sonra çalışır
- **Örnek**: C, C++, Java
- **Avantaj**: Hızlı çalışır
- **Dezavantaj**: Her değişiklikten sonra derleme gerekir

#### Interpreted Languages (Yorumlanan Diller)
- **Çalışma şekli**: Kod satır satır yorumlanır ve çalıştırılır
- **Örnek**: JavaScript, Python
- **Avantaj**: Hızlı geliştirme, anında test
- **Dezavantaj**: Çalışma sırasında yavaş olabilir

**JavaScript bir interpreted (yorumlanan) dildir!**

---

## 🌟 2. JavaScript'in Tarihi ve Kullanım Alanları

### 2.1 Kısa Tarih
- **1995**: Netscape'de Brendan Eich tarafından 10 günde yazıldı
- **İlk adı**: LiveScript
- **1997**: ECMAScript standardı oluşturuldu
- **Bugün**: Web'in vazgeçilmez dili

### 2.2 Kullanım Alanları

#### 🌐 Web Geliştirme
```javascript
// Web sayfasında basit hesaplama
var sayi1 = 10;
var sayi2 = 5;
var toplam = sayi1 + sayi2;
console.log("Toplam: " + toplam);
```

#### 📱 Mobil Uygulama Geliştirme
```javascript
// Mobil uygulama için temel değişkenler
let kullaniciAdi = "Ahmet";
let kullaniciYasi = 25;
let aktifMi = true;
```

#### 🖥️ Desktop Uygulamaları
```javascript
// Desktop uygulama için temel veri
const uygulamaAdi = "Hesap Makinesi";
const versiyon = "1.0";
let pencereGenislik = 800;
let pencereYukseklik = 600;
```

---

## 🌍 3. Browser vs Node.js JavaScript

### 3.1 Browser JavaScript
- **Çalışma yeri**: Web tarayıcısı
- **Erişim**: DOM, Window objesi
- **Sınırlamalar**: Güvenlik nedeniyle dosya sistemi erişimi yok

```javascript
// Browser'da çalışan kod
var sayfaBasligi = "Merhaba Web!";
var ziyaretciSayisi = 150;
var sayfaAktif = true;
console.log(sayfaBasligi);
```

### 3.2 Node.js JavaScript
- **Çalışma yeri**: Sunucu/bilgisayar
- **Erişim**: Dosya sistemi, network
- **Avantaj**: Tam sistem erişimi

```javascript
// Node.js'de çalışan kod
const sunucuAdi = "Web Sunucusu";
let bagliKullanici = 25;
var maksimumKullanici = 100;
let sunucuCalisiyor = true;
console.log(sunucuAdi + " aktif, " + bagliKullanici + " kullanıcı bağlı");
```

---

## 📦 4. Variables (Değişkenler) ve Data Types (Veri Tipleri)

### 4.1 Variable Nedir?
**Variable (Değişken)**, verileri bellekte saklamak için kullandığımız isimlendirilmiş kutulardır.

```javascript
// Günlük hayat örneği
let ogrenciAdi = "Mehmet";
let ogrenciYasi = 20;
let ogrenciNotu = 85;
```

### 4.2 Variable Tanımlama Yöntemleri

#### 4.2.1 `var` (Eski Yöntem)
```javascript
var isim = "Ali";
var yas = 25;

// Var'ın problemleri
var mesaj = "Merhaba";
if (true) {
    var mesaj = "Günaydın"; // Aynı değişken değişti!
}
console.log(mesaj); // "Günaydın" (Beklenmedik!)
```

#### 4.2.2 `let` (Modern Yöntem)
```javascript
let isim = "Ayşe";
let yas = 22;

// Let'in avantajları
let mesaj = "Merhaba";
if (true) {
    let mesaj = "Günaydın"; // Farklı scope'da farklı değişken
}
console.log(mesaj); // "Merhaba" (Beklenen!)
```

#### 4.2.3 `const` (Değişmez Değerler)
```javascript
const pi = 3.14;
const okulAdi = "Ankara Üniversitesi";

// Const değiştirilemez
const notOrtalamasi = 85;
// notOrtalamasi = 90; // HATA! Const değiştirilemez
```

### 4.3 Primitive Data Types (Temel Veri Tipleri)

#### 4.3.1 String (Metin)
```javascript
let ad = "Fatma";
let soyad = 'Yılmaz';
let mesaj = "Merhaba " + ad + " " + soyad + "!"; // String birleştirme

// String özellikleri
console.log(ad.length); // 5 (string uzunluğu)
console.log("Toplam karakter: " + ad.length);
```

#### 4.3.2 Number (Sayı)
```javascript
let tamSayi = 42;
let ondalikSayi = 3.14;
let negatifSayi = -10;

// Number değerlerini kullanma
console.log(tamSayi); // 42
console.log("Ondalık sayı: " + ondalikSayi); // "Ondalık sayı: 3.14"

// Matematiksel işlemler
let toplam = tamSayi + ondalikSayi; // 45.14
let carpim = tamSayi * 2; // 84
```

#### 4.3.3 Boolean (Doğru/Yanlış)
```javascript
let ogrenciGecti = true;
let sinavBitti = false;

// Boolean kullanımı
console.log(ogrenciGecti); // true
console.log("Sınav durumu: " + sinavBitti); // "Sınav durumu: false"
console.log(!ogrenciGecti); // false (tersini alma)
```

#### 4.3.4 null (Boş Değer)
```javascript
let seciliOgrenci = null; // Kasıtlı olarak boş bırakıldı

// Null kontrolü
console.log(seciliOgrenci); // null
console.log(seciliOgrenci === null); // true
console.log("Seçili öğrenci: " + seciliOgrenci); // "Seçili öğrenci: null"
```

#### 4.3.5 undefined (Tanımsız)
```javascript
let ogrenciNotu; // Tanımlandı ama değer verilmedi
console.log(ogrenciNotu); // undefined

// Undefined kontrolü
console.log(ogrenciNotu === undefined); // true
console.log("Not değeri: " + ogrenciNotu); // "Not değeri: undefined"
```

### 4.4 typeof Operatörü (Veri Tipi Kontrolü)

```javascript
// Farklı veri tiplerini kontrol etme
let isim = "Ahmet";
let yas = 25;
let aktif = true;
let bosDeger = null;
let tanimsizDeger;

console.log(typeof isim); // "string"
console.log(typeof yas); // "number"
console.log(typeof aktif); // "boolean"
console.log(typeof bosDeger); // "object" (null'ın özel durumu)
console.log(typeof tanimsizDeger); // "undefined"

// Pratik kullanım
let kullaniciGirdisi = "123";
console.log(typeof kullaniciGirdisi); // "string"

// Tip kontrolü ile karar verme
let deger1 = 42;
let deger2 = "42";
console.log(typeof deger1 === "number"); // true
console.log(typeof deger2 === "string"); // true
console.log(deger1 === deger2); // false (farklı tipler)
```

### 4.5 Veri Tipi Dönüşümleri

```javascript
// String'den Number'a dönüşüm
let stringSayi = "123";
let sayi = Number(stringSayi);
console.log(typeof stringSayi); // "string"
console.log(typeof sayi); // "number"

// Number'dan String'e dönüşüm
let rakam = 456;
let stringRakam = String(rakam);
console.log(typeof rakam); // "number"
console.log(typeof stringRakam); // "string"

// Boolean dönüşümleri
let metinBoolean = Boolean("merhaba"); // true
let sayiBoolean = Boolean(0); // false
let bosStringBoolean = Boolean(""); // false
console.log(metinBoolean); // true
console.log(sayiBoolean); // false
console.log(bosStringBoolean); // false
```

---

## ⚙️ 5. Operators (Operatörler)

### 5.1 Arithmetic Operators (Aritmetik Operatörler)

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (Toplama)
console.log(a - b); // 7  (Çıkarma)
console.log(a * b); // 30 (Çarpma)
console.log(a / b); // 3.333... (Bölme)
console.log(a % b); // 1  (Mod - kalan)
console.log(a ** b); // 1000 (Üs alma)

// Pratik örnek: Sınav notu hesaplama
let vize = 70;
let final = 80;
let ortalama = (vize * 0.4) + (final * 0.6);
console.log(`Ortalama: ${ortalama}`); // Ortalama: 76
```

### 5.2 Comparison Operators (Karşılaştırma Operatörleri)

```javascript
let not1 = 85;
let not2 = 90;

console.log(not1 == not2);  // false (Eşit mi?)
console.log(not1 != not2);  // true  (Eşit değil mi?)
console.log(not1 < not2);   // true  (Küçük mü?)
console.log(not1 > not2);   // false (Büyük mü?)
console.log(not1 <= not2);  // true  (Küçük veya eşit mi?)
console.log(not1 >= not2);  // false (Büyük veya eşit mi?)

// Strict comparison (Sıkı karşılaştırma)
console.log(85 == "85");   // true  (Değer aynı)
console.log(85 === "85");  // false (Değer aynı ama tip farklı)
console.log(85 !== "85");  // true  (Değer aynı ama tip farklı)

// Pratik örnek: Geçme notu kontrolü
let ogrenciNotu = 75;
let gecmeNotu = 70;

console.log(ogrenciNotu >= gecmeNotu); // true
console.log("Geçme durumu: " + (ogrenciNotu >= gecmeNotu)); // "Geçme durumu: true"
```

### 5.3 Logical Operators (Mantıksal Operatörler)

```javascript
// AND (&&) - VE operatörü
let vizeNotu = 80;
let finalNotu = 75;
let devamsizlik = 3;

let gecti = (vizeNotu >= 60) && (finalNotu >= 60) && (devamsizlik < 5);
console.log(gecti); // true

// OR (||) - VEYA operatörü
let odev1 = 90;
let odev2 = 40;
let odevBasarili = (odev1 >= 70) || (odev2 >= 70);
console.log(odevBasarili); // true

// NOT (!) - DEĞİL operatörü
let sinavBitti = true;
let sinavDevamEdiyor = !sinavBitti;
console.log(sinavDevamEdiyor); // false

// Pratik örnek: Burs kriterleri
let ortalama = 85;
let gelirDurumu = "düşük";
let kayitliMi = true;

let bursHakkiVar = (ortalama >= 80) && (gelirDurumu === "düşük") && kayitliMi;
console.log("Burs hakkı: " + bursHakkiVar); // Burs hakkı: true
```

### 5.4 Assignment Operators (Atama Operatörleri)

```javascript
let puan = 100;

// Temel atama
puan = 150; // puan artık 150

// Toplama ataması
puan += 50;  // puan = puan + 50; (200)
puan -= 25;  // puan = puan - 25; (175)
puan *= 2;   // puan = puan * 2;  (350)
puan /= 7;   // puan = puan / 7;  (50)
puan %= 3;   // puan = puan % 3;  (2)

// Praktik örnek: Sınav puanı güncelleme
let toplamPuan = 0;

toplamPuan += 85; // 1. sınav
toplamPuan += 90; // 2. sınav
toplamPuan += 78; // 3. sınav

let sinavSayisi = 3;
let ortalamaPuan = toplamPuan / sinavSayisi;
console.log("Ortalama: " + ortalamaPuan); // Ortalama: 84.33...
```

### 5.5 Ternary Operator (Üçlü Operatör)

```javascript
// Temel syntax: kosul ? dogruIse : yanlisIse

let not = 85;
let durum = not >= 70 ? "Geçti" : "Kaldı";
console.log(durum); // "Geçti"

// Çoklu kullanım
let siniflamaNotla = (not >= 90) ? "A" : 
                     (not >= 80) ? "B" : 
                     (not >= 70) ? "C" : "F";
console.log(siniflamaNotla); // "B"

// Pratik örnek: İndirim hesaplama
let alisverisTopami = 250;
let indirimOrani = alisverisTopami >= 200 ? 0.15 : 0.05;
let indirimTutari = alisverisTopami * indirimOrani;
let odenecekTutar = alisverisTopami - indirimTutari;

console.log("İndirim: " + indirimTutari + " TL");
console.log("Ödenecek: " + odenecekTutar + " TL");
```

---

## 🧪 6. Pratik Alıştırmalar

### Alıştırma 1: Öğrenci Not Hesaplama
```javascript
// Öğrenci bilgileri
let ogrenciAd = "Ahmet";
let ogrenciSoyad = "Yılmaz";
let ogrenciNo = "12345";
let vizeNotu = 78;
let finalNotu = 85;
let devamsizlik = 2;

// Ortalama hesaplama
let ortalama = (vizeNotu * 0.4) + (finalNotu * 0.6);

// Geçme durumu kontrolü
let gecti = (ortalama >= 60) && (devamsizlik < 5);

// Harf notu belirleme
let harfNotu = (ortalama >= 90) ? "AA" :
               (ortalama >= 80) ? "BA" :
               (ortalama >= 70) ? "BB" :
               (ortalama >= 60) ? "CB" : "FF";

// Sonuçları yazdırma
console.log(ogrenciAd + " " + ogrenciSoyad);
console.log("Ortalama: " + ortalama);
console.log("Harf Notu: " + harfNotu);
console.log("Durum: " + (gecti ? "Geçti" : "Kaldı"));
```

### Alıştırma 2: Basit Hesaplamalar
```javascript
// Matematik işlemleri
let sayi1 = 10;
let sayi2 = 5;

let toplam = sayi1 + sayi2;
let fark = sayi1 - sayi2;
let carpim = sayi1 * sayi2;
let bolum = sayi1 / sayi2;
let kalan = sayi1 % sayi2;

console.log("Toplam: " + toplam);
console.log("Fark: " + fark);
console.log("Çarpım: " + carpim);
console.log("Bölüm: " + bolum);
console.log("Kalan: " + kalan);

// Karşılaştırma
let buyukMu = sayi1 > sayi2;
let esitMi = sayi1 === sayi2;
console.log("Büyük mü: " + buyukMu);
console.log("Eşit mi: " + esitMi);
```

### Alıştırma 3: Değişken Tip Kontrolü
```javascript
// Farklı tipte değişkenler
let isim = "Fatma";
let yas = 22;
let ogrenciMi = true;
let not = null;
let adres;

// Tip kontrolü
console.log("İsim tipi: " + typeof isim);
console.log("Yaş tipi: " + typeof yas);
console.log("Öğrenci mi tipi: " + typeof ogrenciMi);
console.log("Not tipi: " + typeof not);
console.log("Adres tipi: " + typeof adres);

// Değer kontrolü
console.log("İsim: " + isim);
console.log("Yaş: " + yas);
console.log("Öğrenci mi: " + ogrenciMi);
console.log("Not: " + not);
console.log("Adres: " + adres);
```

---

## 🎯 7. Önemli Notlar ve İpuçları

### 7.1 Değişken İsimlendirme Kuralları
```javascript
// ✅ Doğru isimlendirme
let ogrenciAdi = "Mehmet";
let _ozelDegisken = "test";
let $jqueryObje = "jQuery";
let not1 = 85;

// ❌ Yanlış isimlendirme
// let 1not = 85;        // Sayı ile başlayamaz
// let öğrenci-adı = ""; // Özel karakter kullanılamaz
// let class = "test";   // Anahtar kelime kullanılamaz
```

### 7.2 Type Checking (Tip Kontrolü)
```javascript
let deger = 42;
console.log(typeof deger); // "number"

deger = "Merhaba";
console.log(typeof deger); // "string"

deger = true;
console.log(typeof deger); // "boolean"

deger = null;
console.log(typeof deger); // "object" (null'ın özel durumu)

let tanimsizDeger;
console.log(typeof tanimsizDeger); // "undefined"
```

### 7.3 Yaygın Hatalar ve Çözümleri

#### Hata 1: Değişken Tanımlamadan Kullanmak
```javascript
// ❌ Hata
console.log(tanımlanmamısDeğişken); // ReferenceError

// ✅ Doğru
let degisken = "Değer";
console.log(degisken);
```

#### Hata 2: Const Değişkeni Değiştirmeye Çalışmak
```javascript
// ❌ Hata
const ad = "Ali";
ad = "Ayşe"; // TypeError

// ✅ Doğru
let ad = "Ali";
ad = "Ayşe"; // Sorun yok
```

#### Hata 3: == ve === Karıştırmak
```javascript
// ❌ Beklenmedik sonuç
console.log(0 == false);  // true
console.log("" == false); // true

// ✅ Güvenli karşılaştırma
console.log(0 === false);  // false
console.log("" === false); // false
```

---

## 📝 8. Özet

Bu ders notunda öğrendiklerimiz:

1. **Programlama Dili Temelleri**: JavaScript yorumlanan bir dildir
2. **Çalışma Ortamları**: Browser ve Node.js arasındaki farklar
3. **Değişken Tanımlama**: `var`, `let`, `const` kullanımı
4. **Veri Tipleri**: Primitive tipler (string, number, boolean, null, undefined)
5. **Operatörler**: Aritmetik, karşılaştırma, mantıksal, atama ve ternary operatörler
6. **typeof Operatörü**: Değişken tiplerini kontrol etme
7. **Veri Tipi Dönüşümleri**: String, Number, Boolean dönüşümleri

### Bir Sonraki Ders
Bir sonraki derste **Control Flow** konusunu işleyeceğiz:
- Conditional statements (if/else/switch)
- Loops (for/while)
- Break ve continue

---

## 🏆 Ev Ödevi

1. Kendi bilgilerinizi içeren değişkenler oluşturun (ad, soyad, yaş, öğrenci numarası)
2. Farklı veri tiplerinden değişkenler tanımlayın ve console.log ile yazdırın
3. İki sayı ile temel matematik işlemlerini (toplama, çıkarma, çarpma, bölme) yapın
4. Karşılaştırma operatörlerini kullanarak farklı durumları test edin
5. `typeof` operatörünü kullanarak değişken tiplerini kontrol edin
6. Mantıksal operatörlerle (&&, ||, !) farklı koşulları test edin
7. Ternary operatörünü kullanarak basit karar yapıları oluşturun
8. String'den Number'a, Number'dan String'e dönüşüm örnekleri yapın

**Başarılar! 🎉** 