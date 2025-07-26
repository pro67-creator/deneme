# JavaScript Temelleri - Algoritmik Kodlama Alıştırmaları

## 📋 Alıştırma Bilgileri
- **Konu**: JavaScript Temelleri ile Algoritmik Problem Çözme
- **Kullanılacak Kavramlar**: Variables, Operators, Data Types
- **Toplam Alıştırma**: 25 problem
- **Zorluk Seviyeleri**: Kolay (1-8), Orta (9-16), Zor (17-25)

---

## 🟢 KOLAY SEVİYE (1-8)

### ALIŞTıRMA 1: Üçgen Alan Hesaplama
**Problem**: Taban uzunluğu 8 birim, yüksekliği 5 birim olan üçgenin alanını hesaplayın.
**Formül**: Alan = (taban * yükseklik) / 2

**Beklenen Çıktı**:
```
Taban: 8
Yükseklik: 5
Alan: 20
```

**Çözüm**:
```javascript
let taban = 8;
let yukseklik = 5;
let alan = (taban * yukseklik) / 2;

console.log("Taban: " + taban);
console.log("Yükseklik: " + yukseklik);
console.log("Alan: " + alan);
```

---

### ALIŞTıRMA 2: Dikdörtgen Çevre Hesaplama
**Problem**: Uzun kenarı 12 birim, kısa kenarı 7 birim olan dikdörtgenin çevresini hesaplayın.
**Formül**: Çevre = 2 * (uzun kenar + kısa kenar)

**Beklenen Çıktı**:
```
Uzun kenar: 12
Kısa kenar: 7
Çevre: 38
```

---

### ALIŞTıRMA 3: Yaş Hesaplama
**Problem**: 2024 yılında doğum yılı 1998 olan bir kişinin yaşını hesaplayın.

**Beklenen Çıktı**:
```
Doğum yılı: 1998
Şu anki yıl: 2024
Yaş: 26
```

---

### ALIŞTıRMA 4: Sıcaklık Dönüşümü (Celsius to Fahrenheit)
**Problem**: 25°C sıcaklığı Fahrenheit'e dönüştürün.
**Formül**: F = (C * 9/5) + 32

**Beklenen Çıktı**:
```
Celsius: 25
Fahrenheit: 77
```

---

### ALIŞTıRMA 5: Vize-Final Ortalama
**Problem**: Vize notu 75, final notu 85 olan öğrencinin ortalamasını hesaplayın.
**Formül**: Ortalama = (vize * 0.4) + (final * 0.6)

**Beklenen Çıktı**:
```
Vize: 75
Final: 85
Ortalama: 81
```

---

### ALIŞTıRMA 6: Daire Alan Hesaplama
**Problem**: Yarıçapı 6 birim olan dairenin alanını hesaplayın.
**Formül**: Alan = π * r²  (π = 3.14)

**Beklenen Çıktı**:
```
Yarıçap: 6
Alan: 113.04
```

---

### ALIŞTıRMA 7: Basit Faiz Hesaplama
**Problem**: 1000 TL anaparayı %5 faiz oranıyla 3 yıl süreyle basit faizle yatırdığınızda toplam tutarı hesaplayın.
**Formül**: Toplam = Anapara + (Anapara * Faiz Oranı * Süre)

**Beklenen Çıktı**:
```
Anapara: 1000
Faiz Oranı: 0.05
Süre: 3
Toplam: 1150
```

---

### ALIŞTıRMA 8: Kare Alan ve Çevre
**Problem**: Kenar uzunluğu 9 birim olan karenin alan ve çevresini hesaplayın.

**Beklenen Çıktı**:
```
Kenar: 9
Alan: 81
Çevre: 36
```

---

## 🟡 ORTA SEVİYE (9-16)

### ALIŞTıRMA 9: İki Sayının Karşılaştırması
**Problem**: İki sayıyı karşılaştırın ve hangi sayının büyük olduğunu belirleyin.

**Örnek Giriş**: sayi1 = 45, sayi2 = 38

**Beklenen Çıktı**:
```javascript
let sayi1 = 45;
let sayi2 = 38;
let buyukSayi = sayi1 > sayi2 ? sayi1 : sayi2;
let kucukSayi = sayi1 < sayi2 ? sayi1 : sayi2;

console.log("Birinci sayı: " + sayi1);
console.log("İkinci sayı: " + sayi2);
console.log("Büyük sayı: " + buyukSayi);
console.log("Küçük sayı: " + kucukSayi);
```

