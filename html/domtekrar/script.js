 // 'kutu' class'ına sahip tüm elementleri seçiyoruz.
  const kutular = document.getElementsByClassName("kutu");
  // İlk kutunun arka planını değiştiriyoruz.
  kutular[0].style.background = "lightblue";
  // İkinci kutunun metnini değiştiriyoruz.
  kutular[1].textContent = "İkinci kutu değişti!";
  kutular[2].textContent="üçüncü kutudur";