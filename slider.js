const slide =["01.JBL_TuneBeamGhost_ProductImage_Hero_Black-476071_800x.webp","01.JBL_TuneBeamGhost_ProductImage_Hero_Black-476071_800x.webp", "A1J7_1_2019082641397797.jpg", "Galaxy-Buds-Pro-PR_main1.jpg", "AIRPODS MAX.jpg", "fone-jbl-t280-tws-plus-bt-red.png", "MAX.webp", "MULTIPORT.jpg", "Oraimo-Wireless-Earbuds-FREEPODS-3.webp", "Oraimo-Wireless-Earbuds-FREEPODS-3.webp", "ORAIMO.jpg", "POWER BANK.png", "PS5.png", "SMARTWATCH2.jpg", "support.jpg", "watchpng.parspng.com-9.png" ]
let numero=0;

function ChangeSlide(sens){
    numero=numero + sens;
    if(numero > slide.length -1)
        numero=0;
    if (numero <0)
        numero= slide.length -1 ;

    document.getElementById("slide").src = "accessoires/" + slide[numero]  ;
    // alert("bienvenue");
}

setInterval("ChangeSlide(1)", 3000);