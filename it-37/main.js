function ispisiVrijeme() {
    var now = new Date();
    var sat = now.getHours();
    var minuta = now.getMinutes();
    var sekunde = now.getSeconds();

    document.write(sat + ":" + minuta + ":" + sekunde + "<br>")
}

setInterval("ispisiVrijeme()", 3000);