# Temel CSS Örnekleri (Grid ve Flex Kullanılmadan)

Bu dokümanda grid ve flexbox kullanılmadan yapılabilecek 20 temel CSS örneği bulacaksınız. Her örnek için görev, kod ve açıklama yer almaktadır.

## 1. Temel Metin Stillendirme

**Görev:** Bir paragrafın yazı tipini, boyutunu ve rengini değiştirme

**HTML:**
```html
<p class="styled-text">Bu metin stillendirilmiş bir paragraftır.</p>
```

**CSS:**
```css
.styled-text {
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #2c3e50;
    font-weight: bold;
}
```

**Açıklama:** `font-family` ile yazı tipi, `font-size` ile boyut, `color` ile renk ve `font-weight` ile kalınlık ayarlanır.

---

## 2. Kutu Modeli (Box Model)

**Görev:** Bir elementin iç boşluk (padding), dış boşluk (margin) ve kenarlık (border) özelliklerini ayarlama

**HTML:**
```html
<div class="box">Bu bir kutu örneğidir</div>
```

**CSS:**
```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 15px;
    border: 2px solid #3498db;
    background-color: #ecf0f1;
}
```

**Açıklama:** `padding` içerik ile kenarlık arası, `margin` kenarlık ile diğer elementler arası, `border` kenarlık kalınlığı ve rengini belirler.

---

## 3. Arka Plan Rengi ve Resmi

**Görev:** Bir elementin arka plan rengini veya resmini ayarlama

**HTML:**
```html
<div class="background-example">Arka plan örneği</div>
```

**CSS:**
```css
.background-example {
    width: 300px;
    height: 150px;
    background-color: #e74c3c;
    background-image: url('pattern.png');
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    padding: 20px;
}
```

**Açıklama:** `background-color` düz renk, `background-image` resim, `background-repeat` tekrarlama, `background-position` konumlandırma ayarlarıdır.

---

## 4. Kenarlık Özellikleri

**Görev:** Farklı kenarlık stilleri oluşturma

**HTML:**
```html
<div class="border-example">Kenarlık örneği</div>
```

**CSS:**
```css
.border-example {
    width: 200px;
    height: 80px;
    padding: 10px;
    border-top: 3px solid #2ecc71;
    border-right: 3px dashed #e67e22;
    border-bottom: 3px dotted #9b59b6;
    border-left: 3px double #34495e;
    border-radius: 10px;
}
```

**Açıklama:** Her kenar için farklı stil (`solid`, `dashed`, `dotted`, `double`) uygulanabilir. `border-radius` köşeleri yuvarlar.

---

## 5. Mutlak Konumlandırma (Absolute Positioning)

**Görev:** Bir elementi sayfada belirli bir konuma yerleştirme

**HTML:**
```html
<div class="container">
    <div class="absolute-box">Mutlak konum</div>
</div>
```

**CSS:**
```css
.container {
    position: relative;
    width: 400px;
    height: 200px;
    background-color: #bdc3c7;
}

.absolute-box {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 100px;
    height: 50px;
    background-color: #f39c12;
    padding: 10px;
}
```

**Açıklama:** `position: relative` olan ebeveyn içinde `position: absolute` ile elementi istediğiniz yere yerleştirirsiniz.

---

## 6. Display Özellikleri

**Görev:** Elementlerin görünüm tipini değiştirme

**HTML:**
```html
<span class="inline-block">Inline-block 1</span>
<span class="inline-block">Inline-block 2</span>
<div class="inline">Inline div</div>
```

**CSS:**
```css
.inline-block {
    display: inline-block;
    width: 120px;
    height: 50px;
    background-color: #1abc9c;
    margin: 5px;
    padding: 10px;
}

.inline {
    display: inline;
    background-color: #e67e22;
    padding: 5px;
}
```

**Açıklama:** `inline-block` elementler yan yana dizilir ama genişlik/yükseklik verilebilir. `inline` elementler sadece yan yana dizilir.

---

## 7. Float Kullanımı

**Görev:** Elementleri sola veya sağa yaslamak ve metin sarması oluşturmak

**HTML:**
```html
<div class="float-container">
    <img class="float-left" src="image.jpg" alt="Resim">
    <p>Bu metin resmin yanında akan bir paragraftır. Float özelliği sayesinde resim sol tarafa yaslanır ve metin onun etrafını sarar.</p>
</div>
```

**CSS:**
```css
.float-container {
    width: 100%;
}

.float-left {
    float: left;
    width: 150px;
    height: 100px;
    margin: 0 15px 10px 0;
    background-color: #95a5a6;
}

.float-container::after {
    content: "";
    display: table;
    clear: both;
}
```

**Açıklama:** `float: left` elementi sola yaslar. `clear: both` ile float etkisini sonlandırırız.

---

## 8. Hover Efektleri

**Görev:** Mouse üzerine geldiğinde değişen efektler oluşturma

**HTML:**
```html
<button class="hover-button">Üzerime gel</button>
```

**CSS:**
```css
.hover-button {
    padding: 15px 30px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.hover-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}
```

