### Fonksiyonlar ile İlgili Sorular

21. Parametre olarak iki sayı alıp toplamını döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 5));

// Arrow fonksiyon
const toplaArrow = (a, b) => a + b;
console.log(toplaArrow(3, 5));
```

22. Bir dizideki en uzun stringi döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function enUzunString(dizi) {
  let enUzun = "";
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "string" && dizi[i].length > enUzun.length) {
      enUzun = dizi[i];
    }
    i++;
  }
  return enUzun;
}
console.log(enUzunString(["elma", "armut", "karpuz", "muz"]));

// Arrow fonksiyon
const enUzunStringArrow = (dizi) => {
  let enUzun = "";
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "string" && dizi[i].length > enUzun.length) {
      enUzun = dizi[i];
    }
    i++;
  }
  return enUzun;
};
console.log(enUzunStringArrow(["elma", "armut", "karpuz", "muz"]));
```

23. Bir dizideki tüm elemanları büyük harfe çeviren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function buyukHarfYap(dizi) {
  let yeniDizi = [];
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "string") {
      yeniDizi.push(dizi[i].toUpperCase());
    } else {
      yeniDizi.push(dizi[i]);
    }
    i++;
  }
  return yeniDizi;
}
console.log(buyukHarfYap(["elma", "armut", 5, "muz"]));

// Arrow fonksiyon
const buyukHarfYapArrow = (dizi) => {
  let yeniDizi = [];
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "string") {
      yeniDizi.push(dizi[i].toUpperCase());
    } else {
      yeniDizi.push(dizi[i]);
    }
    i++;
  }
  return yeniDizi;
};
console.log(buyukHarfYapArrow(["elma", "armut", 5, "muz"]));
```

24. Bir dizideki sayıların çarpımını bulan bir fonksiyon yazın.
```js
// Klasik fonksiyon
function carpim(dizi) {
  let sonuc = 1;
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "number") {
      sonuc *= dizi[i];
    }
    i++;
  }
  return sonuc;
}
console.log(carpim([2, 3, 4]));

// Arrow fonksiyon
const carpimArrow = (dizi) => {
  let sonuc = 1;
  let i = 0;
  while (i < dizi.length) {
    if (typeof dizi[i] === "number") {
      sonuc *= dizi[i];
    }
    i++;
  }
  return sonuc;
};
console.log(carpimArrow([2, 3, 4]));
```

25. Bir dizideki tüm elemanları birleştirip tek bir string döndüren fonksiyon yazın.
```js
// Klasik fonksiyon
function birlestir(dizi) {
  let sonuc = "";
  let i = 0;
  while (i < dizi.length) {
    sonuc += dizi[i];
    i++;
  }
  return sonuc;
}
console.log(birlestir(["Merhaba", " ", "Dünya", "!"]));

// Arrow fonksiyon
const birlestirArrow = (dizi) => {
  let sonuc = "";
  let i = 0;
  while (i < dizi.length) {
    sonuc += dizi[i];
    i++;
  }
  return sonuc;
};
console.log(birlestirArrow(["Merhaba", " ", "Dünya", "!"]));
```

26. Bir dizideki çift sayıların ortalamasını döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function ciftOrtalama(dizi) {
  let toplam = 0;
  let adet = 0;
  let i = 0;
  while (i < dizi.length) {
    if (dizi[i] % 2 === 0) {
      toplam += dizi[i];
      adet++;
    }
    i++;
  }
  return adet > 0 ? toplam / adet : 0;
}
console.log(ciftOrtalama([2, 3, 4, 5, 6]));

// Arrow fonksiyon
const ciftOrtalamaArrow = (dizi) => {
  let toplam = 0;
  let adet = 0;
  let i = 0;
  while (i < dizi.length) {
    if (dizi[i] % 2 === 0) {
      toplam += dizi[i];
      adet++;
    }
    i++;
  }
  return adet > 0 ? toplam / adet : 0;
};
console.log(ciftOrtalamaArrow([2, 3, 4, 5, 6]));
```

27. Bir dizideki elemanları belirli bir değerden büyük olanları döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function buyukleriBul(dizi, deger) {
  let sonuc = [];
  let i = 0;
  while (i < dizi.length) {
    if (dizi[i] > deger) {
      sonuc.push(dizi[i]);
    }
    i++;
  }
  return sonuc;
}
console.log(buyukleriBul([3, 7, 2, 9, 5], 5));

// Arrow fonksiyon
const buyukleriBulArrow = (dizi, deger) => {
  let sonuc = [];
  let i = 0;
  while (i < dizi.length) {
    if (dizi[i] > deger) {
      sonuc.push(dizi[i]);
    }
    i++;
  }
  return sonuc;
};
console.log(buyukleriBulArrow([3, 7, 2, 9, 5], 5));
```

28. Bir dizideki tüm elemanları ekrana yazdıran bir fonksiyon yazın (while ile).
```js
// Klasik fonksiyon
function yazdir(dizi) {
  let i = 0;
  while (i < dizi.length) {
    console.log(dizi[i]);
    i++;
  }
}
yazdir(["elma", "armut", "muz"]);

// Arrow fonksiyon
const yazdirArrow = (dizi) => {
  let i = 0;
  while (i < dizi.length) {
    console.log(dizi[i]);
    i++;
  }
};
yazdirArrow(["elma", "armut", "muz"]);
```

29. Bir dizideki ilk ve son elemanı döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function ilkSon(dizi) {
  if (dizi.length === 0) return [];
  return [dizi[0], dizi[dizi.length - 1]];
}
console.log(ilkSon([10, 20, 30, 40]));

// Arrow fonksiyon
const ilkSonArrow = (dizi) => {
  if (dizi.length === 0) return [];
  return [dizi[0], dizi[dizi.length - 1]];
};
console.log(ilkSonArrow([10, 20, 30, 40]));
```

30. Bir dizideki elemanların karesini yeni bir dizi olarak döndüren bir fonksiyon yazın.
```js
// Klasik fonksiyon
function kareler(dizi) {
  let yeniDizi = [];
  let i = 0;
  while (i < dizi.length) {
    yeniDizi.push(dizi[i] * dizi[i]);
    i++;
  }
  return yeniDizi;
}
console.log(kareler([2, 3, 4]));

// Arrow fonksiyon
const karelerArrow = (dizi) => {
  let yeniDizi = [];
  let i = 0;
  while (i < dizi.length) {
    yeniDizi.push(dizi[i] * dizi[i]);
    i++;
  }
  return yeniDizi;
};
console.log(karelerArrow([2, 3, 4]));
```
