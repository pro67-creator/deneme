# JavaScript DOM (Document Object Model) Temelleri

## 1. DOM Nedir?

- **DOM (Document Object Model)**, bir web sayfasının yapısını temsil eden, ağaç şeklinde bir modeldir.
- HTML, CSS ve JavaScript'in birlikte çalışmasını sağlar.
- JavaScript ile DOM üzerinden HTML elementlerini seçebilir, değiştirebilir, ekleyebilir veya silebilirsin.
- DOM sayesinde web sayfası dinamik hale gelir.

### Basit DOM Ağacı Görseli

```
Document
└── html
    ├── head
    └── body
        ├── h1
        └── p
```

---

## 2. DOM Seçicileri (Elementleri Seçmek)

### 2.1. `getElementById`

Bir elementin `id` değerine göre seçilmesi. Bu yöntemle sayfadaki tekil bir elementi kolayca bulabilirsin.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile `getElementById` fonksiyonu kullanılarak bu element seçilir.
3. Seçilen elementin içeriği veya özelliği değiştirilir.

```html
<h1 id="baslik">Merhaba!</h1>
<script>
  // 'baslik' id'li elementi seçip içeriğini değiştiriyoruz.
  const baslik = document.getElementById("baslik");
  baslik.textContent = "Hoşgeldin!";
</script>
```

---

### 2.2. `getElementsByClassName`

Aynı class'a sahip birden fazla elementi seçmek için kullanılır. Sonuç bir dizi (HTMLCollection) gibi davranır.

**Algoritma:**
1. HTML'de birden fazla elemente aynı class verilir.
2. JavaScript ile `getElementsByClassName` fonksiyonu ile bu elementler seçilir.
3. Seçilen elementler dizi gibi kullanılır ve istenen elemana erişilir.
4. Erişilen elementlerin özellikleri veya içerikleri değiştirilir.

```html
<div class="kutu">Kutu 1</div>
<div class="kutu">Kutu 2</div>
<script>
  // 'kutu' class'ına sahip tüm elementleri seçiyoruz.
  const kutular = document.getElementsByClassName("kutu");
  // İlk kutunun arka planını değiştiriyoruz.
  kutular[0].style.background = "lightblue";
  // İkinci kutunun metnini değiştiriyoruz.
  kutular[1].textContent = "İkinci kutu değişti!";
</script>
```

---

### 2.3. `getElementsByTagName`

Belirli bir etikete sahip tüm elementleri seçmek için kullanılır. Örneğin, tüm `<p>` etiketlerini seçebilirsin.

**Algoritma:**
1. HTML'de aynı etikete sahip birden fazla element bulunur.
2. JavaScript ile `getElementsByTagName` fonksiyonu ile bu elementler seçilir.
3. Seçilen elementler dizi gibi kullanılır.
4. İstenilen elementin özelliği veya içeriği değiştirilir.

```html
<p>Birinci paragraf</p>
<p>İkinci paragraf</p>
<script>
  // Sayfadaki tüm <p> etiketlerini seçiyoruz.
  const paragraflar = document.getElementsByTagName("p");
  // İkinci paragrafın rengini kırmızı yapıyoruz.
  paragraflar[1].style.color = "red";
</script>
```

---

### 2.4. `querySelector` ve `querySelectorAll`

CSS seçicileriyle element seçmek için kullanılır. `querySelector` ilk eşleşeni, `querySelectorAll` ise tüm eşleşenleri döndürür.

**Algoritma:**
1. HTML'de seçmek istediğin element(ler) için uygun bir CSS seçici belirlenir.
2. JavaScript ile `querySelector` veya `querySelectorAll` fonksiyonu kullanılır.
3. Seçilen element(ler) üzerinde döngüyle veya doğrudan işlem yapılır.

```html
<p class="ozel">Özel paragraf</p>
<p>Normal paragraf</p>
<script>
  // Sadece class'ı 'ozel' olan ilk paragrafı seçiyoruz.
  const ozel = document.querySelector(".ozel");
  ozel.style.fontWeight = "bold";

  // Sayfadaki tüm <p> etiketlerini seçip yazı boyutunu büyütüyoruz.
  const tumParagraflar = document.querySelectorAll("p");
  tumParagraflar.forEach(p => p.style.fontSize = "18px");
</script>
```

---

## 3. DOM ile Element Ekleme

### 3.1. Yeni Element Oluşturmak ve Eklemek

Bir listeye yeni bir eleman eklemek için önce yeni bir element oluşturup, sonra onu uygun yere ekleriz.

