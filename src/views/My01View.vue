<script setup lang="ts">
import My01 from '@/components/My01.vue'
</script>

<template>
  <header class="container">
    <h1>オルソリさーち | Ortho Search </h1>
  </header>
  <main class="container">
    <My01 msg="lalala"  />
  </main>
  <footer class="mt-5 mb-5 container">
    <p>Wanna create a heatmap? Visit <a href="https://oha-ohashi.github.io/2022_1/a_ortho/ortho_heat.html">
      "オルソリひーと | Ortho Heat"
    </a></p>
    <p>Wanna compare layouts or custermise the evaluation function? Try
      <a href="https://github.com/oha-Ohashi/ts_ideal_layout/tree/main">
        CLI version
    </a> (node.js required).</p>
    <p><a href="https://github.com/oha-Ohashi/ortho_search">
      GitHub Repository
    </a></p>
    <p><a href="https://oha-ohashi.github.io/">Home
    </a></p>
  </footer>
</template>

