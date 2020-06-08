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
        <div class="writing" ref="writing" :style="`opacity:${isPlaying ? 1 : 0}`">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="actions">
          <div class="action" @click="playPause">
            <div class="icon">
              <img
                src="../assets/img/icons/play.svg"
                v-if="!isPlaying"
                style="width: 15px"
                alt="Jouer"
              />
              <img
                src="../assets/img/icons/pause.svg"
                v-if="isPlaying"
                style="width: 15px;height:20px"
                alt="Pause"
              />
            </div>Ecouter
          </div>
          <div class="action">
            <div class="icon">
              <img src="../assets/img/icons/sound.svg" style="width: 25px" alt="Jouer" />
            </div>Activer le son
          </div>
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
      isPlaying: false,
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
          name: "vegetoo",
          sentence:
            "Je commence à avoir soif, je me servirais bien une tisane. Ça vous dit les copains ?"
        }
      ],
      nextSentences: [
        {
          name: "meli-meloo",
          sentence: "Oh ouiiiii !"
        },
        {
          name: "vegetoo",
          sentence:
            "Super ! Peut être une petite verveine ou une camomille, qu’est ce qu’on choisi ?"
        },
        {
          name: "whoow",
          sentence: "Est-ce qu’on tire à pile ou face ?"
        },
        {
          name: "infoo",
          sentence: "Bonne idée !"
        },
        {
          name: "whoow",
          sentence: "Cool ! Pile verveine, face camomille ! C’est partiiiiii ! "
        },
        {
          name: "whoow",
          sentence: "Pile ! Verveine pour tout le monde !"
        },
        {
          name: "vegetoo",
          sentence: "Est-ce que vous avez déjà bu une tisane d’ortie ? "
        },
        {
          name: "meli-meloo",
          sentence:
            "Moi j’en ai bu une fois, je m’attendais à ce que ça pique, mais en faite pas du tout, c’est tout doux."
        },
        {
          name: "infoo",
          sentence:
            "Il parait que c’est très bon pour le corps, notamment la peau et les reins."
        },
        {
          name: "vegetoo",
          sentence:
            "Oui c’est aussi riche en calcium. C’est drôle que cette plante urticante soit aussi cool pour nous une fois cuisinée."
        },
        {
          name: "discoo",
          sentence:
            "Le calcium c’est pas que dans les orties, c’est dans la musique aussi. Il y a un artiste américain qui fait de l’électro sous le pseudo de Calcium. On s’en passe un morceau ?"
        },
        {
          name: "infoo",
          sentence:
            "Oui enfin... C’est quand même un artiste éléctro un peu énervé. Je ne suis pas sûre que ça nous aide à nous détendre..."
        },
        {
          name: "discoo",
          sentence: "C’est pas faux... Une prochaine fois peut-être !"
        }
      ],
      originalSentences: [
        {
          name: "vegetoo",
          sentence:
            "Je commence à avoir soif, je me servirais bien une tisane. Ça vous dit les copains ?"
        }
      ],
      originalNextSentences: [
        {
          name: "meli-meloo",
          sentence: "Oh ouiiiii !"
        },
        {
          name: "vegetoo",
          sentence:
            "Super ! Peut être une petite verveine ou une camomille, qu’est ce qu’on choisi ?"
        },
        {
          name: "whoow",
          sentence: "Est-ce qu’on tire à pile ou face ?"
        },
        {
          name: "infoo",
          sentence: "Bonne idée !"
        },
        {
          name: "whoow",
          sentence: "Cool ! Pile verveine, face camomille ! C’est partiiiiii ! "
        },
        {
          name: "whoow",
          sentence: "Pile ! Verveine pour tout le monde !"
        },
        {
          name: "vegetoo",
          sentence: "Est-ce que vous avez déjà bu une tisane d’ortie ? "
        },
        {
          name: "meli-meloo",
          sentence:
            "Moi j’en ai bu une fois, je m’attendais à ce que ça pique, mais en faite pas du tout, c’est tout doux."
        },
        {
          name: "infoo",
          sentence:
            "Il parait que c’est très bon pour le corps, notamment la peau et les reins."
        },
        {
          name: "vegetoo",
          sentence:
            "Oui c’est aussi riche en calcium. C’est drôle que cette plante urticante soit aussi cool pour nous une fois cuisinée."
        },
        {
          name: "discoo",
          sentence:
            "Le calcium c’est pas que dans les orties, c’est dans la musique aussi. Il y a un artiste américain qui fait de l’électro sous le pseudo de Calcium. On s’en passe un morceau ?"
        },
        {
          name: "infoo",
          sentence:
            "Oui enfin... C’est quand même un artiste éléctro un peu énervé. Je ne suis pas sûre que ça nous aide à nous détendre..."
        },
        {
          name: "discoo",
          sentence: "C’est pas faux... Une prochaine fois peut-être !"
        }
      ]
    };
  },
  methods: {
    playPause() {
      if (this.nextSentences.length > 0) {
        this.isPlaying = !this.isPlaying;
      }
    }
  },
  mounted() {
    setInterval(() => {
      if (this.isPlaying) {
        const nextSentence = this.nextSentences.shift();

        if (nextSentence) {
          this.sentences.push(nextSentence);
        } else {
          this.sentences = this.originalSentences;
          this.nextSentences = this.originalNextSentences;
        }
      }
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
      height: 600px;

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
          justify-content: flex-end;
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
      transition: opacity 0.2s ease;

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
