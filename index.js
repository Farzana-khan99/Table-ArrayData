let data = ["jhon 10", "Doe 9", "Mark 10", "James 8"];

function fetchData(array) {
  let table = document.querySelector("table");
  for (let i = 0; i < array.length; i++) {
    let row = `<tr><td> ${i} </td>
    <td>${array[i]}</td>
  <td><button onclick="deleteItem()">delete</button</td>
  </tr>`;
    table.innerHTML += row;
   
  }
 
}

function deleteItem(index) {
  data.splice(index, 1);
  updateArray();
}

function updateArray() {
  table = document.querySelector("table");
  table.innerHTML = "";
  fetchData(data);
}

fetchData(data);
