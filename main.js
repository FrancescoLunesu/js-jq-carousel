$(document).ready(function(){

//  quando clicco sul pulsante "prev" richiamo una funzione che scorre le immagini
    $(".prev").click(function(){
        prevImage()
    });

//  quando clicco sul pulsante "next" richiamo una funzione che scorre le immagini
    $(".next").click(function(){
        nextImage()
    })


// CREO LE FUNZIONI

// funzione nextImage per andare avanti
function nextImage(){

    // memorizzo in una var l'immagine attiva
    var activeImage = $(".images img.active");

    var cerchio = $(".nav i.active");
    // console.log(activeImage);

    // adesso tolgo la classe active
    activeImage.removeClass("active");
    cerchio.removeClass("active");

// controlla se siamo arrivati all'ultima immagine e se è così, dobbiamo tornare alla prima assegnandole nuovamente la classe active
    if(activeImage.hasClass("last")){
        $(".images img.first").addClass("active");
        $(".nav i.active").addClass("active");
    } else {
        // metto la classe active al next
        activeImage.next().addClass("active");
        cerchio.next().addClass("active");
    }

}

// funzione prevImage per tornare indietro (simile alla funzione precedente)

function prevImage(){
    var activeImage = $(".images img.active");
    var cerchio = $(".nav i.active");

    activeImage.removeClass("active");
    cerchio.removeClass("active");

    if( activeImage.hasClass("first")){
        $(".images img.last").addClass("active");
        $(".nav i.active").addClass("active");
        // metto la classe active al prev
    } else {
    activeImage.prev().addClass("active");
    cerchio.prev().addClass("active");
}
}

});
