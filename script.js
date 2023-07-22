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
Prod(1)