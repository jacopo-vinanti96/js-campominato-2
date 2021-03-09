
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

// Onclick inizia la funzione
function startGame() {

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

  // Selezione livello e relativi controlli
  var level = parseInt( prompt("INSERISCI: \n0 = livello facile \n1 = livello normale \n2 = livello difficile") );
  while ( level < 0 || level > 2 || isNaN( level ) ) {
    level = parseInt( prompt("Il valore inserito non è valido \nINSERISCI: \n0 = livello difficile \n1 = livello normale \n2 = livello facile") );
  }
  if ( level == 1 ) {
    maxNum = 80;
  } else if ( level == 2 ) {
    maxNum = 50;
  }
  
  // Ciclo for per generare i numeri con un ciclo for annidato per controllare che si adiverso dagli altri numeri
  for ( var j = 0; j < nBombe; j++ ) {
    bombs[j] = genRandomNum( maxNum, minNum );
    if ( j >= 1 ) {
      if ( numControl( bombs, bombs[j] ) == true ) {
        j -= 1;
      }
    }
  }
  console.log("Numeri bomba: " + bombs);


  // Ciclo che riceve il numero in input, controlla la validità, controlla se è una bomba o meno. Terminati i numeri sicuri il contatore viene incrementato per fermare il ciclo
  for ( var i = 0; i < maxNum - nBombe ; i++ ) {
    userNum = parseInt( prompt("Inserisci un numero da " + minNum + " a " + maxNum ) );
    while ( userNum < minNum || userNum > maxNum || isNaN( userNum ) ) {
      userNum = parseInt( prompt("Il valore inserito non è valido, Inserisci un numero da " + minNum + " a " + maxNum) );
    }
    userNumList[i] = userNum;
    while ( i >= 1 && numControl( userNumList, userNum ) == true ) {
      userNum = parseInt( prompt("Inserisci un numero da " + minNum + " a " + maxNum + ", non barare!!") );
    }
    if ( numControl( bombs, userNum ) == true ) {
      // i = maxNum;
      boom.play();
      return output.innerHTML = "Hai perso... Punteggio: " + i;
    } else if ( userNumList.length == maxNum - nBombe ) {
      // i = maxNum;
      kids.play();
      return output.innerHTML = "Hai vinto!! Complimenti!!";
    }
  }
}
