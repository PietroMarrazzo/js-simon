$(document).ready(function(){
    console.log('ready');
    // creo due array, uno per il pc, uno per il giocatore
    var numMax = 5;
    var difficult = 50;
    var time = 10;
    var numPC = [];
    var numPlayer = [];
    var start = $('.flex-wrap .btn');
    var numRng = 0;
    var num = 0;
    var numbers = $('.flex-wrap .numbers');
    var displayer = $('.flex-wrap .displayer');
    var punteggio = 0;
    var indovinati = [];

    // console.log(numPC, numPlayer);
    
    // genero 5 numeri casuali e li inserisco nell'array
    start.click(function(){
        for (i = 0; i < numMax; i++) {

            do {
                numRng = Math.floor((Math.random() * difficult) + 1)
            } while (numPC.includes(numRng));
            // numRng = Math.floor((Math.random() * difficult) + 1);
            numPC.push(numRng);
        } 
        console.log(numPC);

        // nascondo btn
        $(this).hide();

        // mostro i numeri
        displayer.show();
        numbers.text(numPC);
        

        // dopo 30 secondi - 7 di per prova - nascondo i numeri e inserisco valori
        setTimeout(function(){

            displayer.hide();
            
            // chiedo i numeri al giocatore e verifico
            for (i=0; i < numMax; i++){
                var counter = numMax - i;
                num = parseInt(prompt('Inserisci un valore alla volta \n' + 'Ancora' + ' ' + counter).trim());

                // verifico array contenga le scelte del giocatore
                if (numPC.includes(num)) {
                    
                    punteggio = punteggio + 1;
                    indovinati.push(num);
                }
            } 
            console.log(indovinati);
            console.log(punteggio);

            // risultati
            $('.result').show(2000);

            $('.result .indovinati').text(indovinati);
            $('.result .punteggio').text(punteggio);

            // replay
            $('.result .btn').click(function(){
                window.location.reload(); // <--- refresh pagina trovato su internet
            })

        }, 3000);
        



    });



}); //<---fine ready