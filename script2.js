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
//Validação de formulário
let usernameInput = document.getElementById("nomesobrenome");
let usernameLabel = document.querySelector('label[for="nomesobrenome"]');
let usernameHelper = document.getElementById("username-helper");

//Mostrar popup - Campo Obrigatório
usernameInput.addEventListener('focus', () => {
    usernameLabel.classList.add('required-popup')
})

//Remover popup - Campo Obrigatório
usernameInput.addEventListener('blur', (event) => {
    usernameLabel.classList.remove('required-popup')
})

//Validação do valor da input
function validationInputEmail(input, inputValue ){

    if (inputValue.includes('@') && inputValue.includes('.com')) {
                emailHelper.classList.remove('visible')
                input.classList.remove('error')
                input.classList.add('correct')
            } else {
                input.classList.remove('correct')
                input.classList.add('error')
                emailHelper.classList.add('visible')
            }
}

function inputValidation(input){
    input.addEventListener('blur', (event) => {
        const inputValue = event.target.value

        if(event.target.id === 'email'){
            validationInputEmail(input, inputValue)
        }  else {

            if(inputValue.length < 4) {
                input.classList.remove('correct')
                input.classList.add('error')
                usernameHelper.classList.add('visible')
            } else {
                input.classList.remove('error')
                usernameLabel.classList.remove('required-popup')
                input.classList.add('correct')
                usernameHelper.classList.remove('visible')
            }
         }   
    })
}


inputValidation(usernameInput)

const emailInput = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

emailInput.addEventListener('focus', () => {
    emailLabel.classList.add('required-popups')
})

emailInput.addEventListener('blur', (event) => {
    emailLabel.classList.remove('required-popups')
})

inputValidation(emailInput)


const telefoneInput = document.getElementById('telefone')
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

telefoneInput.addEventListener('focus', () => {
    telefoneLabel.classList.add('required-popups')
})

telefoneInput.addEventListener('blur', (event) => {
    telefoneLabel.classList.remove('required-popups')
})
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