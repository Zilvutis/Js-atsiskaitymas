/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict"

document.getElementById("submit-btn").addEventListener("click", convertWeight);

function convertWeight(event) {
  event.preventDefault();
  let weight = document.getElementById("search").value;
    const lb = Number(weight) * 2.2046;
    const g = Number(weight) / 0.0010000;
    const oz = Number(weight) * 35.274;
    const result = `Svarai (lb): ${lb} <br> Gramai (g): ${g} <br> Uncijos (oz): ${oz}`;

    document.getElementById("output").innerHTML = result;
};