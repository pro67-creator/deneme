
### ALIŞTIRMA 1: Pozitif, Negatif veya Sıfır
**Problem:** Bir sayının pozitif, negatif veya sıfır olup olmadığını if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Sayı: -5
Sonuç: Negatif
```
**Çözüm:**
```javascript
let sayi = -5;
if (sayi > 0) {
    console.log("Sonuç: Pozitif");
} else if (sayi < 0) {
    console.log("Sonuç: Negatif");
} else {
    console.log("Sonuç: Sıfır");
}
```

---

### ALIŞTIRMA 2: Çift mi Tek mi?
**Problem:** Bir sayının çift mi tek mi olduğunu if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Sayı: 7
Sonuç: Tek
```
**Çözüm:**
```javascript
let sayi = 7;
if (sayi % 2 === 0) {
    console.log("Sonuç: Çift");
} else {
    console.log("Sonuç: Tek");
}
```

---

### ALIŞTIRMA 3: Sıcaklık Durumu
**Problem:** Sıcaklık 0'ın altındaysa "Dondurucu soğuk", 0-15 arası "Soğuk", 16-25 arası "Ilıman", 26 ve üzeri ise "Sıcak" yazdırın.

**Beklenen Çıktı:**
```
Sıcaklık: 12
Durum: Soğuk
```
**Çözüm:**
```javascript
let sicaklik = 12;
if (sicaklik < 0) {
    console.log("Durum: Dondurucu soğuk");
} else if (sicaklik <= 15) {
    console.log("Durum: Soğuk");
} else if (sicaklik <= 25) {
    console.log("Durum: Ilıman");
} else {
    console.log("Durum: Sıcak");
}
```

---

