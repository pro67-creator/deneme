# JavaScript For, If ve Switch Kullanım Örnekleri (Dizisiz)

---

1. **1'den 10'a kadar olan sayıları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

2. **1'den 20'ye kadar çift sayıları yazdır**
```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

3. **1'den 10'a kadar olan sayıların karesini yazdır**
```js
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
```

4. **1'den 15'e kadar olan tek sayıları yazdır**
```js
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

5. **1'den 10'a kadar olan sayıların toplamını bul**
```js
let toplam = 0;
for (let i = 1; i <= 10; i++) {
  toplam += i;
}
console.log(toplam);
```

6. **1'den 20'ye kadar olan sayılarda 3'e bölünenleri yazdır**
```js
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
```

7. **1'den 10'a kadar olan sayıların işaretini yazdır**
```js
for (let i = -5; i <= 5; i++) {
  if (i > 0) {
    console.log(i + " pozitif");
  } else if (i < 0) {
    console.log(i + " negatif");
  } else {
    console.log(i + " sıfır");
  }
}
```

8. **1'den 10'a kadar olan sayıların tek/çift olup olmadığını switch ile yazdır**
```js
for (let i = 1; i <= 10; i++) {
  switch (i % 2) {
    case 0:
      console.log(i + " çift");
      break;
    case 1:
      console.log(i + " tek");
      break;
  }
}
```

9. **1'den 10'a kadar olan sayılarda 5'ten büyük olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log(i + " 5'ten büyük");
  } else {
    console.log(i + " 5 veya daha küçük");
  }
}
```

10. **1'den 10'a kadar olan sayılarda işareti switch ile yazdır**
```js
for (let i = -5; i <= 5; i++) {
  switch (true) {
    case i > 0:
      console.log(i + " pozitif");
      break;
    case i < 0:
      console.log(i + " negatif");
      break;
    default:
      console.log(i + " sıfır");
  }
}
```

11. **1'den 30'a kadar olan sayılarda hem 2'ye hem 3'e bölünenleri yazdır**
```js
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i + " hem 2'ye hem 3'e bölünüyor");
  }
}
```

12. **1'den 5'e kadar olan sayılarda switch ile sayı ismini yazdır**
```js
for (let i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      console.log("Bir");
      break;
    case 2:
      console.log("İki");
      break;
    case 3:
      console.log("Üç");
      break;
    case 4:
      console.log("Dört");
      break;
    case 5:
      console.log("Beş");
      break;
  }
}
```

13. **1'den 20'ye kadar olan sayılarda 10'dan büyük olanları yazdır**
```js
for (let i = 1; i <= 20; i++) {
  if (i > 10) {
    console.log(i + " 10'dan büyük");
  }
}
```

14. **1'den 20'ye kadar olan sayılarda hem pozitif hem çift olanları yazdır**
```js
for (let i = 1; i <= 20; i++) {
  if (i > 0 && i % 2 === 0) {
    console.log(i + " pozitif ve çift");
  }
}
```

15. **1'den 10'a kadar olan sayılarda switch ile özel mesaj yazdır**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 3:
      console.log("Üç özel sayıdır");
      break;
    case 7:
      console.log("Yedi şanslı sayıdır");
      break;
    default:
      console.log(i + " sıradan sayı");
  }
}
```

16. **1'den 10'a kadar olan sayılarda hem 5'e bölünüp hem pozitif olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i > 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

17. **1'den 10'a kadar olan sayılarda hem çift hem 8'den küçük olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0 && i < 8) {
    console.log(i);
  }
}
```

18. **1'den 10'a kadar olan sayılarda hem pozitif hem tek olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i > 0 && i % 2 !== 0) {
    console.log(i);
  }
}
```

19. **1'den 10'a kadar olan sayılarda switch ve if birlikte kullanımı**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 2:
    case 4:
      if (i % 2 === 0) {
        console.log(i + " çift ve özel sayı");
      }
      break;
    default:
      if (i % 2 !== 0) {
        console.log(i + " tek ve özel olmayan sayı");
      }
  }
}
```

20. **1'den 10'a kadar olan sayılarda 3'e bölünenlerin karesini yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(i * i);
  }
}
```

21. **1'den 10'a kadar olan sayılarda 5'e bölünenlerin küpünü yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log(i * i * i);
  }
}
```

22. **1'den 10'a kadar olan sayılarda switch ile tek/çift kontrolü**
```js
for (let i = 1; i <= 10; i++) {
  switch (i % 2) {
    case 0:
      console.log(i + " çift");
      break;
    case 1:
      console.log(i + " tek");
      break;
  }
}
```

23. **1'den 10'a kadar olan sayılarda hem 2'ye hem 5'e bölünenleri yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

24. **1'den 10'a kadar olan sayılarda switch ile 1, 5 ve 10 için özel mesaj yazdır**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Birinci eleman");
      break;
    case 5:
      console.log("Beşinci eleman");
      break;
    case 10:
      console.log("Onuncu eleman");
      break;
    default:
      console.log(i);
  }
}
```

