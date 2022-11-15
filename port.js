const fs = require('fs');

var stringTxt = fs.readFileSync("binary.dat");   

setValue(stringTxt, 4);


function setValue(stringtxt, i) {

  var firstVal = parseInt(stringtxt[i].toString(16), 16).toString(2).toString()
  firstVal = "0" + firstVal.substring(1, firstVal.length);

  var hex = parseInt(value1, 2)

  console.log(hex); 

  stringtxt[i] = hex;

  console.log(stringtxt[i]); 
}
