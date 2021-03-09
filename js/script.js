// Dichiarazione variabili
var bombs = [];


function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function numControl( array, counter ) {
  for ( var j = 0; j < array.length - 1; j++ ) {
    if ( array[counter] == array[j] ) {
      console.log(array[counter] + " dupe");
      return counter -= 1;
    }
  }
  return counter;
}

// Ciclo for per generare i numeri con un ciclo for annidato per controllare che si adiverso dagli altri numeri
for ( var i = 0; i < 16; i++ ) {
  bombs[i] = genRandomNum( 100, 1 );
  if ( i >= 1 ) {
  i = numControl( bombs, i );
  }
}

console.log(bombs);