### ALIŞTIRMA 4: Haftanın Günü
**Problem:** 1-7 arasında bir sayı ile haftanın gününü switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Gün numarası: 5
Gün: Cuma
```
**Çözüm:**
```javascript
let gun = 5;
switch (gun) {
    case 1:
        console.log("Gün: Pazartesi");
        break;
    case 2:
        console.log("Gün: Salı");
        break;
    case 3:
        console.log("Gün: Çarşamba");
        break;
    case 4:
        console.log("Gün: Perşembe");
        break;
    case 5:
        console.log("Gün: Cuma");
        break;
    case 6:
        console.log("Gün: Cumartesi");
        break;
    case 7:
        console.log("Gün: Pazar");
        break;
    default:
        console.log("Geçersiz gün numarası!");
}
```

---

### ALIŞTIRMA 5: Not Harf Karşılığı
**Problem:** Bir öğrencinin notuna göre harf karşılığını if-else ile yazdırın.
- 90-100: AA
- 85-89: BA
- 80-84: BB
- 75-79: CB
- 70-74: CC
- 65-69: DC
- 60-64: DD
- 0-59: FF

**Beklenen Çıktı:**
```
Not: 82
Harf: BB
```
**Çözüm:**
```javascript
let not = 82;
let harf;
if (not >= 90) {
    harf = "AA";
} else if (not >= 85) {
    harf = "BA";
} else if (not >= 80) {
    harf = "BB";
} else if (not >= 75) {
    harf = "CB";
} else if (not >= 70) {
    harf = "CC";
} else if (not >= 65) {
    harf = "DC";
} else if (not >= 60) {
    harf = "DD";
} else {
    harf = "FF";
}
console.log("Harf: " + harf);
```

---

### ALIŞTIRMA 6: Mevsim Bulucu
**Problem:** Ay numarasına göre (1-12) hangi mevsim olduğunu switch-case ile yazdırın.
- 12, 1, 2: Kış
- 3, 4, 5: İlkbahar
- 6, 7, 8: Yaz
- 9, 10, 11: Sonbahar

**Beklenen Çıktı:**
```
Ay: 4
Mevsim: İlkbahar
```
**Çözüm:**
```javascript
let ay = 4;
switch (ay) {
    case 12:
    case 1:
    case 2:
        console.log("Mevsim: Kış");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Mevsim: İlkbahar");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Mevsim: Yaz");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Mevsim: Sonbahar");
        break;
    default:
        console.log("Geçersiz ay numarası!");
}
```

---

### ALIŞTIRMA 7: Sınav Geçme Durumu
**Problem:** Vize ve final notu ile ortalamayı hesaplayıp, ortalama 60 ve üzeriyse "Geçti", değilse "Kaldı" yazdırın.

**Beklenen Çıktı:**
```
Vize: 70
Final: 80
Ortalama: 76
Durum: Geçti
```
**Çözüm:**
```javascript
let vize = 70;
let final = 80;
let ortalama = (vize * 0.4) + (final * 0.6);
console.log("Ortalama: " + ortalama);
if (ortalama >= 60) {
    console.log("Durum: Geçti");
} else {
    console.log("Durum: Kaldı");
}
```

---

### ALIŞTIRMA 8: Yaş Gruplandırma
**Problem:** Yaşa göre "Çocuk" (0-12), "Genç" (13-17), "Yetişkin" (18-64), "Yaşlı" (65+) yazdırın.

**Beklenen Çıktı:**
```
Yaş: 15
Grup: Genç
```
**Çözüm:**
```javascript
let yas = 15;
if (yas >= 0 && yas <= 12) {
    console.log("Grup: Çocuk");
} else if (yas <= 17) {
    console.log("Grup: Genç");
} else if (yas <= 64) {
    console.log("Grup: Yetişkin");
} else {
    console.log("Grup: Yaşlı");
}
```

---

### ALIŞTIRMA 9: Ay Adı Yazdırma
**Problem:** Ay numarasına göre ay adını switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Ay numarası: 9
Ay: Eylül
```
**Çözüm:**
```javascript
let ay = 9;
switch (ay) {
    case 1:
        console.log("Ay: Ocak");
        break;
    case 2:
        console.log("Ay: Şubat");
        break;
    case 3:
        console.log("Ay: Mart");
        break;
    case 4:
        console.log("Ay: Nisan");
        break;
    case 5:
        console.log("Ay: Mayıs");
        break;
    case 6:
        console.log("Ay: Haziran");
        break;
    case 7:
        console.log("Ay: Temmuz");
        break;
    case 8:
        console.log("Ay: Ağustos");
        break;
    case 9:
        console.log("Ay: Eylül");
        break;
    case 10:
        console.log("Ay: Ekim");
        break;
    case 11:
        console.log("Ay: Kasım");
        break;
    case 12:
        console.log("Ay: Aralık");
        break;
    default:
        console.log("Geçersiz ay numarası!");
}
```

---

### ALIŞTIRMA 10: Harf mi Sesli mi Sessiz mi?
**Problem:** Girilen harfin sesli mi sessiz mi olduğunu switch-case ile kontrol edin.

**Beklenen Çıktı:**
```
Harf: e
Sonuç: Sesli harf
```
**Çözüm:**
```javascript
let harf = "e";
switch (harf) {
    case "a":
    case "e":
    case "ı":
    case "i":
    case "o":
    case "ö":
    case "u":
    case "ü":
        console.log("Sonuç: Sesli harf");
        break;
    default:
        console.log("Sonuç: Sessiz harf");
}
```

---

### ALIŞTIRMA 11: Üç Sayıdan En Büyüğü
**Problem:** Üç sayıdan en büyüğünü if-else ile bulun.

**Beklenen Çıktı:**
```
Sayılar: 12, 45, 27
En büyük: 45
```
**Çözüm:**
```javascript
let a = 12, b = 45, c = 27;
let enBuyuk;
if (a >= b && a >= c) {
    enBuyuk = a;
} else if (b >= a && b >= c) {
    enBuyuk = b;
} else {
    enBuyuk = c;
}
console.log("En büyük: " + enBuyuk);
```

