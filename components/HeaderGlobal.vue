<template>
   <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.3/font/bootstrap-icons.min.css" rel="stylesheet">
  </head>

    <main>  
  <!-- Cabeçalho -->
  <header class="header">

    <div class="container-header">
        
      <!-- Só a imagem -->
      <div class="image" style="margin-left: 1%;">
        <NuxtLink to="/">
          <a class="imagem">
            <img src="..\assets\images\logo.png" alt="Logo">
          </a>
        </NuxtLink>
      </div>       
  
      <!-- Textos e ícones -->
      <div class="menu">
        <ul class="ul-header">
            
              <!-- Textos -->
              <div class="textos">
  
                <!-- Login Cliente -->
                <li><a style="color: black; text-decoration: none;">LOGIN CLIENTE</a></li>
  
                <!-- Contato -->
                <li><a style="color: black; text-decoration: none;">CONTATO</a></li>
              </div>
  
            </ul>
          </div>
        </div>
      </header>
  
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {

      };
    },
    mounted() {

    },
    unmounted() {

    },
    methods: {
      // Site fica opaco quando scrolla ----------------------------------\
      handleScroll() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) { // Ajuste o valor conforme a altura do seu header ou preferências
          header.classList.add('header-scrolled');
          header.classList.remove('header-initial');
        } else {
          header.classList.add('header-initial');
          header.classList.remove('header-scrolled');
        }
      },
      // -----------------------------------------------------------------/
    }
  };
  </script>
  
  <style scoped>
  
  /* Essa é apenas uma linha preta que pode ser usada para marcação */
  .custom-hr2 {
    height: 0.1%;
    background-color: black;
    border: none;
    margin-bottom: 1%;
    margin-top: 0.75%
  }
  
  /* PROPRIEDADES DO CABEÇALHO -----------------------------------------------------------\ */
  
  .header {
    position: fixed; /* Faz o cabeçalho descer junto com a página */
    display: flex;
    padding: 0.8%; /*Aumenta a tamanho em altura do header */
    width: 100%; /* Faz o cabeçalho ficar da largura certa da página */
    z-index: 1000; /* Dá prioridade para o cabeçalho ficar na frente de todos os outros itens da página */
    background-color: rgb(215, 194, 255); /* Fundo branco inicial */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Cria uma pequena sombra embaixo do cabeçalho */
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease; /* Suaviza a transição quando scrolla a página */
    height: 10%;
  }
  .header-cllr {
      display: none;
    }
  /* Para o header começar branco e ficar opaco*/
  .header-initial {
    background-color: rgba(194, 231, 255, 1); /* Fundo branco inicial */
    backdrop-filter: none; /* Sem desfoque inicialmente */
  }
  .header-scrolled {
    background-color: rgba(194, 231, 255, 0.8); /* Fundo opaco após scroll */
    backdrop-filter: blur(6px); /* Aplica o desfoque após o scroll */
  }
  /* --------------------------------------------------------------------------------------/ */
  
  
  /* PROPRIEDADES DO CONTEÚDO DO CABEÇALHO ------------------------------------------------\ */
  
  /* propriedades gerais do container */
  .container-header {
    width:100vw; /* Ajusta a largura do ícone */
    display: flex;  /* Organiza lateralmente o header */
    align-items: center; /* Deixa centralizado no meio da altura */
    justify-content: space-between; /* Faz ter um espaço entre a parte da imagem e a parte dos textos e íconesx */
  }
  
  .ul-header {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  .ul-header li {
    margin: 0 2vh;
  }
  
  .textos, .icones {
    font-size: 2vh;
    display: flex;
    align-items: center;
  }
  
  .menu {
    display: flex;
    align-items: center;
  }
  .imagem img {
    height: 7.5vh;
  }
  
  /* Trata do dropdown */
  .drop {
    margin-top: 0.06%;
    width: 25vh; /* Defina uma largura para o dropdown */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ececec;
    display: block;
    position: absolute;
  }
  
  .drop a {
    font-size: 2vh; /* Defina uma largura para o sub-dropdown */
    display: block;
    padding: 7% 5%;
    text-align: left;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .drop a:hover {
    opacity: 1;
  }
  
  /* sub-drop */
  .sub-drop {
    margin-top: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #ececec;
    padding: 7% 5%;
    gap: 3% 0;
    display: block;
    position: absolute;
    left: 100%;
    top: 0;
    z-index: 2;
    width: 80%; /* Defina uma largura para o sub-dropdown */
  }
  
  #subDrop2 {
    margin-top: 30%;  
    width: 100%; /* Defina uma largura para o sub-dropdown */
  
  }
  
  .sub-drop a {
    display: block;
    color: black;
    text-decoration: none;
    font-size: 2vh; /* Defina uma largura para o sub-dropdown */
    padding: 0.7vh 1.5vh;
    transition: background-color 0.3s ease;
  }
  
  .sub-drop a:hover {
    background-color: #d0d0d0;
  }
  /* -----------------------------------------------------------/ */
  
  /* Ícones do instagram e linkedin */
  .icones {
    display: flex; /* Se estiver agrupando textos, use flex também */
    gap: 1vw; /* Espaço entre os itens */
  }
  .icones svg {
    width: 2vw; /* Ajusta a largura do ícone */
    height: 2vw; /* Ajusta a altura do ícone */
  }
  

  </style>