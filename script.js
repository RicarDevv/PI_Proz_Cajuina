"use strict";
//O modo estrito torna mais fácil escrever JavaScript "seguro". LINK: https://www.w3schools.com/js/js_strict.asp

//Array de Produtos, que pode ser substituido por um 'Bando de dados' futuramente
const prods = [
  {
    titulo: "Garrafinha",
    quantidade: "250ml",
    embalagem: "Embalagem de PET",
    descricao: "Perfeito para a garotada!",
    img: "./src/produto_garafinha.png",
  },
  {
    titulo: "Garrafa",
    quantidade: "2L",
    embalagem: "Embalagem de PET",
    descricao:
      "A melhor opção para seus encontros, seja com sua família ou amigos!",
    img: "./src/produto_garrafa.png",
  },
  {
    titulo: "Latinha",
    quantidade: "350ml",
    embalagem: "Embalagem de Alumínio",
    descricao: "Uma ótima escolha para os dias quentes.",
    img: "./src/produto_lata.png",
  },
  {
    titulo: "Picolé",
    quantidade: "60g",
    embalagem: "Embalagem de Plástico",
    descricao: "Com um sabor unico que só a São Geraldo possui.",
    img: "./src/produto_picole.png",
  },
  {
    titulo: "Garrafa",
    quantidade: "200ml",
    embalagem: "Embalagem de Vidro",
    descricao: "A novidade saborosa da São Geraldo!",
    img: "./src/produto_vidro.png",
  },
];
//Preparando para receber dados dos produtos
const titulo = document.getElementsByClassName("texto_prod");
//Ao clicar em um icone do produto as informações sobre ele é carregada
function Prod(i) {
  i = i - 1;
  titulo[0].getElementsByTagName("h2")[0].innerText = prods[i].titulo;
  titulo[0].getElementsByTagName("p")[0].innerText = prods[i].quantidade;
  titulo[1].getElementsByTagName("h2")[0].innerText = prods[i].embalagem;
  titulo[1].getElementsByTagName("p")[0].innerText = prods[i].descricao;
  document.getElementById("img_prod").src = prods[i].img;
}
//Carrega o primeiro item, para não deixar vazio
function Inicio() {
  titulo[0].getElementsByTagName("h2")[0].innerText = prods[0].titulo;
  titulo[0].getElementsByTagName("p")[0].innerText = prods[0].quantidade;
  titulo[1].getElementsByTagName("h2")[0].innerText = prods[0].embalagem;
  titulo[1].getElementsByTagName("p")[0].innerText = prods[0].descricao;
  document.getElementById("img_prod").src = prods[0].img;
}
//Efeito de ampliação dos icones dos produtos
var imgs = document.getElementsByClassName("prod_imgs");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("mouseover", function () { imgs[i].style.transform = "scale(1.4)"; });
  imgs[i].addEventListener("mouseout", function () { imgs[i].style.transform = "scale(1.0)"; });
}

/*Tema*/
const switcher = document.querySelector("#tema");
switcher.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
  var className = document.body.className;
  if (className == "tema-claro") { this.src = "./src/Sol.png"; } else { this.src = "./src/Lua.png"; }
});