---

### ALIŞTIRMA 12: Sınav Harf Notu (switch)
**Problem:** 1-5 arası notu switch-case ile harf karşılığına çevirin. (5: AA, 4: BA, 3: BB, 2: CC, 1: FF)

**Beklenen Çıktı:**
```
Not: 3
Harf: BB
```
**Çözüm:**
```javascript
let not = 3;
switch (not) {
    case 5:
        console.log("Harf: AA");
        break;
    case 4:
        console.log("Harf: BA");
        break;
    case 3:
        console.log("Harf: BB");
        break;
    case 2:
        console.log("Harf: CC");
        break;
    case 1:
        console.log("Harf: FF");
        break;
    default:
        console.log("Geçersiz not!");
}
```

---

### ALIŞTIRMA 13: Ehliyet Yaşı
**Problem:** Yaşı 18 ve üzeri olan "Ehliyet alabilir", değilse "Ehliyet alamaz" yazdırın.

**Beklenen Çıktı:**
```
Yaş: 20
Sonuç: Ehliyet alabilir
```
**Çözüm:**
```javascript
let yas = 20;
if (yas >= 18) {
    console.log("Sonuç: Ehliyet alabilir");
} else {
    console.log("Sonuç: Ehliyet alamaz");
}
```

---

### ALIŞTIRMA 14: Sıcaklık Birimi Dönüşümü
**Problem:** Birim "C" ise Celsius'u, "F" ise Fahrenheit'ı ekrana yazdırın (switch-case).

**Beklenen Çıktı:**
```
Birim: F
Sonuç: Fahrenheit
```
**Çözüm:**
```javascript
let birim = "F";
switch (birim) {
    case "C":
        console.log("Sonuç: Celsius");
        break;
    case "F":
        console.log("Sonuç: Fahrenheit");
        break;
    default:
        console.log("Geçersiz birim!");
}
```

---

### ALIŞTIRMA 15: Üçgen Tipi
**Problem:** Üç kenarı verilen üçgenin eşkenar, ikizkenar veya çeşitkenar olup olmadığını if-else ile bulun.

**Beklenen Çıktı:**
```
Kenarlar: 5, 5, 8
Tip: İkizkenar
```
**Çözüm:**
```javascript
let k1 = 5, k2 = 5, k3 = 8;
if (k1 === k2 && k2 === k3) {
    console.log("Tip: Eşkenar");
} else if (k1 === k2 || k1 === k3 || k2 === k3) {
    console.log("Tip: İkizkenar");
} else {
    console.log("Tip: Çeşitkenar");
}
```

---

### ALIŞTIRMA 16: Günün Zamanı
**Problem:** Saat değerine göre "Sabah" (6-11), "Öğle" (12-17), "Akşam" (18-23), "Gece" (0-5) yazdırın.

**Beklenen Çıktı:**
```
Saat: 21
Zaman: Akşam
```
**Çözüm:**
```javascript
let saat = 21;
if (saat >= 6 && saat <= 11) {
    console.log("Zaman: Sabah");
} else if (saat <= 17) {
    console.log("Zaman: Öğle");
} else if (saat <= 23) {
    console.log("Zaman: Akşam");
} else {
    console.log("Zaman: Gece");
}
```

---

