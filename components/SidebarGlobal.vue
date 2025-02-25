<template>
  <aside class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <!-- Botão de seta -->
    <button class="toggle-btn" @click="toggleSidebar">
      <i :class="isOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'"></i>
    </button>

    <nav class="sidebar-menu">
      <ul>
        <li @click="openSidebar">
          <NuxtLink to="/calculadora">
            <IconsCalculator /> 
            <span v-if="isOpen">Calculadoras</span>
          </NuxtLink>
        </li>
        <li @click="openSidebar">
          <NuxtLink to="/validador">
            <IconsValidator /> 
            <span v-if="isOpen">Validadores</span>
          </NuxtLink>
        </li>
        <li @click="openSidebar">
          <NuxtLink to="/gerador">
            <IconsGenerator /> 
            <span v-if="isOpen">Geradores</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Começa fechado
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    openSidebar() {
      this.isOpen = true; // Abre ao clicar em um ícone
    }
  }
};
</script>

<style scoped>
/* Estilos Gerais */
.sidebar {
  margin-top: 10vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 60px; /* Largura inicial reduzida */
  height: 100vh;
  background-color: rgb(187, 153, 248);
  color: white;
  transition: width 0.3s ease;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Sidebar aberta */
.sidebar-open {
  width: 10%;
}

/* Botão de seta */
.toggle-btn {
  position: absolute;
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  background-color: rgb(130, 94, 200);
  color: white;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;
}

.toggle-btn:hover {
  background-color: rgb(110, 74, 180);
}

/* Estilizando os itens */
.sidebar-menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.sidebar-menu li {
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-menu a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem; 
}

/* Ícones */
.sidebar-menu svg {
  width: 75%;
  height: auto;
  fill: white;
}

</style>
