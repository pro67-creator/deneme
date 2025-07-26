console.log('Hello, World!');
// Değişken tanımlama ve yazdırma
const mathematics = 60;
const music = 77;
const history = 80;

const average = (mathematics + music + history) / 3; //toplamaların ortalaması
console.log(average)//ortalama hesaplama

const ispass = average >= 50? 'çok çalışkan biri':'kalmak için uğraşmış'; //ortalama 50 ve üzeri ise geçer
console.log(ispass); //sonucu yazdırma

console.log(`Matematik: ${mathematics}, Müzik: ${music}, Tarih: ${history}`);
console.log(`Ortalama: ${average}, Sonuç: ${ispass}`); 

// başka bir örnek alt tarafta 

const Matematik =40;
const Müzik = 70;
const Tarih = 90;

const Ortalama = (Matematik + Müzik + Tarih) / 3; //toplamaların ortalaması
console.log(Ortalama); //ortalama hesaplama

const isPass = Ortalama >= 50 ? 'geçti' : 'kaldı'; //ortalama 50 ve üzeri ise geçer
console.log(isPass); //sonucu yazdırma
console.log(`Matematik: ${Matematik}, Müzik: ${Müzik}, Tarih: ${Tarih}`);
console.log(`Ortalama: ${Ortalama}, Sonuç: ${isPass}`
); //sonucu yazdırma
// Başka bir örnek
const sayı1 = 110;
const sayı2 = 120;
const çarpim = (sayı1 * sayı2) //sayıların çarpımı
console.log(çarpim) //çarpım sonucunu yazdırma
// Başka bir örnek
const sayı3 = 10;
const sayı4 = 20;
const toplam = (sayı3 + sayı4) //sayıların toplamı
console.log(toplam) //toplam sonucunu yazdırma


// Üçgenin çevresi ve alanı hesaplama
let taban = 8;
let yükseklik = 5;
let alan = (taban * yükseklik) / 2; //üçgenin alanı

console.log("taban;"+taban);
console.log("yükseklik;"+yükseklik);
console.log("alan;"+alan); //üçgenin alanını yazdırma

// Dikdörtgenin çevresi hesaplama
let uzunkenar = 12;
let kısakenar  = 7;
let çevre = 2;
çevre = (uzunkenar + kısakenar) * 2; //dikdörtgenin çevresi
console.log("uzunkenar;"+uzunkenar);
console.log("kısakenar;"+kısakenar);
console.log("çevre;"+çevre); //dikdörtgenin çevresini yazdırma

let dogumyılı = 1998;
let bugününYılı = 2025;
let yaş =26;

console.log("doğum yılı: " + dogumyılı);
console.log("bugünün yılı: " + bugününYılı);
console.log("yaş: " + yaş); //yaşı yazdırma

let celsius = 25;
let fanrenheit =77;

console.log("celsius: " + celsius);
console.log("fahrenheit: " + fanrenheit); //sıcaklık değerlerini yazdırma

let vize = 75;
let final = 85;
let ortalama = 81;
ortalama = (vize * 0.4) + (final * 0.6); //ortalama hesaplama
console.log("vize: " + vize);


let yarıçap = 6;
let alanı = 113.04;
alan = Math.PI * yarıçap * yarıçap; //dairenin alanı
console.log("yarıçap: " + yarıçap);
console.log("alanı: " + alanı); //dairenin alanını yazdırma

 

let anapara = 1000
let faizoran =0.05
let süre = 3
let toplamtutar =1150
toplamtutar = anapara * (1 + faizoran * süre);
console.log("toplam tutar: " + toplamtutar)

let kenar = 9 
let alansı = 81
let çevrenin = 36  
çevrenin = 4 * kenar; //karenin çevresi
console.log("kenar: " + kenar);
console.log("alan: " + alansı);
console.log("çevre: " + çevrenin);

let sayısi =45;
let sayısı =38;
let buyuksayi = sayısi >sayısı ? sayısi : sayısı;
let kucuksayi = sayısi > sayısı ? sayısi : sayısı;

console.log("birinci sayı: " + sayısi );
console.log("ikinci sayı: " + sayısı );
console.log("büyük sayı: " + buyuksayi );
console.log("küçük sayı: " + kucuksayi );






