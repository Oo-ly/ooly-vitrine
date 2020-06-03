<template>
  <header>
    <nav id="header" class="wrap">
      <img src="../assets/img/logo.svg" alt="Logo" />
      <ul class="menu">
        <li>
          <router-link to="#">Les abonnements</router-link>
        </li>
        <li>
          <router-link to="#">Les Oo</router-link>
        </li>
        <li>
          <router-link to="#">Nos valeurs</router-link>
        </li>
        <li>
          <router-link to="#">Nous contacter</router-link>
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
