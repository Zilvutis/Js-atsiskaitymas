/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";

const ENDPOINT = "https://api.github.com/users";

const output = document.getElementById("output");
output.innerHTML = `
<table id="usersBox" style="display: none;" border="1px solid black" width="100%">
        <thead>
            <tr>
                <th id="thead-style" width="10%">ID</th>
                <th id="thead-style" width="40%">Login</th>
                <th id="thead-style" width="50%">Avatar</th>
            </tr>
        </thead>
        <tbody usersInfo></tbody>
    </table>
`;
function usersData() {
  return fetch(ENDPOINT).then((response) => response.json());
};

usersData()
  .then((data) => {
    createTableSkeleton(data);
  })
  .catch((event) => console.log(event));

function createTableSkeleton(data) {
  let usersInfo = document.querySelector("[usersInfo]");
  usersInfo.innerHTML = "";
  data.map((table) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th width="10%">${table.id}</th>
        <th width="40%">${table.login}</th>
        <th width="50%"><img src="${table.avatar_url}" width="100"></th>
        `;
    usersInfo.append(tr);
  });
}

document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("usersBox").style.display = "";
  document.getElementById("btn").style.display = "none";
  document.getElementById("message").style.display = "none";
});