### ALIŞTIRMA 17: Hafta Sonu mu Hafta İçi mi?
**Problem:** Gün numarasına göre (1: Pazartesi, ..., 7: Pazar) hafta sonu mu hafta içi mi olduğunu switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Gün: 6
Sonuç: Hafta sonu
```
**Çözüm:**
```javascript
let gun = 6;
switch (gun) {
    case 6:
    case 7:
        console.log("Sonuç: Hafta sonu");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Sonuç: Hafta içi");
        break;
    default:
        console.log("Geçersiz gün!");
}
```

---

### ALIŞTIRMA 18: Sıfırla Bölme Kontrolü
**Problem:** İki sayıdan ikincisi sıfırsa "Bölme yapılamaz", değilse bölümü yazdırın.

**Beklenen Çıktı:**
```
Sayılar: 10, 0
Sonuç: Bölme yapılamaz
```
**Çözüm:**
```javascript
let s1 = 10, s2 = 0;
if (s2 === 0) {
    console.log("Sonuç: Bölme yapılamaz");
} else {
    console.log("Sonuç: " + (s1 / s2));
}
```

---

### ALIŞTIRMA 19: Harf Notu (switch, string)
**Problem:** "AA", "BA", "BB", "CB", "CC", "DC", "DD", "FF" harf notuna göre başarı durumunu switch-case ile yazdırın. (AA, BA, BB: "Başarılı", diğerleri: "Başarısız")

**Beklenen Çıktı:**
```
Harf: DC
Sonuç: Başarısız
```
**Çözüm:**
```javascript
let harf = "DC";
switch (harf) {
    case "AA":
    case "BA":
    case "BB":
        console.log("Sonuç: Başarılı");
        break;
    case "CB":
    case "CC":
    case "DC":
    case "DD":
    case "FF":
        console.log("Sonuç: Başarısız");
        break;
    default:
        console.log("Geçersiz harf!");
}
```

---

### ALIŞTIRMA 20: KDV Hesaplama
**Problem:** Fiyat ve KDV oranı verildiğinde, toplam fiyatı if-else ile hesaplayın.

**Beklenen Çıktı:**
```
Fiyat: 200
KDV oranı: 0.18
Toplam: 236
```
**Çözüm:**
```javascript
let fiyat = 200;
let kdvOrani = 0.18;
let toplam = fiyat + (fiyat * kdvOrani);
console.log("Toplam: " + toplam);
```

---

### ALIŞTIRMA 21: Sıcaklık Birimi Kontrolü (if-else)
**Problem:** Birim "C" ise "Santigrat", "F" ise "Fahrenheit", "K" ise "Kelvin" yazdırın.

**Beklenen Çıktı:**
```
Birim: K
Sonuç: Kelvin
```
**Çözüm:**
```javascript
let birim = "K";
if (birim === "C") {
    console.log("Sonuç: Santigrat");
} else if (birim === "F") {
    console.log("Sonuç: Fahrenheit");
} else if (birim === "K") {
    console.log("Sonuç: Kelvin");
} else {
    console.log("Geçersiz birim!");
}
```

---

### ALIŞTIRMA 22: Notun Geçerli Olup Olmadığı
**Problem:** Not 0-100 aralığında değilse "Geçersiz not", aralıktaysa "Geçerli not" yazdırın.

**Beklenen Çıktı:**
```
Not: 105
Sonuç: Geçersiz not
```
**Çözüm:**
```javascript
let not = 105;
if (not >= 0 && not <= 100) {
    console.log("Sonuç: Geçerli not");
} else {
    console.log("Sonuç: Geçersiz not");
}
```

---

### ALIŞTIRMA 23: Sayı Basamak Kontrolü
**Problem:** Bir sayının tek mi çift basamaklı mı olduğunu if-else ile bulun.

**Beklenen Çıktı:**
```
Sayı: 47
Sonuç: Çift basamaklı
```
**Çözüm:**
```javascript
let sayi = 47;
if (sayi >= 10 && sayi <= 99) {
    console.log("Sonuç: Çift basamaklı");
} else {
    console.log("Sonuç: Tek basamaklı veya üç basamaklı");
}
```

---

### ALIŞTIRMA 24: Mevsim ve Aylar
**Problem:** Mevsime göre ("Kış", "İlkbahar", "Yaz", "Sonbahar") ayları switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Mevsim: Yaz
Aylar: Haziran, Temmuz, Ağustos
```
**Çözüm:**
```javascript
let mevsim = "Yaz";
switch (mevsim) {
    case "Kış":
        console.log("Aylar: Aralık, Ocak, Şubat");
        break;
    case "İlkbahar":
        console.log("Aylar: Mart, Nisan, Mayıs");
        break;
    case "Yaz":
        console.log("Aylar: Haziran, Temmuz, Ağustos");
        break;
    case "Sonbahar":
        console.log("Aylar: Eylül, Ekim, Kasım");
        break;
    default:
        console.log("Geçersiz mevsim!");
}
```

