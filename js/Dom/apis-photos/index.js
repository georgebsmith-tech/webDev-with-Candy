// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((result) => result.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

let ul = document.querySelector("ul");
console.log(ul);

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((result) => result.json())
//   .then((data) => {
//     let frag = new DocumentFragment();
//     data.forEach((item) => {
//       let li = document.createElement("li");
//       li.innerText = item.title;
//       frag.append(li);
//     });
//     ul.append(frag);
//   })
//   .catch((err) => console.error(err));

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((result) => result.json())
//   .then((data) => {
//     let frag = new DocumentFragment();
//     data.forEach((item, idx) => {
//       if (idx < 20) {
//         let li = document.createElement("li");
//         let img = document.createElement("img");
//         img.src = item.url;
//         li.append(img);
//         let p = document.createElement("p");
//         p.innerText = item.title;
//         li.append(p);
//         frag.append(li);
//       };
//        {

//       }
//     });
//     ul.append(frag);
//   })
//   .catch((err) => console.error(err));

async function getdata() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await resp.json();
    let frag = new DocumentFragment();
    data.forEach((item, idx) => {
      if (idx < 20) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = item.url;
        li.append(img);
        let p = document.createElement("p");
        p.innerText = item.title;
        li.append(p);
        frag.append(li);
      }
      {
      }
    });
    ul.append(frag);
  } catch (err) {
    console.log(err);
  }
}

getdata();
