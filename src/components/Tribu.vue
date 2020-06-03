<template>
  <div id="tribu">
    <section class="header wrap">
      <div class="discussion">
        <ul>
          <li>
            <article class="sentence">
              <div class="oo">
                <img src="../assets/img/oos/CinOoche-clean.png" alt="Cinooche" />
              </div>
              <div class="content">
                <div class="name">Cin'Oo'che</div>
                <p>Si c’est pas un animal qui l’a tué, c’est ptetre un végétal ?</p>
              </div>
            </article>
            <article class="sentence">
              <div class="oo">
                <img src="../assets/img/oos/VegetOo-clean.png" alt="Végétoo" />
              </div>
              <div class="content">
                <div class="name">Végét'Oo</div>
                <p>Promis c’est pas moi, mais c’est peut-être une sarracenia, une plante carnivore d’Amérique du Nord.</p>
              </div>
            </article>
            <article class="sentence">
              <div class="oo">
                <img src="../assets/img/oos/InfOo-clean.png" alt="Infoo" />
              </div>
              <div class="content">
                <div class="name">Inf'Oo</div>
                <p>Mais non, ces plantes-là ne mangent que des insectes voyons.</p>
              </div>
            </article>
          </li>
        </ul>
        <div class="writing">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="content">
        <h2>Une tribu de Oo</h2>
        <p>Créer votre tribu en fonction de vos envies et besoins</p>

        <p class="small">
          Les Oo sont de petits compagnons qui viendront interagir avec vous lors de vos nuits difficiles. Ils ont chacun un nom, une spécialité et
          une personnalité propre.
        </p>
        <p class="small">Ils peuvent ainsi discuter entre eux, mais aussi vous parler et vous proposer des occupations personnalisées.</p>
        <p class="small">Découvrez tous les Oo, et adopter ceux qui vous correspondent le mieux, pour composer votre tribu !</p>
      </div>
    </section>
    <section class="tribu wrap">
      <h2>Découvrez toute la tribu</h2>
      <ul>
        <li v-for="(oo, index) in oos" :key="index">
          <CardOo :oo="oo" />
        </li>
      </ul>
    </section>
    <Formules />
  </div>
</template>

<script>
import Oos from '../oos';
import Formules from './Formules';
import CardOo from './CardOo';

export default {
  name: 'Tribu',
  components: { Formules, CardOo },
  data: () => {
    return {
      oos: Oos,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes dotAnimation {
  from {
    opacity: 0.5;
  }

  20% {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }
}

section.header {
  padding-top: 180px;

  .discussion {
    position: relative;
    grid-column: 2 / 7;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -70px;
      bottom: 0;
      width: 10000px;
      background-color: #282081;
      z-index: -1;
    }

    ul {
      padding: 50px 0 0;
    }

    .writing {
      display: inline-flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      width: 100px;

      margin: -20px 0 60px;

      background-color: #1f186f;
      border-radius: 50px;
      padding: 15px 18px;

      .dot {
        display: block;
        height: 8px;
        width: 8px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 4px;
        animation: dotAnimation 1.8s infinite both;

        &:nth-child(2) {
          animation-delay: 0.4s;
        }

        &:nth-child(3) {
          animation-delay: 0.8s;
        }
      }
    }
  }

  > .content {
    grid-column: 8 / 12;
    margin-top: 60px;

    h2 {
      margin-bottom: 20px;
    }

    p:not(.small) {
      margin-bottom: 40px;
    }
  }

  @include max-tablet {
    padding-top: 50px;

    .discussion,
    > .content {
      grid-column: span 1;
    }

    .discussion {
      margin-top: 30px;
      margin-right: 20px;
      order: 2;

      &::before {
        right: 0;
      }
    }
  }
}

section.tribu {
  padding-top: 140px;

  h2,
  ul {
    grid-column: 3 / 11;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    row-gap: 50px;

    li {
      grid-column: span 1;
      flex-shrink: 0;
      flex-grow: 0;

      a {
        text-decoration: none;
      }
    }
  }

  @include max-tablet {
    h2,
    ul {
      grid-column: span 1;
      row-gap: 0;
    }
  }

  @include tablet {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @include phone {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

section.formules {
  padding: 160px 0;
}
</style>
