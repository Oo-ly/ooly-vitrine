<template>
  <router-link :to="`/tribu/${oo.slug}`" v-if="oo">
    <article class="oo">
      <img :src="require(`../assets/img/oos/${oo.image}`)" :alt="oo.name" />
      <h1>{{ oo.name }} <span :style="{ 'border-color': oo.color }"></span></h1>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'CardOo',
  props: ['oo'],
};
</script>

<style></style>
