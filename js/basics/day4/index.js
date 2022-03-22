const names = ["precious", "Uche", "Smith", "George", "Boma", "Favour"];

const list = document.querySelector(".list ul");
const btn = document.querySelector("button");

console.log(list);

function showNames() {
  let listItems = "";
  for (let name of names) {
    const item = `<li>${name}</li>`;
    listItems = listItems + item;
  }

  list.innerHTML = listItems;
}

btn.addEventListener("click", showNames);
