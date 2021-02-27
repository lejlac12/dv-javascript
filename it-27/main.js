function osoba(ime, godine) {
    this.ime = ime;
    this.godine = godine;
    this.godinedopenzije = penzija;
}

function penzija() {
    var godinep = 65 - this.godine;
    return godinep;
}

var lejla = new osoba("Lejla Curt", 24);
var Edin = new osoba("Edin Jasarevic", 30);

document.write(Edin.godinedopenzije());