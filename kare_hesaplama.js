const sayilar = [1,2,3,4,5];

function kare(sayilar) {

    return sayilar.map(sayi => sayi * sayi);
}
    
const yeniSayilar = kare(sayilar);

console.log(yeniSayilar);