**Algoritma:**
1. HTML'de bir liste ve bir buton oluşturulur.
2. Butona tıklanınca çalışacak bir fonksiyon yazılır.
3. Fonksiyon içinde yeni bir `<li>` elementi oluşturulur.
4. Oluşturulan elementin içeriği belirlenir.
5. Yeni element, mevcut listenin sonuna eklenir.

```html
<ul id="liste">
  <li>Elma</li>
</ul>
<button id="ekle">Meyve Ekle</button>
<script>
  // Butona tıklandığında yeni bir <li> oluşturup listeye ekliyoruz.
  document.getElementById("ekle").onclick = function() {
    const yeniLi = document.createElement("li");
    yeniLi.textContent = "Muz";
    document.getElementById("liste").appendChild(yeniLi);
  };
</script>
```

---

### 3.2. Elementin İçeriğini Değiştirmek

Bir elementin içeriğini değiştirmek için `innerHTML` veya `textContent` kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile bu element seçilir.
3. Seçilen elementin içeriği `innerHTML` veya `textContent` ile değiştirilir.

```html
<p id="bilgi">Eski bilgi</p>
<script>
  // Paragrafın içeriğini kalın ve yeni bir metinle değiştiriyoruz.
  document.getElementById("bilgi").innerHTML = "<b>Yeni bilgi!</b>";
</script>
```

---

## 4. DOM ile Element Silme

### 4.1. Bir Elementi Kaldırmak

Bir elementi tamamen sayfadan kaldırmak için `remove()` fonksiyonu kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir ve bir buton eklenir.
2. Butona tıklandığında, JavaScript ile ilgili element seçilir.
3. Seçilen elementin `remove()` fonksiyonu çağrılır ve element sayfadan silinir.

```html
<div id="kaldir">Beni sil!</div>
<button onclick="document.getElementById('kaldir').remove()">Sil</button>
<!-- Butona tıklanınca div tamamen silinir. -->
```

---

### 4.2. Listenin Son Elemanını Silmek

Bir listenin son elemanını kaldırmak için `removeChild` fonksiyonu kullanılır.

**Algoritma:**
1. HTML'de bir liste ve bir buton oluşturulur.
2. Butona tıklandığında çalışacak bir fonksiyon yazılır.
3. Fonksiyon içinde listenin son elemanı seçilir.
4. Eğer son eleman varsa, `removeChild` ile silinir.

```html
<ul id="meyveler">
  <li>Elma</li>
  <li>Muz</li>
</ul>
<button id="sonuSil">Sonu Sil</button>
<script>
  // Butona tıklandığında listenin son elemanını siliyoruz.
  document.getElementById("sonuSil").onclick = function() {
    const liste = document.getElementById("meyveler");
    if (liste.lastElementChild) {
      liste.removeChild(liste.lastElementChild);
    }
  };
</script>
```

---

## 5. DOM ile Olaylar (Events)

### 5.1. Tıklama Olayı

Bir butona tıklandığında bir işlem yapmak için `addEventListener` ile `click` olayı eklenir.

**Algoritma:**
1. HTML'de bir buton oluşturulur.
2. JavaScript ile buton seçilir.
3. Butona tıklanınca çalışacak bir fonksiyon tanımlanır.
4. Fonksiyon içinde istenen işlem (ör: uyarı gösterme) yapılır.

```html
<button id="tikla">Bana Tıkla</button>
<script>
  // Butona tıklandığında ekrana uyarı çıkar.
  document.getElementById("tikla").addEventListener("click", function() {
    alert("Butona tıklandı!");
  });
</script>
```

---

### 5.2. Klavye Olayı

Bir input alanında tuşa basıldığında hangi tuşa basıldığını öğrenmek için kullanılır.

**Algoritma:**
1. HTML'de bir input alanı oluşturulur.
2. JavaScript ile input seçilir.
3. Inputa her tuş basıldığında çalışacak bir fonksiyon tanımlanır.
4. Fonksiyon içinde basılan tuşun adı konsola yazdırılır.

```html
<input id="ad" placeholder="Adınızı yazın">
<script>
  // Her tuşa basıldığında konsola basılan tuşun adı yazılır.
  document.getElementById("ad").addEventListener("keydown", function(e) {
    console.log("Basılan tuş:", e.key);
  });
</script>
```

---

### 5.3. Mouse Üzerine Gelme

