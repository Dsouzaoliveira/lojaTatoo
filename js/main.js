
//Função que quando chamada onClick redireciona para a página homepage
function redirectToIndex(){
    window.location.href = "homepage.html";
  }

//Função que quando chamada onClick redireciona para a página Cuidados
  function redirectToCare() {
    window.location.href = "cuidados.html";
  }

  //Função que quando chamada onClick redireciona para a página Contactos
  function redirectToContactos() {
    window.location.href = "contatos.html";
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

  // Funções para login e register

  function checkIfChecked() {
    var checkboxes = document.querySelectorAll('.allchecks');
    var isChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        isChecked = true;
        console.log('Hey it is'+i);
      }
    }
    return isChecked;
  }
   
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Seleccionar ficheiro
    if (file) {
        const reader = new FileReader(); // Criar um objecto FileReader
        reader.onload = function(e) {
            const content = e.target.result; // Get the file content
            console.log(content); // conteudo do ficheiro
            const wordsArray = content.split(' '); // Fazer parsing por espaco
            // content do ficheiro vai para um array com duas posicoes uma para user e outra para password
            const parsedUser = wordsArray[0];
            const parsedPass = wordsArray[1];
   
            // Output de resultados
            console.log('User:', parsedUser);
            console.log('Pass:', parsedPass);
            document.getElementById('idUtilizador').innerHTML = parsedUser;
            closeModal('staticBackdrop4');
            //document.getElementById('fileContent').textContent = content; // Display the content
        };
        reader.readAsText(file); // Read the file as text
    } else {
        console.log('No file selected');
    }
  });
   
  function closeModal(modalFechar) {
    // Get the modal element by its ID
    const modalElement = document.getElementById(modalFechar);
   
    // Create a Bootstrap modal instance
    const modal = bootstrap.Modal.getInstance(modalElement);
   
    // Use the hide method to close the modal
    modal.hide();
  }
   
  function fazerReg() {
    const inputUser = document.getElementById('inputUtilizador');
    let inputUsVal = inputUser.value;
    const inputPass = document.getElementById('inputPasswd');
    let inputPaVal = inputPass.value;
    //alert(document.getElementById('inputUtilizador').value)
    //alert(inputVal);
    const data = new Blob([inputUsVal,' ',inputPaVal], { type: 'application/json' });
    const link = document.createElement('a');
    link.download = "db.json";
    link.href = window.URL.createObjectURL(data);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Written file!");
    closeModal('staticBackdrop5');
  }
  
  