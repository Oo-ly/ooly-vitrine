<template>
  <section class="contact wrap">
    <h2>Nous contacter</h2>
    <p>
      Vous souhaitez plus d’informations avant de rejoindre la tribu Oo’ly ou vous avez des questions sur votre boitier ? Laissez nous un petit mot,
      nous vous répondrons au plus vite !
    </p>
    <form @submit.prevent="sendEmail" class="contact">
      <input v-model="name" type="text" name="name" placeholder="Nom" />
      <input v-model="email" type="email" name="email" placeholder="Adresse email" />
      <input v-model="subject" type="text" name="subject" placeholder="Objet" />
      <textarea v-model="message" name="message" placeholder="Message"></textarea>
      <div class="btn btn-xs" @click="sendEmail" v-if="!isSending">Envoyer</div>
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import * as Toastr from 'toastr';
import 'toastr/build/toastr.css';

export default {
  name: 'Contact',
  data: () => {
    return {
      name: null,
      email: null,
      message: null,
      subject: null,
      isSending: false,
    };
  },
  methods: {
    sendEmail: function() {
      this.isSending = true;

      emailjs
        .send('ooly', 'ooly', { name: this.name, email: this.email, message: this.message, subject: this.subject }, 'user_ULXPHBLOdfltaxUlVqiG1')
        .then(
          () => {
            this.isSending = false;
            Toastr.success('Votre message a bien été envoyé !', 'Message', {
              positionClass: 'toast-bottom-right',
              showDuration: '300',
              hideDuration: '1000',
              timeOut: '5000',
              closeButton: true,
              progressBar: true,
            });
          },
          () => {
            this.isSending = false;
            Toastr.error("Une erreur s'est produite", 'Message', {
              positionClass: 'toast-bottom-right',
              showDuration: '300',
              hideDuration: '1000',
              timeOut: '5000',
              closeButton: true,
              progressBar: true,
            });
          }
        );
    },
  },
};
</script>