---

### ALIŞTIRMA 25: Sıcaklık Sınıflandırma (switch)
**Problem:** Sıcaklık aralığına göre (0-10: "Soğuk", 11-20: "Ilıman", 21-30: "Sıcak", diğer: "Geçersiz") switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Sıcaklık: 15
Sonuç: Ilıman
```
**Çözüm:**
```javascript
let sicaklik = 15;
switch (true) {
    case (sicaklik >= 0 && sicaklik <= 10):
        console.log("Sonuç: Soğuk");
        break;
    case (sicaklik >= 11 && sicaklik <= 20):
        console.log("Sonuç: Ilıman");
        break;
    case (sicaklik >= 21 && sicaklik <= 30):
        console.log("Sonuç: Sıcak");
        break;
    default:
        console.log("Geçersiz sıcaklık!");
}
```

---

### ALIŞTIRMA 26: Sayı 100’den Büyük mü?
**Problem:** Girilen bir sayının 100’den büyük olup olmadığını if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Sayı: 120
Sonuç: 100’den büyük
```
**Çözüm:**
```javascript
let sayi = 120;
if (sayi > 100) {
    console.log("Sonuç: 100’den büyük");
} else {
    console.log("Sonuç: 100 veya daha küçük");
}
```

---

### ALIŞTIRMA 27: Hafta Günü mü Hafta Sonu mu? (if-else)
**Problem:** 1-7 arası gün numarasına göre hafta içi mi hafta sonu mu olduğunu if-else ile yazdırın.

**Beklenen Çıktı:**
```
Gün: 2
Sonuç: Hafta içi
```
**Çözüm:**
```javascript
let gun = 2;
if (gun === 6 || gun === 7) {
    console.log("Sonuç: Hafta sonu");
} else if (gun >= 1 && gun <= 5) {
    console.log("Sonuç: Hafta içi");
} else {
    console.log("Geçersiz gün!");
}
```

---

### ALIŞTIRMA 28: Sıcaklık Negatif mi? (switch)
**Problem:** Sıcaklık değeri negatifse "Negatif", 0 ise "Nötr", pozitifse "Pozitif" yazdırın (switch-case ile).

**Beklenen Çıktı:**
```
Sıcaklık: -3
Sonuç: Negatif
```
**Çözüm:**
```javascript
let sicaklik = -3;
switch (true) {
    case (sicaklik < 0):
        console.log("Sonuç: Negatif");
        break;
    case (sicaklik === 0):
        console.log("Sonuç: Nötr");
        break;
    case (sicaklik > 0):
        console.log("Sonuç: Pozitif");
        break;
}
```

---

