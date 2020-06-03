<template>
  <div id="app">
    <div class="background"></div>
    <Header />
    <transition>
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import './assets/scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Header, Footer },
  data: () => {
    return {
      target: 0,
    };
  },
  methods: {
    lerp(a, b, n) {
      return (1 - n) * a + b * n;
    },
    animate() {
      requestAnimationFrame(this.animate);

      const html = document.querySelector('.background');
      const currentY = parseFloat(html.style.backgroundPositionY) || 0;

      html.style.backgroundPositionY = `${this.lerp(currentY, this.target, 0.1)}px`;
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;

      this.target = -(scrolled * 0.2);
    });
    this.animate();
  },
};
</script>
