<template>
  <div id="home">
    <section class="header wrap">
      <div class="title">
        <h1 class="title">Ne soyez plus seul<strong>face à l'insomnie</strong></h1>
        <router-link to="#" class="btn">Rejoindre Oo'ly</router-link>
      </div>
      <img src="../assets/img/boitier_oos.png" alt="Boitier et les Oos" />
    </section>
    <section class="principe wrap">
      <div class="content">
        <h2>Le principe</h2>
        <p>Vous accompagner pendant vos crises d’insomnies</p>
        <ul>
          <li>1. Un dispositif discret à positionner où vous le souhaitez</li>
          <li>2. Le pod pour communiquer avec la tribu</li>
          <li>3. Les Oo’. Des petits personnages à la personnalité haute en couleur.</li>
        </ul>
      </div>
      <img src="../assets/img/principe.png" alt="Principe d'Oo'ly" />
    </section>
    <section class="oos wrap" id="oos">
      <img src="../assets/img/tribu.png" alt="Tribu" />
      <div class="content">
        <h2>Les Oo</h2>
        <p>Découvrez toute la tribu !</p>
        <router-link to="/tribu" class="btn btn-sm">Découvrir</router-link>
      </div>
    </section>
    <Formules id="formules" />
    <section class="valeurs wrap" id="valeurs">
      <h2>Les valeurs de Oo'ly</h2>
      <ul>
        <li v-for="(valeur, index) in valeurs" :key="index">
          <div class="icon">
            <img :src="require(`../assets/img/icons/${valeur.image}`)" alt="" />
          </div>
          <h3>{{ valeur.title }}</h3>
        </li>
      </ul>
    </section>
    <Contact id="contact" />
  </div>
</template>

<script>
import Formules from './Formules';
import Contact from './Contact';

export default {
  name: 'Home',
  components: { Formules, Contact },
  data: () => {
    return {
      valeurs: [
        {
          title: 'Accompagnement',
          image: 'accompagnement.svg',
        },
        {
          title: 'Confort',
          image: 'confort.svg',
        },
        {
          title: 'Sérénité',
          image: 'serenite.svg',
        },
        {
          title: 'Confiance',
          image: 'confiance.svg',
        },
        {
          title: 'Partage',
          image: 'partage.svg',
        },
        {
          title: 'éco-responsable',
          image: 'eco.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section.header {
  padding: 180px 0 0;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 2 / 6;

    h1 {
      margin-bottom: 50px;
    }
  }

  img {
    grid-column: 5 / 13;
    transform: translateY(-250px);
    margin-bottom: -250px;
  }

  @include max-tablet {
    .title,
    img {
      grid-column: span 1;
    }

    img {
      transform: translateY(-60px);
      margin-bottom: -40px;
    }
  }
}

section.principe {
  margin-top: -120px 0 125px;
  align-items: flex-end;

  .content {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    grid-column: 2 / 6;

    p {
      margin-bottom: 60px;
    }
  }

  img {
    grid-column: 6 / 13;
    transform: translateY(40px);
  }

  @include max-tablet {
    .content,
    img {
      grid-column: span 1;
    }
  }
}

section.oos {
  padding: 125px 0 75px;
  img {
    grid-column: 2 /8;
  }

  .content {
    grid-column: 9 / 12;
  }

  @include max-tablet {
    .content,
    img {
      grid-column: span 1;
    }
  }
}

section.formules {
  padding: 90px 0;
}

section.valeurs {
  padding: 75px 0 90px;

  h2 {
    grid-column: 2 / 12;
    text-align: center;
    margin-bottom: 0;
  }

  ul {
    grid-column: 3 / 11;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      width: 33%;
      padding: 30px 20px;

      .icon {
        display: flex;
        align-content: center;
        justify-content: center;

        width: 150px;
        height: 150px;

        border: 10px solid #150e5c;
        border-radius: 50%;
        padding: 30px;

        margin-bottom: 20px;
      }

      h3 {
        font-family: 'Exo';
        font-size: 18px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 1.1px;
        margin-top: auto;
      }
    }
  }

  @include max-tablet {
    ul,
    h2 {
      grid-column: span 1;
    }

    ul {
      li {
        width: 50%;

        .icon {
          height: 100px;
          width: 100px;
          padding: 20px;
        }

        h3 {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
