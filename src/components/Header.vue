<template>
  <header>
    <nav id="header" class="wrap">
      <router-link to="/"><img src="../assets/img/logo.svg" alt="Logo"/></router-link>
      <ul class="menu">
        <li>
          <router-link to="/#formules">Les abonnements</router-link>
        </li>
        <li>
          <router-link to="/#oos">Les Oo</router-link>
        </li>
        <li>
          <router-link to="/#valeurs">Nos valeurs</router-link>
        </li>
        <li>
          <router-link to="/#contact">Nous contacter</router-link>
        </li>
      </ul>
      <ul class="menu menu--right">
        <li>
          <router-link to="#">Panier</router-link>
        </li>
        <li>
          <router-link to="#">Connexion</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
