
//Função que quando chamada onClick redireciona para a página Index
function redirectToIndex(){
    window.location.href = "index.html";
  }

//Função que quando chamada onClick redireciona para a página Cuidados
  function redirectToCare() {
    window.location.href = "cuidados.html";
  }


  //Função que torna navbar responsiva, quando página é reduzida a navbar transforma-se numa dropdown list
  function toggleNavbar() {
    var navbarContent = document.getElementById('navbarSupportedContent');
    navbarContent.classList.toggle('show');
  }


  //Função para fazer navbar desaparecer no scroll para baixo
  var prevScrollpos = window.pageYOffset;
  let mybutton = document.getElementById("btn-back-to-top");
  
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
  
      // Código para desaparecer a navbar
      if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
      } else {
          document.getElementById("navbar").style.top = "-86px";
      }
      prevScrollpos = currentScrollPos;
  
      // Código para seta de voltar ao início da página
      scrollFunction();
  };
  
    //Função para fazer seta aparecer no scroll
  function scrollFunction() {
      if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
      ) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }
  
  // Quando o usuário clica no botão, voltar ao topo do documento
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }