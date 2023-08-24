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