<template>
  <div id="oo">
    <Breadcrumbs :links="[...breadcrumbs, currentLink]" />
    <section class="intro wrap" v-if="oo">
      <div class="image">
        <img :src="require(`../assets/img/oos/${oo.image}`)" alt />
      </div>
      <div class="description">
        <h1>{{ oo.name }}</h1>
        <p class="small">
          <strong>Spécialité :</strong>Relaxation & détente
        </p>
        <p class="small">
          <strong>Traits de caractère</strong>
        </p>

        <router-link to="#" class="btn btn-sm">Adopter</router-link>
      </div>
    </section>
    <section class="description wrap" v-if="oo">
      <div class="content">
        <h3>Description de sa spécialité :</h3>
        <p>{{ oo.description }}</p>
      </div>
      <div class="content">
        <h3>Ses traits de caractères principaux :</h3>
        <p v-for="(trait, key) in oo.traits" :key="key">
          <strong>{{ key }} :</strong>
          {{ trait }}
        </p>
      </div>
      <div class="content">
        <h3>Ses supers potes :</h3>
        <p>{{ oo.friendships }}</p>
        <div class="friends">
          <CardOo v-for="(friend, index) in oo.friends" :key="index" :oo="getOo(friend)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Oos from "../oos";
import CardOo from "./CardOo";
import Breadcrumbs from "./Breadcrumbs";

export default {
  name: "Oo",
  components: { CardOo, Breadcrumbs },
  data: () => {
    return {
      oo: null,
      currentLink: {
        name: null,
        url: null
      },
      breadcrumbs: [
        {
          name: "Accueil",
          url: "/"
        },
        {
          name: "Les Oo'",
          url: "/tribu"
        }
      ]
    };
  },
  methods: {
    getOo(name) {
      return Oos.filter(oo => oo.slug === name)[0];
    },
    setOo(name) {
      this.oo = Oos.filter(oo => oo.slug === name)[0];
      this.currentLink.name = this.oo.name;
      this.currentLink.url = `/tribu/${this.oo.slug}`;
    }
  },
  mounted() {
    this.setOo(this.$route.params.name);
  },
  watch: {
    $route(to) {
      if (to.params.name) {
        this.setOo(to.params.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section.intro {
  padding-top: 0;

  .image {
    position: relative;
    grid-column: 3 / 7;

    &::after {
      content: "";
      display: block;
      position: absolute;

      right: 0;
      bottom: 0;
      height: 150px;
      width: 10000px;
      background-color: #282081;
      z-index: -1;
    }
  }

  .description {
    grid-column: 8 / 12;

    h1 {
      position: relative;
      font-family: "Exo";
      font-size: 36px;
      text-align: left;
      margin: 40px 0 60px;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 50px;
        height: 2px;
        background-color: #ffc700;
        left: 0;
      }
    }
  }

  @include tablet {
    .description h1 {
      margin-top: 0;
    }

    grid-template-columns: repeat(2, 1fr);

    .image,
    .description {
      grid-column: span 1;
    }

    .image {
      img {
        margin-left: auto;
        width: 60%;
      }
    }
  }

  @include phone {
    .description h1 {
      margin-top: 0;
    }

    .image,
    .description {
      grid-column: span 1;
    }

    .image {
      order: 2;

      img {
        width: 60%;
        margin-left: auto;
      }
    }
  }
}

section.description {
  padding-top: 160px;

  .content {
    grid-column: 3 / 11;
    margin-bottom: 40px;

    h3,
    p {
      font-family: "Montserrat";
    }

    h3 {
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 22px;
    }

    .friends {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 40px;
    }
  }

  @include max-tablet {
    padding-top: 100px;

    .content {
      grid-column: span 1;
    }
  }

  @include phone {
    .content .friends {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
