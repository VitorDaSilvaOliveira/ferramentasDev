<template>
    <div class="content" :style="contentStyle">
        <div style="text-align: center;">
            <h1 style="font-size: 3rem;">Calculadora</h1>
            <h4>A calculadora da nossa plataforma foi desenvolvida para facilitar diversos cálculos do seu dia a dia.<br>
            Com ela, você pode realizar conversões entre unidades, cálculos de porcentagem, proporções, e muito mais!<br>
            Basta inserir os dados necessários e a calculadora fornecerá o resultado de forma rápida e precisa.</h4>
            <br>
            <h4>Utilize as funcionalidades:</h4>
        </div>
            
        <div style="display: flex; padding: 5%; gap: 30px;">
        <NuxtLink to="/calculadora" style="text-decoration: none;">
            <div class="card">
            <IconsPercent class="icon" />
            <span class="title">Porgentagens</span>
            <p class="description">
                Quantos porcento é um valor em relação a outro<br/>
                Quanto vale uma porcentagem em raleção a um valor. E muito mais!
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/validador" style="text-decoration: none;">
            <div class="card">
            <IconsRegua class="icon" />
            <span class="title">Validadores</span>
            <p class="description">
                Inserimos uma informação e conferimos se ela é correta. <br />
                Por exemplo: Validade de um CPF, validade de um CEP.
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/gerador" style="text-decoration: none;">
            <div class="card">
            <IconsGenerator class="icon" />
            <span class="title">Geradores</span>
            <p class="description">
                Geramos informações em algum contexto. <br />
                Por exemplo: Gerar nomes, gerar CPFs, gerar CEPs.
            </p>
            </div>
        </NuxtLink>
        </div>

        <div style="display: flex; padding: 5%; gap: 30px;">
        <NuxtLink to="/calculadora" style="text-decoration: none;">
            <div class="card">
            <IconsCalculator class="icon" />
            <span class="title">Calculadoras</span>
            <p class="description">
                Inserimos uma informação de um tipo e recebemos outro tipo. <br />
                Por exemplo: Reais para Dollar, Centímetros para Metros.
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/validador" style="text-decoration: none;">
            <div class="card">
            <IconsValidator class="icon" />
            <span class="title">Validadores</span>
            <p class="description">
                Inserimos uma informação e conferimos se ela é correta. <br />
                Por exemplo: Validade de um CPF, validade de um CEP.
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/gerador" style="text-decoration: none;">
            <div class="card">
            <IconsGenerator class="icon" />
            <span class="title">Geradores</span>
            <p class="description">
                Geramos informações em algum contexto. <br />
                Por exemplo: Gerar nomes, gerar CPFs, gerar CEPs.
            </p>
            </div>
        </NuxtLink>
        </div>

        <div style="display: flex; padding: 5%; gap: 30px;">
        <NuxtLink to="/calculadora" style="text-decoration: none;">
            <div class="card">
            <IconsCalculator class="icon" />
            <span class="title">Calculadoras</span>
            <p class="description">
                Inserimos uma informação de um tipo e recebemos outro tipo. <br />
                Por exemplo: Reais para Dollar, Centímetros para Metros.
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/validador" style="text-decoration: none;">
            <div class="card">
            <IconsValidator class="icon" />
            <span class="title">Validadores</span>
            <p class="description">
                Inserimos uma informação e conferimos se ela é correta. <br />
                Por exemplo: Validade de um CPF, validade de um CEP.
            </p>
            </div>
        </NuxtLink>

        <NuxtLink to="/gerador" style="text-decoration: none;">
            <div class="card">
            <IconsGenerator class="icon" />
            <span class="title">Geradores</span>
            <p class="description">
                Geramos informações em algum contexto. <br />
                Por exemplo: Gerar nomes, gerar CPFs, gerar CEPs.
            </p>
            </div>
        </NuxtLink>
        </div>

    </div>
  </template>
  
  <script setup>
  import { useSidebarStore } from '~/stores/sidebar'; // Importe o store do Pinia
  import { computed } from 'vue';
  
  const sidebarStore = useSidebarStore();
  
  // Calcula a margem esquerda com base no estado do sidebar
  const contentStyle = computed(() => {
    return {
      paddingTop: '12vh', // Ajuste esse valor conforme a altura do cabeçalho
      paddingLeft: sidebarStore.isOpen ? '12%' : '6.5%', // Margem maior se o sidebar estiver aberto
    };
  });
  </script>
  
  <style scoped>
  .content {
    transition: padding-left 0.3s ease; /* Transição suave ao abrir/fechar o sidebar */
  }
  
  .card {
    width: 500px; /* Tamanho do quadrado */
    height: 300px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px; /* Borda arredondada opcional */
    border-color: rgb(187, 153, 248);
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  .icon {
    font-size: 60px; /* Ícone grande */
  }
  
  .title {
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
  }
  
  .description {
    font-size: 20px;
    margin-top: 8px;
  }
  </style>
  