**Açıklama:** `:hover` pseudo-class'ı ile mouse üzerine geldiğindeki stilleri belirleriz. `transition` ile yumuşak geçiş sağlarız.

---

## 9. Form Stillendirme

**Görev:** Form elementlerini güzelleştirme

**HTML:**
```html
<form class="styled-form">
    <input type="text" class="form-input" placeholder="Adınızı girin">
    <input type="email" class="form-input" placeholder="E-mail adresinizi girin">
    <button type="submit" class="form-button">Gönder</button>
</form>
```

**CSS:**
```css
.styled-form {
    max-width: 300px;
    margin: 20px auto;
}

.form-input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
}

.form-input:focus {
    border-color: #3498db;
    outline: none;
}

.form-button {
    width: 100%;
    padding: 12px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

**Açıklama:** `box-sizing: border-box` ile padding ve border genişliğe dahil edilir. `:focus` ile odaklandığında stil değişir.

---

## 10. Liste Stillendirme

**Görev:** Listelerin görünümünü özelleştirme

**HTML:**
```html
<ul class="custom-list">
    <li>Birinci madde</li>
    <li>İkinci madde</li>
    <li>Üçüncü madde</li>
</ul>
```

**CSS:**
```css
.custom-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.custom-list li {
    padding: 10px;
    margin: 5px 0;
    background-color: #ecf0f1;
    border-left: 4px solid #3498db;
}

