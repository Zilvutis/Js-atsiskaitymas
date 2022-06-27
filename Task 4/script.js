/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'

const ENDPOINT = 'cars.json';

const output = document.getElementById('output');
function getCars() {
    return fetch(ENDPOINT)
    .then(response => response.json())
};

getCars().then(data => {
    data.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <h2>${car.brand}</h2>
            <ul>
                ${car.models.map(model => `<li>${model}</li>`).join('')}
            </ul>
        `;
        output.appendChild(carElement);
    }
    );
});
        