const boy = 1.75;
const kilo = 70;
const bmi = 22.86;
console.log("Boy: " + boy);
console.log("Kilo: " + kilo);
console.log("BMI: " + bmi);

let kdvsizfiyat = 127.12;
let kdvtutarı = kdvsizfiyat * 0.18; // %18 KDV hesaplama
let kdvlifiyat = kdvsizfiyat + kdvtutarı;

console.log("KDV'siz Fiyat: " + kdvsizfiyat);
console.log("KDV Tutarı: " + kdvtutarı);
console.log("KDV'li Fiyat: " + kdvlifiyat);

let mesafe =120;
let hız = 90;
süre = mesafe/hız
console.log ("mesafe: " + mesafe);
console.log ("hız: " + hız);
console.log ("süre: " + süre);


let yarıcap = 8
let cevre =  ( Math.PI = yarıcap**2)
console.log ("yarıcap: "+ yarıcap);
console.log ("yarıcap: "+ yarıcap);

let tüketim = 250 ;
 let ilk100kwh = 100;
 let ilk100ucret = ilk100kwh * 0.50;
 let kalan = tüketim - ilk100kwh;
 let kalanucret = kalan * 0.75;
 let toplamI = ilk100ucret + kalanucret;

 console.log("tüketim: " + tüketim +"kwh");
 console.log ("ilk100kwh: "+ ilk100ucret +"tl");
console.log ("kalan: " +kalan +"kwh" + kalanucret + "tl");
console.log("toplam: " + toplamI + "tl");


let kenar1 = 3;
let kenar2 =4;
let kenar3=5;
let cevresi = kenar1 + kenar2 + kenar3;
console.log("kenar1: " + kenar1 );
console.log("kenar2: " + kenar2);
console.log("kenar3: " + kenar3 );
console.log ("cevresi " + cevresi);

let toplamsaniye = 7325;
let  saat = Math.floor(toplamsaniye / 3000);
let kalansaniye = toplamsaniye % 3600;
let dakika = Math.floor(kalansaniye / 60);
let saniye = kalansaniye % 60;

console.log ("toplam saniye: " + toplamsaniye);
console.log ("saat: " + saat);
console.log ("dakika: " + dakika);
console.log ("saniye: " + saniye);


let basepara = 5000;
let faiz =0.08;
let yıl = 4;
let toplamları = basepara * (1 + faiz)**yıl

console.log("basepara: "+ basepara);
console.log ("faiz: " + faiz);
console.log ("yıl: " + yıl);
console.log ("toplam: " + toplamları);

let tabanalanı = 36 ;
let yükseklikleri = 10;
hacim = (tabanalanı * yükseklikleri)/3

console.log("tabanalanı: " + tabanalanı );
console.log ("yükseklikleri: " + yükseklikleri );
console.log("hacim: " + hacim);


let mesafesi = 450;
let yakıt = 35;
let mesafeyakıtoranı = mesafesi/yakıt;
let km100tüketim = 100/mesafeyakıtoranı


console.log("mesafesi: " + mesafesi + " km");
console.log("yakıt: " + yakıt +" litre");
console.log("100 km tüketim: " + km100tüketim + " litre");

let orijinallfiyat = 280;
let ilkindirim = orijinallfiyat*0.25 ;
let ilkindirimsonrası = orijinallfiyat-(ilkindirim);
let ekindirim = ilkindirimsonrası>280  ?( ilkindirimsonrası*0.05): 10.5
let finalfiyat = ilkindirim-ekindirim 
console.log("orijinallfiyat: "+orijinallfiyat);
console.log("ilkindirim: " +ilkindirim);
console.log("ilkindirimsonrası: "+ ilkindirimsonrası);
console.log("ekindirim: "+ekindirim);
console.log("finalfiyat: "+finalfiyat);


let dikkenar =8;
let dikkenar2= 15 ;
let hipotenüs= Math.sqrt((dikkenar**2)+(dikkenar2**2))
console.log("dikkenar"+ dikkenar);
console.log("dikkenar2"+ dikkenar2);
console.log("hipotenüs"+ hipotenüs);

