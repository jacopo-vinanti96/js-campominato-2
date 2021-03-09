// Dichiarazione variabili
var bombs = [],
    maxNum = 100,
    minNum = 1,
    nBombe = 16;
    output = document.getElementById('output'),
    userNum = 0,
    userNumList = [],
    boom = new Audio('audio/oooh.mp3'),
    kids = new Audio('audio/hurray.mp3');

// Genera un numero casuale
function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Controllo se il numero è uguale ai precedenti
function numControl( array, num ) {
  for ( var j = 0; j < array.length - 1; j++ ) {
    if ( num == array[j] ) {
      return true;
    }
  }
  return false;
}


function startGame() {
  // Ciclo for per generare i numeri con un ciclo for annidato per controllare che si adiverso dagli altri numeri
  for ( var j = 0; j < nBombe; j++ ) {
    bombs[i] = genRandomNum( maxNum, minNum );
    if ( j >= 1 ) {
      if ( numControl( bombs, bombs[j] ) == true ) {
        j -= 1;
      }
    }
  }
  console.log("Numeri bomba: " + bombs);
  var level = parseInt( prompt("INSERISCI: \n0 = livello facile \n1 = livello normale \n2 = livello difficile") );
  while ( level < 0 || level > 2 || isNaN( level ) ) {
    level = parseInt( prompt("Il valore inserito non è valido \nINSERISCI: \n0 = livello difficile \n1 = livello normale \n2 = livello facile") );
  }
  if ( level == 1 ) {
    maxNum = 80;
  } else if ( level == 2 ) {
    maxNum = 50;
  }
  for ( var i = 0; i < maxNum - nBombe ; i++ ) {
    userNum = parseInt( prompt("Inserisci un numero da 1 a 100") );
    while ( userNum < minNum || userNum > maxNum || isNaN( userNum ) ) {
      userNum = parseInt( prompt("Il valore inserito non è valido, inserisci un numero da 1 a 100") );
    }
    userNumList[i] = userNum;
    while ( i >= 1 && numControl( userNumList, userNum ) == true ) {
      userNum = parseInt( prompt("Inserisci un numero da 1 a 100, non barare!!") );
    }
    if ( numControl( bombs, userNum ) == true ) {
      output.innerHTML = "Hai perso... Punteggio: " + i;
      i = maxNum;
      boom.play();
    } else if ( userNumList.length == maxNum - nBombe ) {
      output.innerHTML = "Hai vinto!! Complimenti!!";
      i = maxNum;
      kids.play();
    }
  }
}
