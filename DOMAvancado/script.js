//adicionar elementos com DOM


//exemplo de Criação de OBJ com DOM
let header = document.createElement("header");
//estilização do elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
//adicionar elementos ao body
document.body.appendChild(header);//adicionando o header como elementos filho do body
//estilização do body
document.body.style.margin = "0"; // retira a margin padrão do body

//adicionar elemetnos ao header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav); //adicionando divNav como elemento filho de header

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar itens na nav
itensNav.forEach(e=>{
    let item = document.createElement("a");
    item.innerText = e;
    item.href = e.toLowerCase()+".html";
    item.style.textDecoration = "none";
    item.style.color = "aliceblue"
    divNav.appendChild(item);
});


//Façam um Footer com DOM

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.width = "100%"
footer.style.color = "aliceblue";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
document.body.appendChild(footer);


let divFooter = document.createElement("div");
divFooter.style.fontSize = "3vh";
divFooter.style.fontFamily = "Comic Sans MS";
divFooter.innerText = "Copyright © 2026 - Todos os direitos reservados.";
footer.appendChild(divFooter);


// Clonar Elementos com DOM

let card = document.createElement("div");
card.classList.add("card");//adiciona a Class Card no elemento => <div class="card">
card.style.width = "120px"; //largura
card.style.height = "200px"; //altura
card.style.backgroundColor = "blue"
card.style.margin = "1px";

//criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container"); //=> div.container
container.style.display="flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width="90%";
container.style.flexWrap = "wrap" // quebra a linha dos elementos filhos

//criar um botão para clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar"; //adicionando um id para o botão
document.body.appendChild(btnClonar); //add btn ao body
document.body.appendChild(container); //add container ao body
container.appendChild(card);//add card ao container

//criar um método para adicionar evento ao btn
btnClonar.addEventListener("click", ()=>{
    let clonar = card.cloneNode(true); //clonar o card
    container.appendChild(clonar);
})

//criar uma chave de Modo claro e escuro
let chave = document.createElement("input"); //tipo input
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px"; //Chave topo a Direita

document.body.appendChild(chave);//add chave ao body

//criando evento para  chave
chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})