//22 de kalındı ordan devam edilebilir





// for switch else örnekleri
let beden = 60;
let marh = 50;
let gol = 70;
let dersnotu =  (marh+beden+gol)/3
console.log("ortalama" + dersnotu);
if(dersnotu =>45){console.log("geçti")}
    else console.log("kaLDI")




 for (let i=0; i <= 100; i++){
if ( i%2 ==1){

console.log("cift" + i );
}
else {
console.log("tek" + i );



}
 }
 



let not = 75;
if (not >= 90){

    console.log("pekiyi");
} else if (not >= 70) {
 console.log("iyi");
}else if (not >=50){
console.log("kalmak üzere")
} else {
  console.log("kaldı");
}


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





    let sıcaklık = 12
    if ( sıcaklık < 0){
    console. log(" durum:çok soğuk ")
    } else if (sıcaklık <= 15){
    console.log(" durum:sıcak olmaya yakın ")
    } else if (sıcaklık <=20){
    console.log(" durum:sıcaktır dısarda olomayalım ")
   
    
    }

    let fiz =30
    let bed =100
    let webtasarım = 100
    let tarih = 80
    let staj = 100
    let ortalamalamarı = (fiz+bed+webtasarım+tarih+staj)/3
    if (ortalamalamarı=>50) {console.log("geçti")
        
    } else {console.log("kaldı")
        
    }    

     let gun =5
     switch(gun){
   case 1:
   console.log("pazartesi");
   break;
   case 2:
   console.log("salı");
   break;
   case 3:
   console.log("çarsamba");
   break;
   case 4:
   console.log("persembe");
   break;
   case 5:
   console.log("cuma");
   break;
   case 6:
   console.log("cumartesi");
   break;
   case 7:
   console.log("pazar");
   break;
     }

   let not1 =55;
   let harf;
   if (not >= 90){
   harf = "AA";
   }else if (not1 >=90){
  harf = "BA" ;
   }else if (not1 >=89){ 
   harf = "BA";
   }else if (not1 >=85){
    harf = "CB";
   }else if (not1 >=80){
    harf = "CC";
   }else if (not1 >=75){
    harf = "DC";
   }else if (not1 >=65){
    harf = "DD";
   }else if (not1 >=60){
    harf="F";
   }else  (not1 >=59)
    harf ="FF";
 
   console.log (" not: "+ not1)
   console.log(" harf: "+harf)
   

   let ay = 4 
   switch(ay){
 case 12:
  case 1 :
  case 2:
  console.log ("kış")
  break;
    case 3:
   case 4:
   case 5:
  console.log ("ilkbahar")
  break;
  case 6:
 case 7:
case 8:
  console.log ("yaz")
 break;
 case 9:
  case 10:
  case 11:
 console.log("sonbahar")
  break;
default:
  console.log("böyle bir ay numarası yok")
   }

   

 let yaşı = 60
  if (yaşı >= 0 && yaşı <= 12){
console.log("çocuk")
  } else if (yaşı <= 17){
console.log ("ergen")
  }else if (yaşı <= 25){
    console.log ("genç")
  } else if (yaşı <= 35){
console.log("yetişkin")
  }else if (yaşı <= 50){
  console.log ("yaşlı yetişkin")
  }else if (yaşı <= 60){
    console.log("yaşlı")
  }
  
let aynumarası = 9
switch(aynumarası){
case 1:
console.log ("ocak");
break;
case 2:
console.log ("subat");
break;
case 3:
console.log ("mart");
break;
case 4:
console.log ("nisan");
break;
case 5:
console.log ("mayıs");
break;
case 6:
console.log ("haziran");
break;
case 7:
console.log ("temmuz");
break;
case 8:
console.log ("oğustos");
break;
case 9:
console.log ("eylül");
break;
case 10:
console.log ("ekim");
break;
case 11:
console.log ("kasım");
break;
case 12:
console.log ("aralık");
break;

}
let vizeci = 50;
let finalci = 70;
let ortalama2 = (vizeci* 0.4) *+(finalci *0.6);
if (ortalama2 >= 60) {
console.log("geçtim");
    
} else {
console.log("kaldım");
    
}

