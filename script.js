alert("Adınızı Giriniz");

window.onload = write;
ad = prompt("Adınızı Giriniz");
yeni_yil_mesaji = "Sağlıklı mutlu ve nice yeni yıllara, umarım herşey gönlünce olur :)";

let text = `>>>ad = input()\n>>>yeni_yil_mesaji = \"${yeni_yil_mesaji}\"\n\n>>>def kutlama_mesaji(ad, mesaj):\n\t return 'Merhaba {}, {}'\n\t.format(ad.upper(), mesaj)\n\n>>>print(kutlama_mesaji(${ad}, yeni_yil_mesaji))\n\n Merhaba ${ad.toUpperCase()}, ${yeni_yil_mesaji}\n\n\n#Ahmet Can Karataş`;

function write() {
    code = document.getElementById("code");
    let i = 0
    setInterval(function() {
        if (i < text.length) {
            code.innerHTML = code.innerHTML + text[i];
            i++;
        }
    }, 80);
}