---

### ALIŞTıRMA 10: BMI (Vücut Kitle İndeksi) Hesaplama
**Problem**: Boy 175 cm, kilo 70 kg olan kişinin BMI'sini hesaplayın.
**Formül**: BMI = kilo / (boy_metre²)

**Beklenen Çıktı**:
```
Boy: 175 cm
Kilo: 70 kg
BMI: 22.86
```

---

### ALIŞTıRMA 11: Ürün Fiyat Hesaplama
**Problem**: 150 TL fiyatındaki üründe %18 KDV var. KDV'siz fiyatı ve KDV tutarını hesaplayın.
**Formül**: KDV'siz fiyat = KDV'li fiyat / 1.18

**Beklenen Çıktı**:
```
KDV'li fiyat: 150
KDV'siz fiyat: 127.12
KDV tutarı: 22.88
```

---

### ALIŞTıRMA 12: Hız-Mesafe-Zaman Hesaplama
**Problem**: 120 km mesafeyi 90 km/h hızla giden arabanın süresini hesaplayın.
**Formül**: Süre = Mesafe / Hız

**Beklenen Çıktı**:
```
Mesafe: 120 km
Hız: 90 km/h
Süre: 1.33 saat
```

---

### ALIŞTıRMA 13: Çember Çevre Hesaplama
**Problem**: Yarıçapı 8 birim olan çemberin çevresini hesaplayın.
**Formül**: Çevre = 2 * π * r  (π = 3.14)

**Beklenen Çıktı**:
```
Yarıçap: 8
Çevre: 50.24
```

---

### ALIŞTıRMA 14: Elektrik Faturası Hesaplama
**Problem**: 250 kWh elektrik tüketimi için fatura hesaplayın. İlk 100 kWh 0.50 TL, kalanı 0.75 TL.

**Beklenen Çıktı**:
```
Tüketim: 250 kWh
İlk 100 kWh: 50 TL
Kalan 150 kWh: 112.5 TL
Toplam: 162.5 TL
```

---

### ALIŞTıRMA 15: Üçgen Çevre Hesaplama
**Problem**: Kenar uzunlukları 3, 4, 5 birim olan üçgenin çevresini hesaplayın.

**Beklenen Çıktı**:
```
Kenar 1: 3
Kenar 2: 4
Kenar 3: 5
Çevre: 12
```

---

### ALIŞTıRMA 16: Saniyeyi Saat-Dakika-Saniye'ye Çevirme
**Problem**: 7325 saniyeyi saat, dakika, saniye formatına çevirin.

**Beklenen Çıktı**:
```
Toplam saniye: 7325
Saat: 2
Dakika: 2
Saniye: 5
```

**Çözüm**:
```javascript
let toplamSaniye = 7325;
let saat = Math.floor(toplamSaniye / 3600);
let kalanSaniye = toplamSaniye % 3600;
let dakika = Math.floor(kalanSaniye / 60);
let saniye = kalanSaniye % 60;

console.log("Toplam saniye: " + toplamSaniye);
console.log("Saat: " + saat);
console.log("Dakika: " + dakika);
console.log("Saniye: " + saniye);
```

---

## 🔴 ZOR SEVİYE (17-25)

### ALIŞTıRMA 17: Bileşik Faiz Hesaplama
**Problem**: 5000 TL'yi %8 faizle 4 yıl bileşik faizle yatırdığınızda toplam tutarı hesaplayın.
**Formül**: Toplam = Anapara * (1 + faiz)^yıl

**Beklenen Çıktı**:
```
Anapara: 5000
Faiz: 0.08
Yıl: 4
Toplam: 6802.44
```

---

### ALIŞTıRMA 18: Piramit Hacim Hesaplama
**Problem**: Taban alanı 36 birim², yüksekliği 10 birim olan piramidin hacmini hesaplayın.
**Formül**: Hacim = (Taban Alanı * Yükseklik) / 3

**Beklenen Çıktı**:
```
Taban alanı: 36
Yükseklik: 10
Hacim: 120
```

---

### ALIŞTıRMA 19: Yakıt Tüketimi Hesaplama
**Problem**: 450 km yol için 35 litre yakıt harcayan arabanın 100 km'deki yakıt tüketimini hesaplayın.

**Beklenen Çıktı**:
```
Mesafe: 450 km
Yakıt: 35 litre
100 km tüketim: 7.78 litre
```

