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
    <div >
      <input type="checkbox" />
      <p class="line-through">${u}</p>
    </div>
    <div class="navi">
      <i class="fa fa-edit pen"></i>
     
      <i class="fa fa-trash remove"></i>
    </div>
  </li>`;
  }
  ul.innerHTML = content;
  // for (let item of document.querySelectorAll(".remove")) {
  //   item.addEventListener("click", function () {
  //     todos.pop();
  //     displayTodos();
  //   });
  // }
  let items = document.querySelectorAll(".remove");
  for (let index in items) {
    items[index].addEventListener("click", function () {
      // todos.pop();
      // displayTodos();
      console.log(index);
      // Array.from(items).splice(index, 1);
      displayTodos();
    });
  }
  // for (let g of document.querySelectorAll(".remove")) {
  //   g.style.cursor = "pointer";
  //   g.style.padding = "10px";
  //   g.style.backgroundColor = "#007bff";
  // }

  let strike = document.querySelector(".line-through");
  strike.addEventListener("click", function(){
    
  })
  
}

document.querySelector("button").addEventListener("click", function () {
  todos.push(document.querySelector("input").value);
  document.querySelector("input").value = "";
  displayTodos();
});

document.querySelector("checkbox").addEventListener("click", function () {
  todos.strike(document.querySelector("p"));
  displayTodos();
});

// document.querySelectorAll(".remove").addEventListener("click", function () {
//   todos.classlist;
// });
