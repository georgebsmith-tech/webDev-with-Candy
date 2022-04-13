let ul = document.querySelector("ul");
console.log(ul);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => {
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
      p.className = "first-p";

      let p1 = document.createElement("p");
      p1.innerText = `Username: ${item.username}`;

      let avatarHolder = document.createElement("p");
      avatarHolder.innerText = item.name[0];

      avatarHolder.className = "avatar";
      userHolder.append(avatarHolder);
      // userHolder.append(p);

      let p6 = document.createElement("p");
      p6.innerText = `Email:${item.email}`;

      let p2 = document.createElement("p");
      p2.innerText = `Address:${item.address.suite}, ${item.address.street}, ${item.address.city}`;

      let p3 = document.createElement("p");
      p3.innerText = `Phone: ${item.phone}`;

      let p4 = document.createElement("p");
      p4.innerText = `Website: ${item.website}`;

      let p5 = document.createElement("p");
      p5.innerText = `Company: ${item.company.name}, ${item.company.bs}, ${item.company.catchPhrase},`;

      li.append(userHolder);
      li.append(p);
      li.append(p1);
      li.append(p2);
      li.append(p3);
      li.append(p4);
      li.append(p5);
      li.append(p6);
      document.querySelector("#loader").style.display = "none";
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