let harf1 = "s";
switch(harf1){
case  "i":
  case  "e":
    case  "ı":
      case  "o":
        case  "ö":
          case  "u":
            case  "ü":
                  console.log("sesli harf")
                  break;
             
                  case "s":
                    console.log("sessiz harf")
                 break;
}
         
  let  a= 12, b=45, c=27;
  let enBuyuk;
  if (a >= b && a >= c){
  enBuyuk = a;
  } else if ( b >= a && b >=c){
enBuyuk=b;

  }else{
  enBuyuk = c;
  }
console.log("enBuyuk:"+ enBuyuk);

let not2 = 1;
switch(not2){
  case 1:
    console.log("AA");
    break; 
    case 2:
    console.log("BA");
    break; 
    case 3:
    console.log("BB");
    break; 
    case 4:
    console.log("CC");
    break; 
    case 5:
    console.log("FF");
    break; 
    default:
      console.log("böyle bir sına notu yoktur saçmalamayın")
  

}

let ehliyetyaşı= 17;
if (ehliyetyaşı >= 18) {console.log("ehliyet alabilir")
  
} else {console.log("ehliyet alamaz")
  
}

let birim ="c";
switch(birim){
case "c":
console.log("celsius")
break;
case "f":
console.log("fanhenheit")
break;
default:
  console.log("baska bir sıcaklık birimi tanımlanmadı")
  

}

let k1 = 5, k2 = 5 , k3 =8;
if (k1 === k2 && k2 === k3){
console.log ("eşkenar")
}else if (k1 === k2 || k1 === k3 || k2 === k3){
console.log("ikizkenar");
}else {
console.log ("çesitkenar")
}



let saati =21 ;
if (saati >=6 && saati <=11){
console.log("sabah");

}else if (saati<=17) {
  console.log ("öğlen")

} else if (saati<=23) {
  console.log ("akşam")

}else {
  console.log ("gece")
}

// sırayla saydırma komutu
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i =11 ; i <=20; i++){
  console.log(i);

  

}
for(let i = 21 ; i<=30; i++){
console.log(i);
    
  }
// üstte ki for düngüsü
let gg= 25
let pp= 30
let ff =30
let sonuçlar =(gg+pp+ff)/3
if (sonuçlar>50) {("geçti")
  
} else {("kaldı")
  
}

for (let i = 1; i <=10; i++)  {
  if (i% 2===0 )

console.log(i); 
}

for (let i = 1; i <=15; i++){
if (i % 2 !== 0){
console.log(i);

}
}

for ( let i =1; i <=21; i++){
if ( i % 3 === 0){
console.log(i)


}

}
// arrays örnekleri
let arr = ["1","2","3"];
console.log(arr);

let sü = []
console.log (sü)

let süü = [1,2];
süü.push(3)
süü.push(4)
süü.push(5)
console.log(süü); //["1","2","3"]

let süüü = ["10","20","30"];
console.log(süüü.length);


let süüüü = ["5","10","15"]
for (let i = 0; i < süüüü.length; i++){
console.log (süüüü[i]);
}
let süüüüü = ["a", "b", "c"];
for (let item of arr) {
  console.log(item);
}

let süüüüüü =  [1,2,3];
süüüüüü  [1]=20;
console.log(arr); //[1. 20 , 3]

let süüüüüüü = [1,2,3];
süüüüüüü.pop();
console.log(süüüüüüü); //[1,2]


let süüüüüüüü= [1,2,3];
süüüüüüüü.shift();
console.log(süüüüüüüü); // [2,3]

let süüüüüüüüü= [2,3];
süüüüüüüü.unshift(1);
console.log(süüüüüüüüü) // 1 2 3

let süüüüüüüüüü = [9,5,8,7,6,4,3,1,2];
süüüüüüüüüü.sort();
console.log(süüüüüüüüüü); //[1,2,3,4]

let süüüüüüüüüüü = [1,2,3];
süüüüüüüüüüü.reverse();
console.log(süüüüüüüüüüü)// 321

let süüüüüüüüüüüü = [10,20,30];
console.log(süüüüüüüüüüüü.includes(20)); //true