Bir elementin üzerine gelindiğinde veya çıkıldığında stilini değiştirmek için kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile bu element seçilir.
3. Elementin üzerine gelindiğinde arka plan rengi değiştirilir.
4. Elementten çıkıldığında arka plan eski haline döner.

```html
<div id="hover">Üzerime gel</div>
<script>
  // Üzerine gelince arka plan sarı olur, çıkınca eski haline döner.
  document.getElementById("hover").addEventListener("mouseover", function() {
    this.style.background = "yellow";
  });
  document.getElementById("hover").addEventListener("mouseout", function() {
    this.style.background = "";
  });
</script>
```

---

## 6. DOM ile Form İşlemleri

### 6.1. Formdan Veri Almak

Bir form gönderildiğinde, input değerini almak ve ekrana göstermek için kullanılır.

**Algoritma:**
1. HTML'de bir form ve input alanı oluşturulur.
2. Formun gönderilme (submit) olayı dinlenir.
3. Form gönderildiğinde sayfanın yenilenmesi engellenir.
4. Inputtaki değer alınır ve ekrana (ör: alert ile) gösterilir.

```html
<form id="giris">
  <input id="isim" type="text" placeholder="İsim">
  <button>Gönder</button>
</form>
<script>
  // Form gönderilince sayfa yenilenmesin ve girilen isim uyarı olarak gösterilsin.
  document.getElementById("giris").onsubmit = function(e) {
    e.preventDefault();
    alert("Girilen isim: " + document.getElementById("isim").value);
  };
</script>
```

---

### 6.2. Formu Temizlemek

Bir form gönderildikten sonra input alanını temizlemek için kullanılır.

**Algoritma:**
1. HTML'de bir form ve input alanı oluşturulur.
2. Formun gönderilme olayı dinlenir.
3. Form gönderildiğinde sayfanın yenilenmesi engellenir.
4. Input alanının değeri boş string yapılır.

```html
<form id="temizleForm">
  <input id="veri" type="text">
  <button>Temizle</button>
</form>
<script>
  // Form gönderilince input alanı temizlenir.
  document.getElementById("temizleForm").onsubmit = function(e) {
    e.preventDefault();
    document.getElementById("veri").value = "";
  };
</script>
```

---

## 7. DOM ile Stil (CSS) Değiştirme

### 7.1. Tek Elementin Stili

Bir elementin stilini JavaScript ile değiştirmek için `style` özelliği kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile bu element seçilir.
3. Seçilen elementin stil özellikleri değiştirilir.

```html
<div id="kutu">Kutu</div>
<script>
  // Kutunun arka plan rengini ve kenarlığını değiştiriyoruz.
  document.getElementById("kutu").style.backgroundColor = "lightgreen";
  document.getElementById("kutu").style.border = "2px solid black";
</script>
```

---

### 7.2. Birden Fazla Elementin Stili

Birden fazla elementi aynı anda değiştirmek için döngü ile hepsine stil uygulanır.

**Algoritma:**
1. HTML'de aynı class'a sahip birden fazla element oluşturulur.
2. JavaScript ile bu elementler seçilir.
3. Döngü ile her bir elementin stil özelliği değiştirilir.

```html
<p class="renkli">Birinci</p>
<p class="renkli">İkinci</p>
<script>
  // Tüm 'renkli' class'ına sahip paragrafların rengini mor yapıyoruz.
  const renkli = document.querySelectorAll(".renkli");
  renkli.forEach(function(p) {
    p.style.color = "purple";
  });
</script>
```

---

## 8. Class ve Attribute İşlemleri

### 8.1. Class Ekleme ve Silme

Bir elemente yeni bir class eklemek veya var olanı kaldırmak için `classList` kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile bu element seçilir.
3. `classList.add` ile yeni bir class eklenir.
4. `classList.remove` ile class kaldırılır.

```html
<div id="kutu2">Kutu</div>
<script>
  // 'aktif' class'ını ekleyip sonra kaldırıyoruz.
  const kutu2 = document.getElementById("kutu2");
  kutu2.classList.add("aktif");
  kutu2.classList.remove("aktif");
</script>
```

---

### 8.2. Attribute Ekleme ve Silme

Bir elemente yeni bir öznitelik eklemek veya kaldırmak için `setAttribute` ve `removeAttribute` kullanılır.

**Algoritma:**
1. HTML'de bir elemente `id` verilir.
2. JavaScript ile bu element seçilir.
3. `setAttribute` ile yeni bir öznitelik eklenir veya değeri değiştirilir.
4. `removeAttribute` ile öznitelik kaldırılır.

