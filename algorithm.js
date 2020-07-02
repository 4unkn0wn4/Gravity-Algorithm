"use strict"
var usuario = prompt("¿cual es tu peso?");
while (isNaN(usuario)){
  usuario = prompt("¿cual es tu peso?");
}
var planeta = parseInt(prompt("Elige tu planeta\n1 es marte, 2 es jupiter:"));
while (isNaN(planeta) || planeta != 1 && planeta != 2 ){
  planeta = parseInt(prompt("Elige tu planeta\n1 es marte, 2 es jupiter:"));
}
//------------------------------------------------------------------------------
var peso = parseFloat(usuario);
var gravedad_tierra = 9.8;
var gravedad_marte = 3.7;
var gravedad_jupiter = 24.8;
var peso_final;
//---------------------------------------------------------------------------
if (planeta == 1){
  peso_final = peso * gravedad_marte / gravedad_tierra;
}else if(planeta == 2){
  peso_final = peso * gravedad_jupiter / gravedad_tierra;
}/*else{
  peso_final = alert("eres un cabronazo tio no me jodais mi pagina")
}*/
//---------------------------------------------------------------------
peso_final = (peso_final);
if (peso_final == peso * gravedad_marte / gravedad_tierra){
  document.write("<strong>Tu peso en marte es de: </strong>" + peso_final.toFixed(2) + " <strong>kilos</strong>");
}else if (peso_final == peso * gravedad_jupiter / gravedad_tierra){
  document.write("<strong>Tu peso en jupiter es de: </strong>" + peso_final.toFixed(2) + " <strong>kilos</strong><br>")
}
