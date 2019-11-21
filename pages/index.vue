<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        longnd
      </h1>
      <h2 class="subtitle">
        My fine Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        
      </div>
    </div>
    <template>
  <div>
    <p class="one">Icons</p>
    <font-awesome-icon :icon="['fab', 'linkedin']"/>
    <font-awesome-icon :icon="['fab', 'github']"/>
    <font-awesome-icon :icon="['fab', 'facebook']"/>
    <font-awesome-icon :icon="['fas', 'coffee']"/>
    <font-awesome-icon :icon="['fab', 'font-awesome']"/>
    <font-awesome-icon :icon="['fab', 'font-awesome']"/>
  </div>
  <nuxt-link to="/">sdasda</nuxt-link>
</template>
  </div>
</template>
<script defer src="/static/fontawesome/fontawesome-all.js"></script>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
};

//  FontAwesomeConfig = { searchPseudoElements: true };
</script>
 
<style lang="scss">

.container {
  background: $orange;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
