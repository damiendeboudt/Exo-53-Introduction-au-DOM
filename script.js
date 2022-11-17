
let pElement = document.querySelectorAll("p");
    console.log(pElement)

for (let i = 0; i < pElement.length ;i++) {
    pElement.item(i).style.color = "blue";
    pElement.item(i).style.width = "500px"
}
if (i = 4)
    pElement.item(i).innerText ="je suis le dernier!!!!!!!!!!!!!!";


let spanElement = document.querySelectorAll("span");
console.log(pElement)
for (let i = 0; i < spanElement.length ;i++) {
    spanElement.item(i).style.backgroundColor = "red";
    spanElement.item(i).style.direction = "rtl";

}

let aElement = document.querySelectorAll("a");
for (let i = 0; i < aElement.length ;i++) {
    aElement.item(i).innerText ="je suis un lien";
}