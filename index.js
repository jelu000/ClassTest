/*
Exempel hur man sorterar objekt av en class i javascript.
Använder Filter för att välja produkter billigare än 1000kr
Använder Map för att lista produkterna.
*/
class Produkt{
  constructor(namn, pris){
    this.namn = namn;
    this.pris =pris;
  }
}

let produkt1 = new Produkt("hatt", 120);

let produkter = [];
produkter.push(produkt1);
produkter.push(new Produkt("snowboard", 2250));
produkter.push(new Produkt("skateboard", 899));
produkter.push(new Produkt("fiskeset", 899));
produkter.push(new Produkt("gräsfrö", 129));

//Används för att skriva ut produkter
function getProdInfo(item, index) {
  var fullinfo =  `${index+1}. Produkt: ${item.namn} Pris: ${item.pris}` ;
  return fullinfo;
}

//Används för att filtrera ut produkter billigare än 1000
function kollaPris(produkt) {
  return produkt.pris < 1000;
}
//Använder filter() med funktionen kollaPris() som argument
let billigaprodukter = produkter.filter(kollaPris);

//Sorterar efter pris
billigaprodukter.sort(function(b, a){return b.pris-a.pris});
//Skriver ut listan
console.log(billigaprodukter.map(getProdInfo));
