# CSS Temel Ders Notları

## 1. CSS Nedir?

**CSS (Cascading Style Sheets)** = Basamaklı Stil Sayfaları
- HTML sayfalarının görünümünü ve düzenini belirleyen kod dilidir
- HTML içerik sağlar, CSS görünümü sağlar
- Web sayfalarını güzel ve düzenli hale getirir

## 2. CSS Nasıl Kullanılır?

### 3 Farklı Yöntem:

**1. Inline CSS (Satır İçi)**
```html
<p style="color: red; font-size: 20px;">Kırmızı yazı</p>
```

**2. Internal CSS (İç CSS)**
```html
<head>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
```

**3. External CSS (Dış CSS)** - EN ÇOK TERCİH EDİLEN
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

## 3. Temel CSS Seçiciler (Selectors)

### Tag Seçici
```css
p {
    color: blue;
}
/* Tüm p etiketlerini mavi yapar */
```

### Class Seçici
```css
.myClass {
    color: green;
}
/* class="myClass" olan tüm elementleri yeşil yapar */
```

### ID Seçici
```css
#myId {
    color: red;
}
/* id="myId" olan elementi kırmızı yapar */
```

## 4. Renkler

### Renk Verme Yöntemleri:
```css
/* Renk isimleri */
color: red;
color: blue;
color: green;

/* Hex kodları */
color: #FF0000; /* Kırmızı */
color: #0000FF; /* Mavi */
color: #00FF00; /* Yeşil */

/* RGB */
color: rgb(255, 0, 0); /* Kırmızı */
```

### Yaygın Renkler:
- `red` - Kırmızı
- `blue` - Mavi
- `green` - Yeşil
- `black` - Siyah
- `white` - Beyaz
- `gray` - Gri
- `yellow` - Sarı
- `purple` - Mor

## 5. Yazı Tipi ve Boyutu

```css
/* Yazı boyutu */
font-size: 16px;
font-size: 20px;
font-size: 24px;

/* Yazı tipi */
font-family: Arial;
font-family: "Times New Roman";
font-family: Georgia;

/* Yazı kalınlığı */
font-weight: normal;
font-weight: bold;

/* Yazı stili */
font-style: normal;
font-style: italic;
```

## 6. Kenar Boşlukları

### Margin (Dış Boşluk)
```css
margin: 10px; /* Tüm yönlerde 10px */
margin: 10px 20px; /* Üst-alt 10px, sağ-sol 20px */
margin: 10px 20px 30px 40px; /* Üst, sağ, alt, sol */

/* Tek yönlü */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```

### Padding (İç Boşluk)
```css
padding: 10px; /* Tüm yönlerde 10px */
padding: 10px 20px; /* Üst-alt 10px, sağ-sol 20px */

/* Tek yönlü */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

## 7. Kenarlık (Border)

```css
/* Basit kenarlık */
border: 1px solid black;
border: 2px dashed red;
border: 3px dotted blue;

/* Detaylı kenarlık */
border-width: 2px;
border-style: solid;
border-color: red;

/* Tek yönlü kenarlık */
border-top: 1px solid black;
border-right: 2px dashed red;

/* Köşe yuvarlama */
border-radius: 5px;
border-radius: 10px;
border-radius: 50%; /* Tam yuvarlak */
```

## 8. Arka Plan (Background)

```css
/* Arka plan rengi */
background-color: lightblue;
background-color: #f0f0f0;

/* Arka plan resmi */
background-image: url('resim.jpg');

/* Arka plan boyutu */
background-size: cover; /* Tam kaplar */
background-size: contain; /* Sığdırır */
```

## 9. Metin Hizalama

```css
/* Yatay hizalama */
text-align: left; /* Sola yasla */
text-align: center; /* Ortala */
text-align: right; /* Sağa yasla */

/* Metin dekorasyonu */
text-decoration: underline; /* Alt çizgi */
text-decoration: line-through; /* Üstü çizili */
text-decoration: none; /* Dekorasyon yok */

/* Metin dönüşümü */
text-transform: uppercase; /* BÜYÜK HARF */
text-transform: lowercase; /* küçük harf */
text-transform: capitalize; /* İlk Harf Büyük */
```

## 10. Basit Örnekler

### Örnek 1: Basit Buton
```css
.button {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
}
```

### Örnek 2: Kart Tasarımı
```css
.card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

### Örnek 3: Menü Listesi
```css
.menu {
    list-style-type: none;
    padding: 0;
}

.menu li {
    background-color: #f1f1f1;
    padding: 10px;
    margin: 5px 0;
    border-left: 4px solid #4CAF50;
}
```

## 11. Yaygın CSS Özellikleri

### Boyut Özellikleri
```css
width: 200px; /* Genişlik */
height: 100px; /* Yükseklik */
max-width: 500px; /* Maksimum genişlik */
min-height: 50px; /* Minimum yükseklik */
```

### Görünürlük
```css
display: block; /* Blok element */
display: inline; /* Satır içi element */
display: none; /* Gizle */
visibility: hidden; /* Görünmez yap */
```

### Pozisyon
```css
position: static; /* Normal */
position: relative; /* Göreceli */
position: absolute; /* Mutlak */
position: fixed; /* Sabit */
```

## 12. Pratik Egzersizler

### Egzersiz 1: Basit Sayfa
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        p {
            line-height: 1.6;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Merhaba Dünya!</h1>
        <p>Bu benim ilk CSS sayfam.</p>
    </div>
</body>
</html>
```

## 13. Önemli Notlar

### Öncelik Sırası (Priority)
1. Inline CSS (en yüksek)
2. ID seçici
3. Class seçici
4. Tag seçici (en düşük)

### Birim Türleri
- `px` - Piksel (sabit)
- `%` - Yüzde (göreceli)
- `em` - Element boyutuna göre
- `rem` - Root element boyutuna göre

### Renk Sistemi
- **Hex**: #FF0000 (kırmızı)
- **RGB**: rgb(255, 0, 0) (kırmızı)
- **RGBA**: rgba(255, 0, 0, 0.5) (yarı şeffaf kırmızı)

## 14. Sık Yapılan Hatalar

1. **Noktalı virgül unutma**
```css
/* YANLIŞ */
color: red
font-size: 20px

/* DOĞRU */
color: red;
font-size: 20px;
```

2. **Class/ID karıştırma**
```css
/* Class için nokta */
.myClass { }

/* ID için diyez */
#myId { }
```

3. **Süslü parantez unutma**
```css
/* YANLIŞ */
p {
    color: red;
/* DOĞRU */
p {
    color: red;
}
```


**Unutmayın:** CSS öğrenmek sabır ve pratik gerektirir. Her gün biraz pratik yaparak ilerleyin!

---
