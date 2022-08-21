<template>
  <div class="m-5 text-muted d-flex flex-column">
    <div class="display-1">
      404
    </div>
    <span class="display-6 mb-3">
      Ups! No se encontró la ruta solicitada
    </span>
    <RouterLink :to="{ name: 'home' }">
      Volver a Home
    </RouterLink>
  </div>
</template>
