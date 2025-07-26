### 1. Dizi oluştur ve yazdır

```js
let arr = [1, 2, 3];
console.log(arr);
```

---

### 2. Boş dizi oluştur

```js
let arr = [];
console.log(arr);
```

---

### 3. Diziye eleman ekle (`push`)

```js
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```

---

### 4. Dizi uzunluğu

```js
let arr = [10, 20, 30];
console.log(arr.length);
```

---

### 5. Elemanlara döngü ile eriş (`for`)

```js
let arr = [5, 10, 15];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

### 6. Elemanlara `for...of` ile eriş

```js
let arr = ["a", "b", "c"];
for (let item of arr) {
  console.log(item);
}
```

---

### 7. Eleman güncelleme

```js
let arr = [1, 2, 3];
arr[1] = 20;
console.log(arr); // [1, 20, 3]
```

---

### 8. Eleman silme (`pop`)

```js
let arr = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
```

---

### 9. Eleman silme (`shift`)

```js
let arr = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
```

---

### 10. Eleman başa ekleme (`unshift`)

```js
let arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

---

### 11. Dizi sıralama (`sort`)

```js
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]
```

---

### 12. Tersine çevir (`reverse`)

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---

### 13. Eleman var mı? (`includes`)

```js
let arr = [10, 20, 30];
console.log(arr.includes(20)); // true
```

---

### 14. Elemanın index'ini bul (`indexOf`)

```js
let arr = [5, 10, 15];
console.log(arr.indexOf(10)); // 1
```

---

### 15. Dizi kopyalama (`slice`)

```js
let arr = [1, 2, 3];
let yeni = arr.slice();
console.log(yeni);
```

---

### 16. Dizi birleştirme (`concat`)

```js
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
```

---

### 17. Belli aralıktaki elemanları alma (`slice`)

```js
let arr = [10, 20, 30, 40];
console.log(arr.slice(1, 3)); // [20, 30]
```



---

### 22. Dizi elemanlarını string'e çevirme (`join`)

```js
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // a-b-c
```

---

---

### 25. Dizi temizleme (boşaltma)

```js
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []
```

---


## 💡 15 Temel Seviye JavaScript Algoritma Sorusu ve Çözümü

---

### 1. **Bir sayının tek mi çift mi olduğunu bul**

```js
let sayi = 8;
if (sayi % 2 === 0) {
  console.log("Çift sayı");
} else {
  console.log("Tek sayı");
}
```

---

### 2. **1’den 10’a kadar sayıları yazdır**

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### 3. **Bir dizideki en büyük sayıyı bul**

```js
let dizi = [4, 10, 2, 99, 12];
let max = dizi[0];

for (let i = 1; i < dizi.length; i++) {
  if (dizi[i] > max) {
    max = dizi[i];
  }
}
console.log("En büyük sayı:", max);
```

---

### 4. **Bir dizinin elemanlarının toplamını bul**

```js
let sayilar = [5, 10, 15];
let toplam = 0;

for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}
console.log("Toplam:", toplam);
```

---

### 5. **Bir kelimeyi tersten yazdır**

```js
let kelime = "merhaba";
let ters = "";

for (let i = kelime.length - 1; i >= 0; i--) {
  ters += kelime[i];
}
console.log("Ters:", ters);
```

---

### 6. **Dizideki çift sayıları yazdır**

```js
let sayilar = [1, 2, 3, 4, 5];
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 2 === 0) {
    console.log(sayilar[i]);
  }
}
```

---

### 7. **Faktöriyel hesapla**

```js
let n = 5;
let faktoriyel = 1;

for (let i = 1; i <= n; i++) {
  faktoriyel *= i;
}
console.log("Faktöriyel:", faktoriyel);
```

---

### 8. **Bir dizide belirli bir sayı var mı kontrol et**

```js
let dizi = [3, 7, 9];
let aranan = 7;
let varMi = false;

for (let i = 0; i < dizi.length; i++) {
  if (dizi[i] === aranan) {
    varMi = true;
    break;
  }
}
console.log(varMi ? "Bulundu!" : "Yok.");
```

---

### 9. **Bir dizinin ortalamasını hesapla**

```js
let sayilar = [10, 20, 30, 40];
let toplam = 0;

for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}
let ortalama = toplam / sayilar.length;
console.log("Ortalama:", ortalama);
```

---

### 10. **0'dan N'e kadar çift sayıların toplamı**

```js
let N = 10;
let toplam = 0;

for (let i = 0; i <= N; i++) {
  if (i % 2 === 0) {
    toplam += i;
  }
}
console.log("Çift sayıların toplamı:", toplam);
```

---

### 11. **Bir kelimenin uzunluğunu yazdır**

```js
let kelime = "JavaScript";
console.log("Uzunluk:", kelime.length);
```

---

### 12. **Bir dizideki elemanları ters sırayla yazdır**

```js
let dizi = [1, 2, 3, 4];
for (let i = dizi.length - 1; i >= 0; i--) {
  console.log(dizi[i]);
}
```

---

### 13. **Girilen sayının asal olup olmadığını kontrol et**

```js
let sayi = 7;
let asal = true;

if (sayi <= 1) asal = false;

for (let i = 2; i < sayi; i++) {
  if (sayi % i === 0) {
    asal = false;
    break;
  }
}
console.log(asal ? "Asal" : "Asal değil");
```

---

### 14. **Fibonacci dizisi (n terimli)**

```js
let n = 6;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
```