25. **1'den 10'a kadar olan sayılarda hem 3'e hem 4'e bölünenleri yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log(i);
  }
}
```

26. **1'den 10'a kadar olan sayılarda switch ile 2, 4, 6, 8, 10 için özel mesaj yazdır**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      console.log(i + " çift ve özel sayı");
      break;
    default:
      console.log(i);
  }
}
```

27. **1'den 10'a kadar olan sayılarda hem pozitif hem 7'den büyük olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i > 7) {
    console.log(i);
  }
}
```

28. **1'den 10'a kadar olan sayılarda switch ile 3 ve 9 için özel mesaj yazdır**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 3:
      console.log("Üç özel sayıdır");
      break;
    case 9:
      console.log("Dokuz özel sayıdır");
      break;
    default:
      console.log(i);
  }
}
```

29. **1'den 10'a kadar olan sayılarda hem tek hem 5'ten büyük olanları yazdır**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0 && i > 5) {
    console.log(i);
  }
}
```

30. **1'den 10'a kadar olan sayılarda switch ve if ile birlikte özel kontrol**
```js
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 2:
    case 4:
      if (i % 2 === 0) {
        console.log(i + " çift ve özel sayı");
      }
      break;
    default:
      if (i % 2 !== 0) {
        console.log(i + " tek ve özel olmayan sayı");
      }
  }
}
``` 

# Orta Seviye For, If ve Switch Soruları

31. **1'den 100'e kadar olan sayılarda hem 3'e hem 5'e bölünenleri ve toplamlarını yazdır**
```js
let toplam = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    toplam += i;
  }
}
console.log('Toplam:', toplam);
```

32. **1'den 50'ye kadar olan sayılarda asal olanları yazdır**
```js
for (let i = 2; i <= 50; i++) {
  let asal = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      asal = false;
      break;
    }
  }
  if (asal) {
    console.log(i);
  }
}
```

33. **1'den 30'a kadar olan sayılarda switch ile 10, 20 ve 30 için özel mesaj, diğerleri için tek/çift kontrolü**
```js
for (let i = 1; i <= 30; i++) {
  switch (i) {
    case 10:
    case 20:
    case 30:
      console.log(i + ' özel sayıdır');
      break;
    default:
      if (i % 2 === 0) {
        console.log(i + ' çift');
      } else {
        console.log(i + ' tek');
      }
  }
}
```

34. **1'den 50'ye kadar olan sayılarda rakamları toplamı 10 olanları yazdır**
```js
for (let i = 1; i <= 50; i++) {
  let toplam = 0;
  let sayi = i;
  while (sayi > 0) {
    toplam += sayi % 10;
    sayi = Math.floor(sayi / 10);
  }
  if (toplam === 10) {
    console.log(i);
  }
}
```

35. **1'den 30'a kadar olan sayılarda hem 4'e bölünen hem de tek olanları yazdır (olmadığını göster)**
```js
let bulundu = false;
for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0 && i % 2 !== 0) {
    console.log(i);
    bulundu = true;
  }
}
if (!bulundu) {
  console.log('Böyle bir sayı yok.');
}
```

36. **1'den 20'ye kadar olan sayılarda switch ile 3, 6, 9, 12, 15, 18 için "üçün katı" yazdır, diğerleri için sayıyı yazdır**
```js
for (let i = 1; i <= 20; i++) {
  switch (i) {
    case 3:
    case 6:
    case 9:
    case 12:
    case 15:
    case 18:
      console.log(i + ' üçün katı');
      break;
    default:
      console.log(i);
  }
}
```

37. **1'den 30'a kadar olan sayılarda hem 2'ye hem 3'e hem 5'e bölünenleri yazdır**
```js
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

38. **1'den 20'ye kadar olan sayılarda switch ile tek/çift ve 10'dan büyük olup olmadığını birlikte kontrol et**
```js
for (let i = 1; i <= 20; i++) {
  switch (i % 2) {
    case 0:
      if (i > 10) {
        console.log(i + ' çift ve 10dan büyük');
      } else {
        console.log(i + ' çift ve 10dan küçük veya eşit');
      }
      break;
    case 1:
      if (i > 10) {
        console.log(i + ' tek ve 10dan büyük');
      } else {
        console.log(i + ' tek ve 10dan küçük veya eşit');
      }
      break;
  }
}
```

39. **1'den 100'e kadar olan sayılarda 7'ye tam bölünenlerin adedini bul**
```js
let adet = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    adet++;
  }
}
console.log('7ye bölünen sayı adedi:', adet);
```

40. **1'den 50'ye kadar olan sayılarda switch ile 13, 26, 39 için "uğursuz sayı" yazdır, diğerleri için tek/çift kontrolü**
```js
for (let i = 1; i <= 50; i++) {
  switch (i) {
    case 13:
    case 26:
    case 39:
      console.log(i + ' uğursuz sayı');
      break;
    default:
      if (i % 2 === 0) {
        console.log(i + ' çift');
      } else {
        console.log(i + ' tek');
      }
  }
}
``` 