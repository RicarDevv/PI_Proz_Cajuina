const prods = [
    {
        'titulo': "Garrafinha",
        'quantidade': "250ml",
        'embalagem': "Embalagem de PET",
        'descricao': "Perfeito para a garotada!",
        'img': './src/garrafaPitchula.png'
    },
    {
        'titulo': "Garrafa",
        'quantidade': "2L",
        'embalagem': "Embalagem de PET",
        'descricao': "A melhor opção para seus encontros, seja com sua família ou amigos!",
        'img': './src/garrafa2Litros.png'
    },
    {
        'titulo': "Latinha",
        'quantidade': "350ml",
        'embalagem': "Embalagem de Alumínio",
        'descricao': "Uma ótima escolha para os  dias quentes.",
        'img': './src/lataCSJ.png'
    },
    {
        'titulo': "Picolé",
        'quantidade': "60g",
        'embalagem': "Embalagem de Plástico",
        'descricao': "Com um sabor unico que só a São Geraldo possui",
        'img': './src/picole-sao-geraldo-1.png'
    },
    {
        'titulo': "Garrafa",
        'quantidade': "200ml",
        'embalagem': "Embalagem de Vidro",
        'descricao': "A novidade saborosa da São Geraldo!",
        'img': './src/garrafaPequena.png'
    }
]

const titulo = document.getElementsByClassName('texto_prod');
function Prod(i) {
    i = i - 1;
    titulo[0].getElementsByTagName('h2')[0].innerText = prods[i].titulo;
    titulo[0].getElementsByTagName('p')[0].innerText = prods[i].quantidade;
    titulo[1].getElementsByTagName('h2')[0].innerText = prods[i].embalagem;
    titulo[1].getElementsByTagName('p')[0].innerText = prods[i].descricao;
    document.getElementById("img_prod").src = prods[i].img;
}

function Inicio() {
    titulo[0].getElementsByTagName('h2')[0].innerText = prods[0].titulo;
    titulo[0].getElementsByTagName('p')[0].innerText = prods[0].quantidade;
    titulo[1].getElementsByTagName('h2')[0].innerText = prods[0].embalagem;
    titulo[1].getElementsByTagName('p')[0].innerText = prods[0].descricao;
    document.getElementById("img_prod").src = prods[0].img;
}
//Efeito de ampliação dos icones dos produtos
var imgs=document.getElementsByClassName("prod_imgs");
for(let i=0;i<imgs.length;i++){
imgs[i].addEventListener("mouseover",function(){imgs[i].style.transform="scale(1.4)";});
imgs[i].addEventListener("mouseout",function(){imgs[i].style.transform="scale(1.0)";});
}


/*window.onload = function(){
  var entidade = document.getElementById('imagem');

  // Altere o número para a apliação/redução desejada
  var fator_lupa = 6;

  entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };

  entidade.onmouseout = function () { this.style.width = (this.clientWidth / 2) + "px"; };
}
*/

window.onload = function(){
    var entidade = document.getElementById('imagem');
  
    var fator_aumento = 1.5; // Fator de aumento de tamanho
    var tamanho_original = entidade.clientWidth; // Tamanho original da imagem
  
    var aumentada = false; // Variável para controlar o estado da imagem
  
    entidade.onclick = function () {
      if (aumentada) {
        // Reduz a imagem para o tamanho original
        this.style.width = tamanho_original + "px";
      } else {
        // Aumenta a imagem
        this.style.width = (tamanho_original * fator_aumento) + "px";
      }
      
      // Alterna o estado
      aumentada = !aumentada;
    };
  }
  
const showMoreLink = document.querySelector('.show-more');
        const showLessLink = document.querySelector('.show-less');
        const moreContent = document.querySelector('.more-content');

        showMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            moreContent.style.display = 'block';
            showMoreLink.style.display = 'none';
            showLessLink.style.display = 'inline';
        });

        showLessLink.addEventListener('click', function(event) {
            event.preventDefault();
            moreContent.style.display = 'none';
            showMoreLink.style.display = 'inline';
            showLessLink.style.display = 'none';
        });

        function openModal(imageSrc) {
            var modal = document.getElementById("myModal");
            var modalImg = document.getElementById("modalImg");
            modal.style.display = "block";
            modalImg.src = imageSrc;
        }
        
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }