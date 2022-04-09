let ul = document.querySelector("ul");
console.log(ul);


fetch ("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
  .then((data) => {
let docFrag = new DocumentFragment();
  data.forEach((item, index) =>
  {
      let div = document.createElement("div");
      if (index < 20) {
        //   let div = document.createElement("div");
          let li = document.createElement("li");
        //   let img = document.createElement("img");
        // img.src = item.url;
        // li.append(img);
          let p = document.createElement("p");
        p.innerText = item.name;
        li.append(p);
        div.append(li);
        docFrag.append(div);
      }
      if (index < 20) {
          let li = document.createElement("li");
          let p = document.createElement("p");
           p.innerText = item.email;
        li.append(p);
        div.append(li);
        docFrag.append(div);
      }
  });
ul.append(docFrag);
})

.catch((err) => console.error(err));