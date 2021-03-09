// Dichiarazione variabili
var bombs = [],
    maxNum = 100,
    minNum = 1,
    userNum = 0,
    userNumList = [],
    drum = new Audio('audio/drum.mp3'),
    kids = new Audio('audio/hurray.mp3');
// Genera un numero casuale
function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Controllo se il numero è uguale ai precedenti
function numControl( array, num ) {
  for ( var j = 0; j < array.length - 1; j++ ) {
    if ( num == array[j] ) {
      console.log( num + " dupe");
      return true;
    }
  }
  return false;
}

// Ciclo for per generare i numeri con un ciclo for annidato per controllare che si adiverso dagli altri numeri
for ( var i = 0; i < 16; i++ ) {
  bombs[i] = genRandomNum( maxNum, minNum );
  if ( i >= 1 ) {
    if ( numControl( bombs, bombs[i] ) == true ) {
      i -= 1;
    }
  }
}

console.log("Numeri bomba: " + bombs);
function startGame() {
for ( var i = 0; i < maxNum - 16 ; i++ ) {
  userNum = parseInt( document.getElementById('user-num').value );
  console.log(userNum);
  while ( isNaN( userNum ) ) {
    userNum = parseInt( prompt("Il valore inserito non è valido, inserisci un numero da 1 a 100") );
  }
  userNumList[i] = userNum;
    while ( i >= 1 && numControl( userNumList, userNum ) == true ) {
      userNum = parseInt( prompt("Inserisci un numero da 1 a 100, non barare!!") );
    }
    drum.play();
    if ( numControl( bombs, userNum ) == true ) {
      console.log("Hai perso");
      console.log("Punteggio: " + ( i ) );
      i = maxNum;
    } else if ( userNumList.length == 5 ) {
      console.log("Hai vinto!! Complimenti!!");
      i = maxNum;
    } else {
      setTimeout(() => {  kids.play(); }, 2000);
    }
  }
}
