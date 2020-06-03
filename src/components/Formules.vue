<template>
  <section class="formules wrap">
    <h2>Les formules</h2>
    <div class="formules">
      <article class="formule" v-for="(formule, index) in formules" :key="index">
        <h1>{{ formule.title }}</h1>
        <p v-html="formule.description"></p>
        <div class="price">
          <small class="fixed-price">
            <span v-if="formule.fixedPrice === false">À partir de</span>
          </small>
          {{ formule.price }} €
          <small>/mois</small>
        </div>
        <router-link to="#" class="btn btn-xs">Rejoindre Oo'ly</router-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Formules",
  data: () => {
    return {
      formules: [
        {
          title: "Formule découverte",
          description: "1 dispositif<br />+ 5 Oo au choix",
          price: 15,
          fixedPrice: true
        },
        {
          title: "Formule Super",
          description: "1 dispositif<br />+ 8 Oo au choix",
          price: 18,
          fixedPrice: true
        },
        {
          title: "Formule à la carte",
          description: "1 dispositif<br />+ X Oo au choix",
          price: 12,
          fixedPrice: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section.formules {
  h2,
  .formules {
    grid-column: 2 / 12;
  }

  .formules {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }

  @include max-tablet {
    h2,
    .formules {
      grid-column: span 1;
    }

    .formules {
      padding: 0 40px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