### ALIŞTIRMA 29: Sayı 3’e ve 5’e Bölünebilir mi?
**Problem:** Bir sayının hem 3’e hem 5’e bölünüp bölünmediğini if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Sayı: 15
Sonuç: Hem 3’e hem 5’e bölünebilir
```
**Çözüm:**
```javascript
let sayi = 15;
if (sayi % 3 === 0 && sayi % 5 === 0) {
    console.log("Sonuç: Hem 3’e hem 5’e bölünebilir");
} else {
    console.log("Sonuç: Bölünemez");
}
```

---

### ALIŞTIRMA 30: Renk Anlamı (switch)
**Problem:** Trafik ışığı rengini girin, anlamını switch-case ile yazdırın. ("Kırmızı": Dur, "Sarı": Hazır ol, "Yeşil": Geç)

**Beklenen Çıktı:**
```
Renk: Sarı
Anlam: Hazır ol
```
**Çözüm:**
```javascript
let renk = "Sarı";
switch (renk) {
    case "Kırmızı":
        console.log("Anlam: Dur");
        break;
    case "Sarı":
        console.log("Anlam: Hazır ol");
        break;
    case "Yeşil":
        console.log("Anlam: Geç");
        break;
    default:
        console.log("Geçersiz renk!");
}
```

---

### ALIŞTIRMA 31: Sayı Pozitif Tek mi?
**Problem:** Bir sayının pozitif ve tek olup olmadığını if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Sayı: 9
Sonuç: Pozitif tek sayı
```
**Çözüm:**
```javascript
let sayi = 9;
if (sayi > 0 && sayi % 2 === 1) {
    console.log("Sonuç: Pozitif tek sayı");
} else {
    console.log("Sonuç: Değil");
}
```

---

### ALIŞTIRMA 32: Gün İsmi Kısaltması (switch)
**Problem:** Gün numarasına göre (1-7) günün ilk üç harfini switch-case ile yazdırın.

**Beklenen Çıktı:**
```
Gün: 4
Kısaltma: Per
```
**Çözüm:**
```javascript
let gun = 4;
switch (gun) {
    case 1:
        console.log("Kısaltma: Paz");
        break;
    case 2:
        console.log("Kısaltma: Sal");
        break;
    case 3:
        console.log("Kısaltma: Çar");
        break;
    case 4:
        console.log("Kısaltma: Per");
        break;
    case 5:
        console.log("Kısaltma: Cum");
        break;
    case 6:
        console.log("Kısaltma: Cum");
        break;
    case 7:
        console.log("Kısaltma: Paz");
        break;
    default:
        console.log("Geçersiz gün!");
}
```

---

### ALIŞTIRMA 33: Sayı Negatif mi Sıfır mı Pozitif mi? (if-else)
**Problem:** Bir sayının negatif, sıfır veya pozitif olduğunu if-else ile yazdırın.

**Beklenen Çıktı:**
```
Sayı: 0
Sonuç: Sıfır
```
**Çözüm:**
```javascript
let sayi = 0;
if (sayi < 0) {
    console.log("Sonuç: Negatif");
} else if (sayi === 0) {
    console.log("Sonuç: Sıfır");
} else {
    console.log("Sonuç: Pozitif");
}
```

---

### ALIŞTIRMA 34: Harf Büyük mü Küçük mü? (if-else)
**Problem:** Girilen harfin büyük harf mi küçük harf mi olduğunu if-else ile kontrol edin.

**Beklenen Çıktı:**
```
Harf: A
Sonuç: Büyük harf
```
**Çözüm:**
```javascript
let harf = "A";
if (harf === harf.toUpperCase()) {
    console.log("Sonuç: Büyük harf");
} else {
    console.log("Sonuç: Küçük harf");
}
```

---

### ALIŞTIRMA 35: Mevsim Sıcaklık Tahmini (switch)
**Problem:** Mevsime göre ortalama sıcaklığı switch-case ile yazdırın. ("Kış": 5, "İlkbahar": 15, "Yaz": 25, "Sonbahar": 10)

**Beklenen Çıktı:**
```
Mevsim: Sonbahar
Ortalama sıcaklık: 10
```
**Çözüm:**
```javascript
let mevsim = "Sonbahar";
switch (mevsim) {
    case "Kış":
        console.log("Ortalama sıcaklık: 5");
        break;
    case "İlkbahar":
        console.log("Ortalama sıcaklık: 15");
        break;
    case "Yaz":
        console.log("Ortalama sıcaklık: 25");
        break;
    case "Sonbahar":
        console.log("Ortalama sıcaklık: 10");
        break;
    default:
        console.log("Geçersiz mevsim!");
}
```
