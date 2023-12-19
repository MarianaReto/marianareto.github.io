<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="project in otherProjects" :key="project.title">
            <v-card class="mb-10">
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text>{{ project.description }}</v-card-text>
              <v-card-actions v-if="project.sourceCodeUrl">
                <v-btn color="primary" :href="project.sourceCodeUrl" target="_blank">View Source Code</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-img :src="project.screenshotUrl" max-height="200" contain></v-img>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <h2 class="my-5">University Projects</h2>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="project in universityProjects" :key="project.title">
            <v-card class="mb-10">
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text>{{ project.description }}</v-card-text>
              <v-card-actions v-if="project.sourceCodeUrl">
                <v-btn color="primary" :href="project.sourceCodeUrl" target="_blank">View Source Code</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-img :src="project.screenshotUrl" max-height="200" contain></v-img>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  computed: {
    universityProjects() {
      return this.projects.filter(project => project.type === 'university');
    },
    otherProjects() {
      return this.projects.filter(project => project.type !== 'university');
    },
  },
  data() {
    return {
      projects: [
        {
          title: 'Java - Document Automation',
          description: 'Extensive work experience with Java Quarkus, for the development of an application that automatically converts plaintext documentation into docx, using the company styling.',
        },
        {
          title: 'Ansible Automation',
          description: 'Managed and automated the installation of both Windows and Linux systems using Ansible.',
        },
        {
          title: 'Powershell Configuration',
          description: 'Configured Windows Systems using Powershell Scripting.',
        },
        {
          title: 'Vuetify Website',
          description: 'This portfolio website which was made using Vue.js and Vuetify.',
          sourceCodeUrl: 'https://github.com/MarianaReto/marianareto.github.io'
        },
        {
          title: 'Java',
          description: 'Development of a mock social network for professionals and Development of a mock social network to connect students with tutors. Realization of a Java Project using Version Control and the Spring Framework.',
          type: 'university'
        },
        {
          title: 'Java',
          description: 'Development of a mock social network for professionals and Development of a mock social network to connect students with tutors. Realization of a Java Project using Version Control and the Spring Framework.',
          type: 'university'
        },
        {
          title: 'JavaScript',
          description: 'Development of a phaser browser-based game.',
          screenshotUrl: 'src/assets/phaser2.gif',
          type: 'university'
        },
        {
          title: 'C',
          description: 'Development of a Sudoku Solver Program.',
          screenshotUrl: 'src/assets/sudokuX.png',
          sourceCodeUrl: 'https://github.com/MarianaReto/SudokuX',
          type: 'university'
        },
        {
          title: 'PHP',
          description: 'Development of a mock web marketplace for buying items.',
          type: 'university'
        },
        {
          title: 'Python',
          description: 'Development of a couple of loose projects, in order to strengthen my knowledge in Python.',
          type: 'university'
        },
        {
          title: 'PostgresSQL',
          description: 'Creation and Management of a Database relative to University.',
          type: 'university'
        },
      ]
    }
  }
}
</script>
