# JavaScript Koşullu İfadeler: if ve switch

## 📌 Giriş
Bu notta JavaScript'te karar yapıları olan `if` ve `switch` ifadelerini öğreneceğiz. Bu yapılar, programın belirli koşullara göre farklı yollar izlemesini sağlar. Konu sonunda 25 adet pratik alıştırma bulacaksınız.

---

## 🔍 1. if-else Koşullu İfadesi

### 1.1 Temel Kullanım
`if` ifadesi, bir koşulun doğru olup olmadığını kontrol eder. Eğer koşul doğruysa, ilgili kod bloğu çalışır.

```javascript
if (koşul) {
    // Koşul doğruysa çalışacak kodlar
}
```

### 1.2 if-else Yapısı
Bir koşul doğru değilse, `else` bloğu çalışır.

```javascript
let yas = 18;
if (yas >= 18) {
    console.log("Reşitsiniz.");
} else {
    console.log("Reşit değilsiniz.");
}
```

### 1.3 else if ile Çoklu Koşullar
Birden fazla durumu kontrol etmek için `else if` kullanılır.

```javascript
let not = 75;
if (not >= 90) {
    console.log("Pekiyi");
} else if (not >= 70) {
    console.log("İyi");
} else if (not >= 50) {
    console.log("Orta");
} else {
    console.log("Kaldı");
}
```

### 1.4 İç İçe if Kullanımı
Bir if bloğu içinde başka bir if kullanılabilir.

```javascript
let kullanici = "admin";
let sifre = "1234";

if (kullanici === "admin") {
    if (sifre === "1234") {
        console.log("Giriş başarılı!");
    } else {
        console.log("Şifre yanlış!");
    }
} else {
    console.log("Kullanıcı bulunamadı!");
}
```

---

## 🌟 2. switch-case Koşullu İfadesi

### 2.1 Temel Kullanım
`switch` ifadesi, bir değişkenin değerine göre farklı kod bloklarını çalıştırır. Özellikle çok sayıda eşitlik kontrolü yapılacaksa tercih edilir.

```javascript
let gun = 3;
switch (gun) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Geçersiz gün numarası!");
}
```

### 2.2 break ve default Kullanımı
- `break`: Her case'den sonra yazılır, aksi halde diğer case'ler de çalışır (fall-through).
- `default`: Hiçbir case eşleşmezse çalışır.

### 2.3 Birden Fazla Case'i Birleştirme
Aynı kodun birden fazla değer için çalışmasını istiyorsanız, case'leri alt alta yazabilirsiniz.

```javascript
let harf = "a";
switch (harf) {
    case "a":
    case "e":
    case "ı":
    case "i":
    case "o":
    case "ö":
    case "u":
    case "ü":
        console.log("Sesli harf");
        break;
    default:
        console.log("Sessiz harf");
}
```

---

## 🧪 3. if ve switch ile 25 Pratik Alıştırma

---

## 🎯 4. Özet ve İpuçları
- `if` ile her türlü koşul kontrol edilebilir, aralıklar için uygundur.
- `switch` eşitlik kontrolleri için idealdir, çoklu sabit değerlerde kodu sadeleştirir.
- `break` kullanmazsanız, diğer case'ler de çalışır.
- Koşul ifadelerinde parantez ve süslü parantezlere dikkat edin.

---

## 🏆 Ev Ödevi
1. Kullanıcıdan alınan bir sayının pozitif, negatif veya sıfır olup olmadığını if-else ile kontrol edin.
2. switch-case ile ay numarasına göre ay adını yazdıran kodu yazın.
3. Bir öğrencinin vize ve final notunu alıp, ortalamasına göre geçti/kaldı bilgisini if-else ile yazdırın (geçme notu 60).

**Başarılar! 🎉** 