---

### ALIŞTıRMA 20: İndirim Hesaplama
**Problem**: 280 TL'lik üründe %25 indirim var. İndirim sonrası fiyat 200 TL'nin üzerindeyse %5 ek indirim uygulanacak.

**Beklenen Çıktı**:
```
Orijinal fiyat: 280
İlk indirim: 70
İlk indirim sonrası: 210
Ek indirim: 10.5
Final fiyat: 199.5
```

---

### ALIŞTıRMA 21: Pisagor Teoremi
**Problem**: Dik kenarları 8 ve 15 birim olan dik üçgenin hipotenüsünü hesaplayın.
**Formül**: c² = a² + b²

**Beklenen Çıktı**:
```
Dik kenar 1: 8
Dik kenar 2: 15
Hipotenüs: 17
```

---

### ALIŞTıRMA 22: Maaş Hesaplama
**Problem**: Brüt maaşı 8000 TL olan çalışanın net maaşını hesaplayın.
- SGK kesintisi: %14
- Gelir vergisi: %15
- Damga vergisi: %0.75

**Beklenen Çıktı**:
```
Brüt maaş: 8000
SGK kesintisi: 1120
Gelir vergisi: 1200
Damga vergisi: 60
Net maaş: 5620
```

---

### ALIŞTıRMA 23: Küre Hacim ve Yüzey Alanı
**Problem**: Yarıçapı 5 birim olan kürenin hacim ve yüzey alanını hesaplayın.
**Formül**: Hacim = (4/3) * π * r³, Yüzey = 4 * π * r²

**Beklenen Çıktı**:
```
Yarıçap: 5
Hacim: 523.33
Yüzey alanı: 314
```

---

### ALIŞTıRMA 24: Kur Hesaplama
**Problem**: 1000 USD'yi TL'ye çevirin. USD/TL kuru 28.50. İşlemde %2 komisyon var.

**Beklenen Çıktı**:
```
USD miktar: 1000
Kur: 28.5
Brüt TL: 28500
Komisyon: 570
Net TL: 27930
```

---

### ALIŞTıRMA 25: Prizma Hacim Hesaplama
**Problem**: Taban alanı 24 birim², yüksekliği 12 birim olan prizmanın hacmini hesaplayın. Prizmanın maliyeti birim hacim başına 15 TL.

**Beklenen Çıktı**:
```
Taban alanı: 24
Yükseklik: 12
Hacim: 288
Birim fiyat: 15
Toplam maliyet: 4320
```

---

## 🎯 BONUS ALIŞTıRMALAR

### BONUS 1: Çoklu İşlem Hesaplama
**Problem**: Aşağıdaki matematik işlemini adım adım hesaplayın:
((15 + 25) * 3) - (8 * 4) + (100 / 5)

**Beklenen Çıktı**:
```
Birinci işlem: 40
İkinci işlem: 120
Üçüncü işlem: 32
Dördüncü işlem: 20
Sonuç: 108
```

### BONUS 2: Karmaşık Geometri
**Problem**: Yarıçapı 6 birim olan dairenin içine çizilen kenar uzunluğu 8 birim olan karenin dışında kalan daire alanını hesaplayın.

**Beklenen Çıktı**:
```
Daire yarıçapı: 6
Daire alanı: 113.04
Kare kenarı: 8
Kare alanı: 64
Kalan alan: 49.04
```

---

## 💡 Çözüm Stratejileri

### 📌 Temel Kurallar:
1. **Değişken İsimlendirme**: Açıklayıcı isimler kullanın
2. **Operatör Önceliği**: Parantez kullanarak önceliği belirleyin
3. **Veri Tipi Kontrolü**: `typeof` operatörü ile kontrol edin
4. **Sonuç Formatı**: String birleştirme ile düzenli çıktı üretin

### 📌 Örnek Çözüm Yapısı:
```javascript
// 1. Değişkenleri tanımlayın
let deger1 = 10;
let deger2 = 5;

// 2. Hesaplama yapın
let sonuc = deger1 + deger2;

// 3. Sonucu yazdırın
console.log("Sonuç: " + sonuc);
```

### 📌 Yaygın Hatalar:
- Parantez kullanımını unutmak
- String concatenation yerine template literal kullanmaya çalışmak
- Değişken tiplerini karıştırmak
- Ondalık sayılarda yuvarlama yapmamak

**Canım Öğrencilerime başarılar! 🎉** 