let süüüüüüüüüüüüüü = [5, 10, 15];
console.log(süüüüüüüüüüüüüü.indexOf(10)); // 1


let süüüüüüüüüüüüü = [1,2,3];
let  yeni = süüüüüüüüüüüüü.slice();
console.log( yeni);


let ü = [1,2];
let ı = [3,4];
let r = ü.concat(b);

let süüüüüüüüüüüüüüü = [10,20,30,40];
console.log (süüüüüüüüüüüüüüü.slice(1,3)); //20 ,30


let süüüüüüüüüüüüüüüü = [ "a" , "b" , "c"];
console.log (süüüüüüüüüüüüüüüü.join("-")) // a-b-c

let array = [1,2,3];
array.length= 0;
console.log (array); // []


let sayi = 8 ;
if (sayi % 2 === 0){
 console.log ("çift sayı");
}else {

  console.log("tek sayı");
}
// 10 kadar sayıları yazdırırrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
for (let i = 1; i<= 10; i++){
console.log (i);

}
// 10 kadar sayıları yazdırırrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr


let dizi = [4,10,2,90,12];
let max = dizi [0];

for (let i = 1; i < dizi.length; i++) {

if (dizi[i] > max){

max = dizi[i];

}

}
console.log("en büyük sayı",max);


 // giriş başarılı  ve giriş basarısız komutu yazma //
const adı ="admin"
const password="123"
if (adı =="admin")

  if (adı =="admin")
  
if (password == "1234"){
console.log("giriş başarılı");
}else{
 console.log("giriş başarısız");
}


//function örnekleriiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii//
// Klasik fonksiyon
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 5));

// Arrow fonksiyon
const toplaArrow = (a, b) => a + b;
console.log(toplaArrow(3, 5));


function buyukharfyap(dizi){
let yenidizi = [];
let i = 0;
while (i< dizi.length){
if (typeof dizi === "string"){
  yenidizi.push(dizi [i]. toUpperCase())
}else {
  yenidizi.push(dizi[i]);
}
i++;
}
return yenidizi;
}
console.log(buyukharfyap(["elma", "armut","karpuz", "muz"]));

//genel tekrar soruları

//1
 let toplamacı = 30
let toplama = 40
let sonuç =(toplamacı+toplama)
console.log("sonuç" + sonuç)
//2
for (let i= 1; i <= 10; i++ ){
console.log(i*i);
}
//3
 for (let i=0; i <= 6; i++)
if ( i%2 == 1){

console.log("cift" + i );
}
else 
console.log("tek" + i );
//4
for ( let i = 1; i <=10; i++){
console.log(i)
//5
}
for ( let i = 1; i >=10; i--){
console.log(i)
}
//6



function buyukharfyap(dizi){
let yenidizi = [];
let i = 0;
while (i< dizi.length){
if (typeof dizi === "string"){
  yenidizi.push(dizi [i]. toUpperCase())
}else {
  yenidizi.push(dizi[i]);
}
i++;
}
return yenidizi;
}
console.log(buyukharfyap(["elma", "armut","karpuz", "muz"]));

let arrb = [5, 10, 15];
for (let i = 0; i < arrb.length; i++) {
  console.log(arrb[i]);
}

let arrg = ["a", "b", "c"];
for (let item of arrg) {
  console.log(item);
}

let arrs = [1, 2, 3];
arrs[1] = 20;
console.log(arrs); // [1, 20, 3]

let arrf = [1, 2, 3];
arrf.pop();
console.log(arrf); // [1, 2]

let arrd = [1, 2, 3];
arrd.shift();
console.log(arrd); // [2, 3]

let arri = [2, 3];
arri.unshift(1);
console.log(arri); // [1, 2, 3]


let arra = [3, 1, 4, 2];
arra.sort();
console.log(arra); // [1, 2, 3, 4]

let arrş = [1, 2, 3];
arrş.reverse();
console.log(arrş); // [3, 2, 1]
  
let arrq = [10, 20, 30];
console.log(arrq.includes(20)); // true



dizi.map(function(eleman, index, dizi) {
    // dönüştürme işlemi
    return yeniEleman;
});


 




