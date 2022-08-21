<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/navbar/NavBar.vue";
import SideTab from "./components/sidetab/SideTab.vue";

</script>

<template>
  <NavBar />
  <SideTab />
  <section>
    <div class="container">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-left: 320px;
  padding-top: 4em;
  margin-bottom: 2em;
}

.container {
  max-width: 1144px;
}

@media screen and (max-width: 720px) {
  section {
    margin-left: 0;
  }
}
</style>
