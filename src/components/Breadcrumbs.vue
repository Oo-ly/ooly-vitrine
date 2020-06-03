<template>
  <nav id="breadcrumbs" class="wrap">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link v-if="link.url" :to="link.url">{{link.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: ["links"]
};
</script>