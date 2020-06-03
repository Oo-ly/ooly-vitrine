<template>
  <section class="contact wrap">
    <h2>Nous contacter</h2>
    <p>
      Vous souhaitez plus d’informations avant de rejoindre la tribu Oo’ly ou vous avez des questions sur votre boitier ? Laissez nous un petit mot,
      nous vous répondrons au plus vite !
    </p>
    <form @submit.prevent="" class="contact">
      <input type="text" name="name" placeholder="Nom" />
      <input type="text" name="email" placeholder="Adresse email" />
      <input type="text" name="subject" placeholder="Objet" />
      <textarea name="message" placeholder="Message"></textarea>
      <div class="btn btn-xs">Envoyer</div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