.custom-list li:before {
    content: "→ ";
    color: #3498db;
    font-weight: bold;
}
```

**Açıklama:** `list-style-type: none` ile nokta/numaraları kaldırırız. `:before` pseudo-element ile özel işaret ekleriz.

---

## 11. Basit Animasyon

**Görev:** CSS ile temel animasyon oluşturma

**HTML:**
```html
<div class="animated-box">Animasyonlu kutu</div>
```

**CSS:**
```css
.animated-box {
    width: 100px;
    height: 100px;
    background-color: #e74c3c;
    margin: 50px auto;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
```

**Açıklama:** `@keyframes` ile animasyon adımlarını tanımlarız. `animation` özelliği ile animasyonu uygularız.

---

## 12. Opacity ve Görünürlük

**Görev:** Elementlerin şeffaflığını ve görünürlüğünü kontrol etme

**HTML:**
```html
<div class="opacity-example">Şeffaf kutu</div>
<div class="visibility-example">Görünmez kutu</div>
```

**CSS:**
```css
.opacity-example {
    width: 200px;
    height: 100px;
    background-color: #9b59b6;
    opacity: 0.5;
    margin: 10px;
}

.visibility-example {
    width: 200px;
    height: 100px;
    background-color: #1abc9c;
    visibility: hidden;
    margin: 10px;
}
```

**Açıklama:** `opacity` şeffaflık (0-1 arası), `visibility: hidden` elementi gizler ama yer kaplamaya devam eder.

---

## 13. Z-index Katmanlama

**Görev:** Elementlerin hangi sırada görüneceğini belirleme

**HTML:**
```html
<div class="layer-container">
    <div class="layer1">Katman 1</div>
    <div class="layer2">Katman 2</div>
</div>
```

**CSS:**
```css
.layer-container {
    position: relative;
    width: 300px;
    height: 200px;
}

.layer1 {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 150px;
    height: 100px;
    background-color: #e74c3c;
    z-index: 1;
}

.layer2 {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 150px;
    height: 100px;
    background-color: #3498db;
    z-index: 2;
}
```

**Açıklama:** `z-index` değeri yüksek olan elementler üstte görünür. Sadece `position` değeri olan elementlerde çalışır.

---

## 14. Overflow Özellikleri

**Görev:** İçerik taşma durumlarını yönetme

**HTML:**
```html
<div class="overflow-example">
    Bu çok uzun bir metindir ve kutunun sınırlarını aşacak kadar uzundur. Overflow özelliği ile ne yapılacağını belirleyebiliriz.
</div>
```

**CSS:**
```css
.overflow-example {
    width: 200px;
    height: 80px;
    border: 2px solid #34495e;
    padding: 10px;
    overflow: auto;
    background-color: #ecf0f1;
}
```

**Açıklama:** `overflow: auto` gerektiğinde scroll bar gösterir. Diğer değerler: `hidden` (gizler), `visible` (taşırır), `scroll` (her zaman scroll bar).

---

## 15. Cursor Stilleri

**Görev:** Mouse imlecinin görünümünü değiştirme

**HTML:**
```html
<div class="cursor-examples">
    <p class="pointer">Tıklanabilir (pointer)</p>
    <p class="help">Yardım (help)</p>
    <p class="not-allowed">İzin verilmez (not-allowed)</p>
</div>
```

**CSS:**
```css
.cursor-examples p {
    padding: 10px;
    margin: 5px 0;
    background-color: #bdc3c7;
}

.pointer {
    cursor: pointer;
}

.help {
    cursor: help;
}

.not-allowed {
    cursor: not-allowed;
}
```

**Açıklama:** `cursor` özelliği ile mouse imlecinin görünümünü değiştiririz. Kullanıcı deneyimini iyileştirir.

---

## 16. Pseudo Sınıflar

**Görev:** Element durumlarına göre farklı stiller uygulama

**HTML:**
```html
<div class="pseudo-examples">
    <p>İlk çocuk</p>
    <p>İkinci çocuk</p>
    <p>Son çocuk</p>
</div>
```

**CSS:**
```css
.pseudo-examples p {
    padding: 10px;
    margin: 5px 0;
    background-color: #ecf0f1;
}

.pseudo-examples p:first-child {
    background-color: #2ecc71;
    color: white;
}

.pseudo-examples p:last-child {
    background-color: #e74c3c;
    color: white;
}

.pseudo-examples p:nth-child(2) {
    background-color: #f39c12;
    color: white;
}
```

**Açıklama:** `:first-child`, `:last-child`, `:nth-child()` gibi pseudo-sınıflar ile belirli konumdaki elementleri stillendirebiliriz.

---

## 17. Pseudo Elementler

**Görev:** Ekstra içerik ekleme ve stillendirme

**HTML:**
```html
<blockquote class="quote">Bu bir alıntı metnidir.</blockquote>
```

**CSS:**
```css
.quote {
    position: relative;
    padding: 20px;
    background-color: #ecf0f1;
    border-left: 4px solid #3498db;
    font-style: italic;
}

.quote::before {
    content: """;
    font-size: 60px;
    color: #3498db;
    position: absolute;
    top: -10px;
    left: 10px;
}

.quote::after {
    content: """;
    font-size: 60px;
    color: #3498db;
    position: absolute;
    bottom: -40px;
    right: 10px;
}
```

**Açıklama:** `::before` ve `::after` pseudo-elementleri ile HTML'e dokunmadan ekstra içerik ekleyebiliriz.

---

## 18. Transform Özellikleri

**Görev:** Elementleri döndürme, ölçekleme ve taşıma

**HTML:**
```html
<div class="transform-examples">
    <div class="rotate">Döndürülmüş</div>
    <div class="scale">Ölçeklenmiş</div>
    <div class="translate">Taşınmış</div>
</div>
```

**CSS:**
```css
.transform-examples div {
    width: 100px;
    height: 100px;
    background-color: #9b59b6;
    margin: 20px;
    display: inline-block;
    text-align: center;
    line-height: 100px;
    color: white;
}

.rotate {
    transform: rotate(45deg);
}

.scale {
    transform: scale(1.2);
}

.translate {
    transform: translateX(20px) translateY(-10px);
}
```

**Açıklama:** `transform` ile elementleri döndürme (`rotate`), ölçekleme (`scale`) ve taşıma (`translate`) işlemleri yapabilirsiniz.

---

## 19. Transition Efektleri

**Görev:** Stil değişikliklerini yumuşak geçişlerle yapma

**HTML:**
```html
<div class="transition-box">Geçiş efekti</div>
```

**CSS:**
```css
.transition-box {
    width: 200px;
    height: 100px;
    background-color: #3498db;
    color: white;
    text-align: center;
    line-height: 100px;
    border-radius: 5px;
    transition: all 0.5s ease;
    cursor: pointer;
}

.transition-box:hover {
    background-color: #e74c3c;
    width: 250px;
    height: 120px;
    border-radius: 20px;
    transform: rotate(5deg);
}
```

**Açıklama:** `transition` ile stil değişikliklerinin ne kadar sürede ve nasıl bir easing ile gerçekleşeceğini belirliyoruz.

---

## 20. Basit Responsive Tasarım

**Görev:** Farklı ekran boyutları için farklı stiller oluşturma

**HTML:**
```html
<div class="responsive-container">
    <div class="responsive-box">Responsive kutu</div>
</div>
```

**CSS:**
```css
.responsive-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.responsive-box {
    width: 80%;
    height: 200px;
    background-color: #2ecc71;
    margin: 0 auto;
    text-align: center;
    line-height: 200px;
    color: white;
    font-size: 20px;
}

/* Tablet boyutu */
@media (max-width: 768px) {
    .responsive-box {
        width: 90%;
        height: 150px;
        line-height: 150px;
        font-size: 18px;
        background-color: #f39c12;
    }
}

/* Telefon boyutu */
@media (max-width: 480px) {
    .responsive-box {
        width: 95%;
        height: 100px;
        line-height: 100px;
        font-size: 16px;
        background-color: #e74c3c;
    }
}
```

**Açıklama:** `@media` queries ile farklı ekran boyutları için farklı CSS kuralları oluştururuz. Bu sayede responsive tasarım yapabiliriz.

---

## Sonuç

Bu 20 örnek, grid ve flexbox kullanmadan CSS'in temel özelliklerini kapsamaktadır. Her örneği kendi projenizde deneyerek CSS'in gücünü keşfedebilirsiniz. Bu temel bilgiler modern CSS tekniklerini öğrenmek için sağlam bir zemin oluşturacaktır.