```html
<a id="link" href="https://google.com">Google</a>
<script>
  // Linke yeni bir target ekliyoruz ve href'i kaldırıyoruz.
  const link = document.getElementById("link");
  link.setAttribute("target", "_blank");
  link.removeAttribute("href");
</script>
```

---

## 9. Mini Uygulamalar

### 9.1. Basit Sayaç

Her tıklamada bir sayacı arttıran basit bir uygulama.

**Algoritma:**
1. HTML'de bir buton ve bir sayı göstergesi (span) oluşturulur.
2. JavaScript'te bir sayaç değişkeni tanımlanır.
3. Butona tıklandığında sayaç bir artırılır.
4. Artan sayı, ekrandaki span elementine yazılır.

```html
<button id="arttir">Arttır</button>
<span id="sayi">0</span>
<script>
  // Butona tıklandıkça sayı bir artar.
  let sayi = 0;
  document.getElementById("arttir").onclick = function() {
    sayi++;
    document.getElementById("sayi").textContent = sayi;
  };
</script>
```

---

### 9.2. Girilen Metni Listeye Ekleme

Kullanıcıdan alınan metni bir listeye ekleyen örnek.

**Algoritma:**
1. HTML'de bir input, bir buton ve bir liste oluşturulur.
2. Butona tıklandığında inputtaki değer alınır.
3. Eğer input boş değilse yeni bir `<li>` oluşturulur.
4. Oluşturulan `<li>` listeye eklenir ve input temizlenir.

```html
<input id="metin" type="text" placeholder="Bir şey yaz">
<button id="ekle2">Ekle</button>
<ul id="liste2"></ul>
<script>
  // Ekle butonuna tıklanınca inputtaki metin listeye eklenir ve input temizlenir.
  document.getElementById("ekle2").onclick = function() {
    const deger = document.getElementById("metin").value;
    if (deger.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = deger;
      document.getElementById("liste2").appendChild(li);
      document.getElementById("metin").value = "";
    }
  };
</script>
```

---

### 9.3. Renk Değiştiren Kutu

Butona tıklandığında kutunun rengini değiştiren örnek.

**Algoritma:**
1. HTML'de bir kutu (div) ve bir buton oluşturulur.
2. Butona tıklandığında çalışacak bir fonksiyon yazılır.
3. Fonksiyon içinde kutunun arka plan rengi değiştirilir.

```html
<div id="renkKutu" style="width:100px;height:100px;background:gray;"></div>
<button id="degistir">Renk Değiştir</button>
<script>
  // Butona tıklanınca kutunun rengi turuncu olur.
  document.getElementById("degistir").onclick = function() {
    document.getElementById("renkKutu").style.background = "orange";
  };
</script>
```

---

## 10. Faydalı Kaynaklar

