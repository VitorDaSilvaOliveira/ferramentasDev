<template>
  <aside class="sidebar" :class="{ 'sidebar-open': sidebarStore.isOpen }">
    <button class="toggle-btn" @click="sidebarStore.toggleSidebar">
      <i :class="sidebarStore.isOpen ? 'bi bi-chevron-left' : 'bi bi-chevron-right'"></i>
    </button>

    <nav class="sidebar-menu">
      <ul>
        <li @click="sidebarStore.openSidebar">
          <NuxtLink to="/calculadora" class="menu-item">
            <div class="icon-container">
              <IconsCalculator />
            </div>
            <span class="menu-text" v-if="sidebarStore.isOpen">Calculadoras</span>
          </NuxtLink>
        </li>
        <li @click="sidebarStore.openSidebar">
          <NuxtLink to="/validador" class="menu-item">
            <div class="icon-container">
              <IconsValidator />
            </div>
            <span class="menu-text" v-if="sidebarStore.isOpen">Validadores</span>
          </NuxtLink>
        </li>
        <li @click="sidebarStore.openSidebar">
          <NuxtLink to="/gerador" class="menu-item">
            <div class="icon-container" style="border-color: red;">
              <IconsGenerator />
            </div>
            <span class="menu-text" v-if="sidebarStore.isOpen">Geradores</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { useSidebarStore } from '~/stores/sidebar';

const sidebarStore = useSidebarStore();
</script>

<style scoped>
/* Estilos Gerais */
.sidebar {
  position: fixed;
  left: 0;
  top: 10vh;
  width: 4.5%;
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

/* Menu */
.sidebar-menu {
  width: 100%;
  padding: 0;
}

.sidebar-menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.sidebar-menu li {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: flex-start;
}

/* Links */
.sidebar-menu a {
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  transition: background 0.3s;
  color: black;
}

.sidebar-menu a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Ícones com tamanho fixo */
.icon-container {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Garante que os ícones fiquem alinhados corretamente */
.icon-container svg {
  width: 24px;
  height: 24px;
  fill: black;
  transition: width 0.3s ease, height 0.3s ease;
}

/* Ajuste da disposição dos itens */
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px; /* Espaçamento entre ícone e texto */
  width: 100%;
  padding: 1px;
}

/* Texto do menu */
.menu-text {
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.3s ease, width 0.3s ease;
}

/* Esconder texto quando fechado */
.sidebar:not(.sidebar-open) .menu-text {
  opacity: 0;
  width: 0;
  visibility: hidden;
}
/* Ícones grandes quando a sidebar está fechada */
.sidebar:not(.sidebar-open) .icon-container svg {
  width: 40px; /* Aumente conforme necessário */
  height: 40px;
}
</style>
