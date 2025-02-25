<template>
  <div>
    <HeaderGlobal />
    <SidebarGlobal />
    <slot />
  </div>
</template>

<script>
import SidebarGlobal from '~/components/SidebarGlobal.vue';

export default {
  components: {
    SidebarGlobal
  }
};
</script>
