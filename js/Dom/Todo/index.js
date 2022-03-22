const todos = [];

const ul = document.querySelector("ul");

// function displayTodos() {
//   ul.innerHTML = "<h1>Smith</h1>";
// }

function displayTodos() {
  let content = "";
  for (let u of todos) {
    content =
      content +
      `  <li>
    <div>
      <input type="checkbox" />
      <p>${u}</p>
    </div>
    <div>
      <p>Edit</p>
      <div>del</div>
    </div>
  </li>`;
  }
  ul.innerHTML = content;
}

document.querySelector("button").addEventListener("click", function () {
  todos.push(document.querySelector("input").value);
  document.querySelector("input").value = "";
  displayTodos();
});
