<template>
  <article class="sentence" v-if="oo">
    <div class="oo">
      <img :src="require(`../assets/img/oos/${oo.image}`)" :alt="oo.name" />
    </div>
    <div class="content">
      <div class="name">{{oo.name}}</div>
      <p>{{sentence}}</p>
    </div>
  </article>
</template>

<script>
import Oos from "../oos";

export default {
  name: "Sentence",
  props: ["name", "sentence"],
  data: () => {
    return {
      oo: null
    };
  },
  mounted() {
    this.oo = Oos.filter(oo => oo.slug === this.name)[0];
  }
};
</script>

<style>
</style>