<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="mb-5" v-for="project in projects" :key="project.title">
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-card-actions v-if="project.sourceCodeUrl">
            <v-btn color="primary" :href="project.sourceCodeUrl" target="_blank">View Source Code</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-img :src="project.screenshotUrl" max-height="200" contain></v-img>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Java',
          description: 'Development of a mock social network for professionals and Development of a mock social network to connect students with tutors. Realization of a Java Project using Version Control and the Spring Framework.',
          screenshotUrl: 'src/assets/JavaSpringTests.jpg',
        },
        {
          title: 'JavaScript',
          description: 'This website which was made using Vue.js.',
          sourceCodeUrl: 'https://github.com/MarianaReto/marianareto.github.io'
        },
        {
          title: 'JavaScript',
          description: 'Development of a phaser browser-based game.',
          screenshotUrl: 'src/assets/phaser2.gif',
        },
        {
          title: 'C',
          description: 'Development of a Sudoku Solver Program.',
          screenshotUrl: 'src/assets/sudokuX.png',
          sourceCodeUrl: 'https://github.com/MarianaReto/SudokuX'
        },
        {
          title: 'PHP',
          description: 'Development of a mock web marketplace for buying items.',
        },
        {
          title: 'Python',
          description: 'Development of a couple of loose projects, in order to strengthen my knowledge in Python.',
        },
        {
          title: 'PostgresSQL',
          description: 'Creation and Management of a Database relative to University.',
        },
      ]
    }
  }
}
</script>
