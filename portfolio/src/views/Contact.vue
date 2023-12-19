<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="pa-4">
              <v-card-title class="headline">Contact Me</v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item  @click="dialNumber('+351967091676')">
                    <v-icon>mdi-phone</v-icon>
                    🇵🇹: +351967091676
                  </v-list-item>
                  <v-list-item @click="dialNumber('+310648786936')">
                    <v-icon>mdi-phone</v-icon>
                    🇳🇱: +310648786936
                  </v-list-item>
                  <v-list-item @click="sendEmail('marianareto99@gmail.com')">
                    <v-icon>mdi-email</v-icon>
                    marianareto99@gmail.com
                  </v-list-item>
                  <v-list-item @click="openLink('https://www.linkedin.com/in/mariana-reto/')">
                    <v-icon>mdi-linkedin</v-icon>
                    linkedin.com/in/mariana-reto
                  </v-list-item>
                  <v-list-item @click="openLink('https://www.instagram.com/itsamewariana')">
                    <v-icon>mdi-instagram</v-icon>
                    instagram.com/itsamewariana
                  </v-list-item>
                  <v-list-item @click="openLink('https://github.com/MarianaReto')">
                    <v-icon>mdi-github</v-icon>
                    github.com/MarianaReto
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    dialNumber(number) {
      window.location.href = `tel:${number}`;
    },
    sendEmail(email) {
      window.location.href = `mailto:${email}`;
    },
    openLink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>