- [MDN Web Docs - DOM](https://developer.mozilla.org/tr/docs/Web/API/Document_Object_Model)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

---

Bu notlar, DOM'un temelini bol örnekle, açıklama ve algoritma ile kavraman için hazırlandı. Kendi örneklerini de yazarak pratik yapabilirsin!

---

## 11. Ekstra Basit DOM Örnekleri

### 11.1. Bir Paragrafı Gizle/Göster

**Algoritma:**
1. HTML'de bir paragraf ve bir buton oluşturulur.
2. Butona tıklandığında paragrafın görünürlüğü değiştirilir.

```html
<p id="gizli">Bu paragraf gizlenebilir.</p>
<button id="gizleBtn">Gizle/Göster</button>
<script>
  document.getElementById("gizleBtn").onclick = function() {
    const p = document.getElementById("gizli");
    if (p.style.display === "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  };
</script>
```

---

### 11.2. Inputa Girilen Metni Anında Başlıkta Gösterme

**Algoritma:**
1. HTML'de bir input ve bir başlık (h2) oluşturulur.
2. Inputa her yazı yazıldığında başlık güncellenir.

```html
<input id="canliInput" type="text" placeholder="Yazınca başlık değişir">
<h2 id="canliBaslik">Başlık</h2>
<script>
  document.getElementById("canliInput").oninput = function() {
    document.getElementById("canliBaslik").textContent = this.value;
  };
</script>
```

---

### 11.3. Sayfa Arka Plan Rengini Değiştir

**Algoritma:**
1. HTML'de bir buton oluşturulur.
2. Butona tıklandığında sayfanın arka plan rengi değiştirilir.

```html
<button id="arkaPlanBtn">Arka Planı Mavi Yap</button>
<script>
  document.getElementById("arkaPlanBtn").onclick = function() {
    document.body.style.background = "#87ceeb";
  };
</script>
```

---

### 11.4. Listeyi Temizle

**Algoritma:**
1. HTML'de bir liste ve bir buton oluşturulur.
2. Butona tıklandığında listedeki tüm elemanlar silinir.

```html
<ul id="temizListe">
  <li>Bir</li>
  <li>İki</li>
</ul>
<button id="temizleBtn">Listeyi Temizle</button>
<script>
  document.getElementById("temizleBtn").onclick = function() {
    document.getElementById("temizListe").innerHTML = "";
  };
</script>
```

---

### 11.5. Fareyle Üzerine Gelince Renk Değiştir

**Algoritma:**
1. HTML'de bir kutu (div) oluşturulur.
2. Fareyle kutunun üzerine gelince rengi değişir, çıkınca eski haline döner.

```html
<div id="hoverKutu" style="width:80px;height:80px;background:gray;"></div>
<script>
  const kutu = document.getElementById("hoverKutu");
  kutu.onmouseover = function() {
    kutu.style.background = "green";
  };
  kutu.onmouseout = function() {
    kutu.style.background = "gray";
  };
</script>
```

---

Daha fazla örnekle pratik yaparak DOM'u daha iyi kavrayabilirsin!

---

## 12. Daha Fazla Basit DOM Örneği

### 12.1. Butona Tıklayınca Metni Değiştir

**Algoritma:**
1. HTML'de bir paragraf ve bir buton oluşturulur.
2. Butona tıklandığında paragrafın metni değiştirilir.

```html
<p id="degisen">Eski metin</p>
<button id="degistirBtn">Metni Değiştir</button>
<script>
  document.getElementById("degistirBtn").onclick = function() {
    document.getElementById("degisen").textContent = "Yeni metin!";
  };
</script>
```

---

### 12.2. Sayfadaki Tüm Paragrafları Renkli Yap

**Algoritma:**
1. HTML'de birden fazla paragraf oluşturulur.
2. JavaScript ile tüm paragraflar seçilir.
3. Döngü ile her paragrafın rengi değiştirilir.

```html
<p>Birinci paragraf</p>
<p>İkinci paragraf</p>
<p>Üçüncü paragraf</p>
<script>
  const ps = document.querySelectorAll("p");
  ps.forEach(function(p) {
    p.style.color = "blue";
  });
</script>
```

---

### 12.3. Inputa Girilen Sayıyı 2 ile Çarp

**Algoritma:**
1. HTML'de bir input, bir buton ve bir sonuç alanı oluşturulur.
2. Butona tıklandığında inputtaki sayı alınır.
3. Sayı 2 ile çarpılır ve sonuç ekrana yazılır.

```html
<input id="sayiInput" type="number" placeholder="Bir sayı gir">
<button id="carpBtn">2 ile Çarp</button>
<span id="sonuc"></span>
<script>
  document.getElementById("carpBtn").onclick = function() {
    const sayi = Number(document.getElementById("sayiInput").value);
    document.getElementById("sonuc").textContent = sayi * 2;
  };
</script>
```

---

### 12.4. Listeye Sıralı Eleman Ekle

**Algoritma:**
1. HTML'de bir liste ve bir buton oluşturulur.
2. Butona tıklandıkça listeye sırayla yeni eleman eklenir.

```html
<ul id="siraliListe"></ul>
<button id="ekleSirali">Sıradaki Elemanı Ekle</button>
<script>
  let sira = 1;
  document.getElementById("ekleSirali").onclick = function() {
    const li = document.createElement("li");
    li.textContent = "Eleman " + sira;
    document.getElementById("siraliListe").appendChild(li);
    sira++;
  };
</script>
```

---

### 12.5. Checkbox ile Yazıyı Kalınlaştır

**Algoritma:**
1. HTML'de bir checkbox ve bir paragraf oluşturulur.
2. Checkbox işaretlenince paragraf kalın olur, kaldırılınca normale döner.

```html
<input id="kalinBox" type="checkbox"> Kalın yap
<p id="kalinYazi">Bu yazı kalınlaşacak.</p>
<script>
  document.getElementById("kalinBox").onchange = function() {
    const p = document.getElementById("kalinYazi");
    if (this.checked) {
      p.style.fontWeight = "bold";
    } else {
      p.style.fontWeight = "normal";
    }
  };
</script>
```

---

