// document.querySelector("main").innerHTML="<div>Come here </div>"


let div = document.createElement("div")

div.innerText = "Come here"
// div.classList.add("come")

div.className = "come high"

div.id = "unique"

let myUl = document.createElement("ul")

let firstItemLi = document.createElement("li")
firstItemLi.innerText = "Te Amo Mi amor"
myUl.appendChild(firstItemLi)
div.appendChild(myUl)




document.querySelector("main").appendChild(div)


function toggle() {
    document.querySelector("img").src="./pic_bulbon.gif"
}

