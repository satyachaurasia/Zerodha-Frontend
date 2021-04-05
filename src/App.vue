<template>
  <header>
    <img class="header-logo" src="./assets/stock.png" />
    <h1>Stock Archives</h1>
  </header>

  <div class="container">
    <main>
      <FormContainer />
      <StockTableContainer />
    </main>
  </div>
</template>

<script>
import FormContainer from "./components/Form/FormContainer.vue";

import StockTableContainer from "./components/StockTable/StockTableContainer";

export default {
  name: "App",
  components: {
    FormContainer,
    StockTableContainer
  }
};
</script>

<style>
body {
  background-color: #00968810;
  padding: 0 24px;
}

*,
*::after,
*::before {
  margin: 0;
  font-family: "Red Hat Display", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>

<style scoped>
header {
  top: 0;
  position: sticky;
  z-index: 100;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: #fff;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: #2e897f;
}

.header-logo {
  width: 70px;
  height: auto;
}
</style>
