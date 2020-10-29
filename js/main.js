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
    var displayer = $('.flex-wrap .displayer')


    // console.log(numPC, numPlayer);
    
    // genero 5 numeri casuali e li inserisco nell'array
    start.click(function(){
        for (i = 0; i < numMax; i++) {

            numRng = Math.floor((Math.random() * difficult) + 1);
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
            num = prompt('Inserisci ');

        }, 7000);
        



    });



}); //<---fine ready