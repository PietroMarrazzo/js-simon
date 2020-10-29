$(document).ready(function(){
    console.log('ready');
    // creo due array, uno per il pc, uno per il giocatore
    var numMax = 5;
    var difficult = 50;
    var numPC = [];
    var numPlayer = [];
    var start = $('.flex-wrap .btn');
    var numRng = 0;
    // console.log(numPC, numPlayer);
    
    // genero 5 numeri casuali e li inserisco nell'array
    start.click(function(){
        for (i = 0; i < numMax; i++) {

            numRng = Math.floor((Math.random() * difficult) + 1);
            numPC.push(numRng);
        } 
        console.log(numPC);

        // espongo i numeri con un alert
        alert('Guarda e ricorda! \n' + numPC)

    });



}); //<---fine ready