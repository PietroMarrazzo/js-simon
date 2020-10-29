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


    // console.log(numPC, numPlayer);
    
    // genero 5 numeri casuali e li inserisco nell'array
    start.click(function(){
        for (i = 0; i < numMax; i++) {

            numRng = Math.floor((Math.random() * difficult) + 1);
            numPC.push(numRng);
        } 
        console.log(numPC);



        alert('Guarda e ricorda! \n' + numPC);
        

        // espongo i numeri con un alert per 30 secondi - 7 di per prova
        setTimeout(function(){

            
            num = prompt('Inserisci ');

        }, 7000);
        



    });



}); //<---fine ready