# JavaScript Object Fonksiyonları - Dictionary İşlemleri

> **Not:** JavaScript'te "dictionary" kavramı yoktur. Bunun yerine **Object** kullanılır. Bu ders notunda Object'lerle nasıl çalışılacağı anlatılmaktadır.

## İçindekiler
- [Object Nedir?](#object-nedir)
- [Object Oluşturma](#object-oluşturma)
- [Object.keys()](#objectkeys)
- [Object.values()](#objectvalues)
- [Object.entries()](#objectentries)
- [Object.assign()](#objectassign)
- [Object.hasOwnProperty()](#objecthasownproperty)
- [Object Destructuring](#object-destructuring)
- [Object İterasyon](#object-iterasyon)
- [Pratik Örnekler](#pratik-örnekler)

---

## Object Nedir?

Object, anahtar-değer (key-value) çiftlerini saklayan veri yapısıdır. Diğer dillerdeki dictionary, map veya hash table'a benzer.

```javascript
// Temel object tanımlama
const kisi = {
    isim: "Ali",
    yas: 25,
    sehir: "İstanbul"
};

console.log(kisi.isim); // "Ali"
console.log(kisi["yas"]); // 25
```

---

## Object Oluşturma

### Farklı Yöntemler

```javascript
// 1. Object literal
const ogrenci = {
    isim: "Mehmet",
    not: 85,
    ders: "Matematik"
};

// 2. new Object()
const urun = new Object();
urun.isim = "Laptop";
urun.fiyat = 5000;
urun.marka = "Dell";

// 3. Object.create()
const kisi = Object.create(null);
kisi.isim = "Ayşe";
kisi.yas = 30;

// 4. Constructor function
function Araba(marka, model, yil) {
    this.marka = marka;
    this.model = model;
    this.yil = yil;
}
const araba = new Araba("Toyota", "Corolla", 2020);
```

---

## Object.keys()

Object'in tüm anahtarlarını (key) dizi olarak döndürür.

```javascript
const ogrenci = {
    isim: "Ali",
    yas: 20,
    not: 85,
    sehir: "Ankara"
};

const anahtarlar = Object.keys(ogrenci);
console.log(anahtarlar); // ["isim", "yas", "not", "sehir"]

// Anahtar sayısını bulma
console.log(Object.keys(ogrenci).length); // 4

// Anahtarları döngüde kullanma
Object.keys(ogrenci).forEach(anahtar => {
    console.log(`${anahtar}: ${ogrenci[anahtar]}`);
});
// isim: Ali
// yas: 20
// not: 85
// sehir: Ankara
```

---

## Object.values()

Object'in tüm değerlerini (value) dizi olarak döndürür.

```javascript
const urun = {
    isim: "Telefon",
    fiyat: 3000,
    marka: "Samsung",
    renk: "Siyah"
};

const degerler = Object.values(urun);
console.log(degerler); // ["Telefon", 3000, "Samsung", "Siyah"]

// Sayısal değerleri toplama
const fiyatlar = {
    laptop: 5000,
    mouse: 50,
    klavye: 200
};

const toplamFiyat = Object.values(fiyatlar)
    .reduce((toplam, fiyat) => toplam + fiyat, 0);
console.log(toplamFiyat); // 5250
```

---

## Object.entries()

Object'i [anahtar, değer] çiftleri dizisi olarak döndürür.

```javascript
const kisi = {
    isim: "Fatma",
    yas: 28,
    meslek: "Mühendis"
};

const ciftler = Object.entries(kisi);
console.log(ciftler);
// [["isim", "Fatma"], ["yas", 28], ["meslek", "Mühendis"]]

// Destructuring ile kullanma
Object.entries(kisi).forEach(([anahtar, deger]) => {
    console.log(`${anahtar} -> ${deger}`);
});
// isim -> Fatma
// yas -> 28
// meslek -> Mühendis

// Object'i Map'e çevirme
const map = new Map(Object.entries(kisi));
console.log(map.get("isim")); // "Fatma"
```

---

## Object.assign()

Bir veya daha fazla object'i birleştirme.

```javascript
// Temel kullanım
const hedef = { a: 1, b: 2 };
const kaynak = { b: 3, c: 4 };

const sonuc = Object.assign(hedef, kaynak);
console.log(sonuc); // { a: 1, b: 3, c: 4 }
console.log(hedef); // { a: 1, b: 3, c: 4 } (hedef değişti!)

// Yeni object oluşturma (hedefi değiştirmeme)
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const yeniObj = Object.assign({}, obj1, obj2, obj3);
console.log(yeniObj); // { a: 1, b: 2, c: 3 }

// Spread operator alternatifi (modern yöntem)
const birlesik = { ...obj1, ...obj2, ...obj3 };
console.log(birlesik); // { a: 1, b: 2, c: 3 }
```

---

## Object.hasOwnProperty()

Object'in belirli bir özelliği olup olmadığını kontrol eder.

```javascript
const araba = {
    marka: "BMW",
    model: "X5",
    yil: 2021
};

console.log(araba.hasOwnProperty("marka")); // true
console.log(araba.hasOwnProperty("renk")); // false

// Modern alternatif: in operator
console.log("marka" in araba); // true
console.log("renk" in araba); // false

// Güvenli özellik kontrolü
function ozellikVarMi(obj, ozellik) {
    return Object.prototype.hasOwnProperty.call(obj, ozellik);
}

console.log(ozellikVarMi(araba, "marka")); // true
```

---

## Object Destructuring

Object'ten değerleri çıkarma.

```javascript
const ogrenci = {
    isim: "Zeynep",
    yas: 22,
    not: 90,
    sehir: "İzmir"
};

// Temel destructuring
const { isim, yas } = ogrenci;
console.log(isim); // "Zeynep"
console.log(yas); // 22

// Yeni isim verme
const { isim: ogrenciIsmi, not: ogrenciNotu } = ogrenci;
console.log(ogrenciIsmi); // "Zeynep"
console.log(ogrenciNotu); // 90

// Varsayılan değer
const { isim: ad, bolum = "Belirtilmemiş" } = ogrenci;
console.log(ad); // "Zeynep"
console.log(bolum); // "Belirtilmemiş"

// Fonksiyon parametrelerinde
function ogrenciBilgisi({ isim, yas, not }) {
    return `${isim} (${yas} yaş) - Not: ${not}`;
}

console.log(ogrenciBilgisi(ogrenci)); // "Zeynep (22 yaş) - Not: 90"
```

---

## Object İterasyon

Object üzerinde döngü kurma yöntemleri.

```javascript
const urunler = {
    laptop: 5000,
    mouse: 50,
    klavye: 200,
    monitor: 1500
};

// 1. for...in döngüsü
for (let urun in urunler) {
    console.log(`${urun}: ${urunler[urun]} TL`);
}

// 2. Object.keys() ile
Object.keys(urunler).forEach(urun => {
    console.log(`${urun}: ${urunler[urun]} TL`);
});

// 3. Object.entries() ile
Object.entries(urunler).forEach(([urun, fiyat]) => {
    console.log(`${urun}: ${fiyat} TL`);
});

// 4. Object.values() ile (sadece değerler)
Object.values(urunler).forEach(fiyat => {
    console.log(`Fiyat: ${fiyat} TL`);
});
```

---

## Pratik Örnekler

### Örnek 1: Object Filtreleme

```javascript
const ogrenciler = {
    ali: { yas: 20, not: 85 },
    veli: { yas: 19, not: 45 },
    ayse: { yas: 21, not: 92 },
    mehmet: { yas: 18, not: 78 }
};

// Geçen öğrencileri filtreleme
const gecenler = Object.entries(ogrenciler)
    .filter(([isim, bilgi]) => bilgi.not >= 60)
    .reduce((sonuc, [isim, bilgi]) => {
        sonuc[isim] = bilgi;
        return sonuc;
    }, {});

console.log(gecenler);
// { ali: { yas: 20, not: 85 }, ayse: { yas: 21, not: 92 }, mehmet: { yas: 18, not: 78 } }
```

### Örnek 2: Object Dönüştürme

```javascript
const fiyatlar = {
    laptop: 5000,
    mouse: 50,
    klavye: 200
};

// Fiyatlara KDV ekleme (%18)
const kdvliFiyatlar = Object.entries(fiyatlar)
    .reduce((sonuc, [urun, fiyat]) => {
        sonuc[urun] = Math.round(fiyat * 1.18);
        return sonuc;
    }, {});

console.log(kdvliFiyatlar);
// { laptop: 5900, mouse: 59, klavye: 236 }
```

### Örnek 3: Object Birleştirme

```javascript
const varsayilanAyarlar = {
    tema: "açık",
    dil: "tr",
    bildirim: true
};

const kullaniciAyarlari = {
    tema: "koyu",
    ses: false
};

// Ayarları birleştirme
const finalAyarlar = { ...varsayilanAyarlar, ...kullaniciAyarlari };
console.log(finalAyarlar);
// { tema: "koyu", dil: "tr", bildirim: true, ses: false }
```

### Örnek 4: Object Validasyon

```javascript
function kullaniciDogrula(kullanici) {
    const gerekliAlanlar = ["isim", "email", "yas"];
    
    const eksikAlanlar = gerekliAlanlar.filter(alan => 
        !kullanici.hasOwnProperty(alan) || kullanici[alan] === ""
    );
    
    if (eksikAlanlar.length > 0) {
        return {
            gecerli: false,
            hatalar: `Eksik alanlar: ${eksikAlanlar.join(", ")}`
        };
    }
    
    return { gecerli: true };
}

const kullanici1 = { isim: "Ali", email: "ali@test.com", yas: 25 };
const kullanici2 = { isim: "Veli", yas: 30 };

console.log(kullaniciDogrula(kullanici1)); // { gecerli: true }
console.log(kullaniciDogrula(kullanici2)); // { gecerli: false, hatalar: "Eksik alanlar: email" }
```

---

## Önemli Notlar

1. **Object.keys(), Object.values(), Object.entries()** yeni dizi döndürür
2. **Object.assign()** hedef object'i değiştirir
3. **Spread operator (...)** modern ve tercih edilen yöntem
4. **for...in** döngüsü prototype chain'deki özellikleri de gezer
5. **hasOwnProperty()** sadece kendi özelliklerini kontrol eder
6. **Destructuring** kodu daha okunabilir yapar
7. **Object key'leri her zaman string'dir**

---

## Pratik Alıştırmalar

```javascript
// Alıştırma: Aşağıdaki object ile çalışın
const magaza = {
    urunler: {
        laptop: { fiyat: 5000, stok: 10, kategori: "elektronik" },
        gömlek: { fiyat: 100, stok: 25, kategori: "giyim" },
        mouse: { fiyat: 50, stok: 50, kategori: "elektronik" },
        pantolon: { fiyat: 200, stok: 15, kategori: "giyim" }
    },
    indirim: 0.1 // %10 indirim
};

// Görevler:
// 1. Tüm ürün isimlerini listeleyin
// 2. Elektronik ürünleri filtreleyin
// 3. Toplam stok sayısını hesaplayın
// 4. İndirimli fiyatları hesaplayın
// 5. En pahalı ürünü bulun
// 6. Stoku 20'den az olan ürünleri listeleyin
```

Bu ders notu ile JavaScript Object işlemlerini öğrenebilir ve dictionary benzeri veri yapılarıyla çalışabilirsiniz!