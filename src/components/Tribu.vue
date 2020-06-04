<template>
  <div id="tribu">
    <Breadcrumbs :links="breadcrumbs" />
    <section class="header wrap">
      <div class="discussion">
        <transition-group transition-group name="list" tag="ul">
          <li v-for="(sentence, index) in sentences" :key="index">
            <Sentence :name="sentence.name" :sentence="sentence.sentence" />
          </li>
        </transition-group>
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
        <p
          class="small"
        >Ils peuvent ainsi discuter entre eux, mais aussi vous parler et vous proposer des occupations personnalisées.</p>
        <p
          class="small"
        >Découvrez tous les Oo, et adopter ceux qui vous correspondent le mieux, pour composer votre tribu !</p>
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
import Oos from "../oos";
import Formules from "./Formules";
import CardOo from "./CardOo";
import Breadcrumbs from "./Breadcrumbs";
import Sentence from "./Sentence";

export default {
  name: "Tribu",
  components: { Formules, CardOo, Breadcrumbs, Sentence },
  data: () => {
    return {
      oos: Oos,
      breadcrumbs: [
        {
          name: "Accueil",
          url: "/"
        },
        {
          name: "Les Oo'",
          url: "/tribu"
        }
      ],
      sentences: [
        {
          name: "cinooche",
          sentence:
            "Si c’est pas un animal qui l’a tué, c’est ptetre un végétal ?"
        },
        {
          name: "vegetoo",
          sentence:
            "Promis c’est pas moi, mais c’est peut-être une sarracenia, une plante carnivore d’Amérique du Nord."
        },
        {
          name: "infoo",
          sentence:
            "Mais non, ces plantes-là ne mangent que des insectes voyons."
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.sentences.push({
        name: "infoo",
        sentence: "Mais non, ces plantes-là ne mangent que des insectes voyons."
      });
    }, 2500);
  }
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
  .discussion {
    position: relative;
    grid-column: 2 / 7;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: -70px;
      bottom: 0;
      width: 10000px;
      background-color: #282081;
      z-index: -1;
    }

    ul {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      max-height: 600px;
      padding: 50px 0 0;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
          180deg,
          rgba(40, 32, 129, 1) 0%,
          rgba(18, 11, 86, 0) 50%
        );
        z-index: 10;
      }

      li::v-deep {
        transition: all 1s;
      }

      li:nth-child(even)::v-deep {
        article.sentence {
          .oo {
            order: 2;
            margin: 10px 0 0 55px;

            &::after {
              right: unset;
              left: 14px;
              transform: translate(-100%, 0) rotate(-55deg);
            }
          }

          .content {
            .name,
            p {
              text-align: right;
            }
          }

          .content p {
            margin-left: auto;
            margin-right: 0;
          }
        }
      }
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

    > .content {
      margin: 0;
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
    transition: height 1s ease;

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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
