let ul = document.querySelector("ul");
console.log(ul);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    let docFrag = new DocumentFragment();
    data.forEach((item, index) => {
      let div = document.createElement("div");

      //   let div = document.createElement("div");
      let li = document.createElement("li");
      //   let img = document.createElement("img");
      // img.src = item.url;
      // li.append(img);
      let userHolder = document.createElement("div");
      userHolder.className = "user-holder";
      let p = document.createElement("p");
      p.innerText = item.name;

      let avatarHolder = document.createElement("p");
      avatarHolder.innerText = item.name[0];

      avatarHolder.className = "avatar";
      userHolder.append(avatarHolder);
      userHolder.append(p);
      let p1 = document.createElement("p");
      p1.innerText = item.email;
      let p2 = document.createElement("p");
      // p2.innerText = JSON.stringify(item.address);
      p2.innerText = `Adrees:${item.address.suite}, ${item.address.street}, ${item.address.city}`;
      li.append(userHolder);
      li.append(p1);
      li.append(p2);
      docFrag.append(li);

      // let li = document.createElement("li");
      // let p = document.createElement("p");
      // p.innerText = item.email;
      // li.append(p);
      // div.append(li);
      // docFrag.append(div);
    });
    ul.append(docFrag);
  })

  .catch((err) => console.error(err));
