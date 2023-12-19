<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">Junior Developer</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p style="text-align: justify;">
          I am a passionate junior developer with a diverse skill set.
          I have experience in C, Java, PHP, JavaScript, Python, and PostgresSQL.
          I am also familiar with the Agile Scrum way of working and have spent a few sprints as a Scrum Master of our
          team during training.
          I also hold an EU secret clearance.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline>
          <v-timeline-item color="green" right>
            <template v-slot:opposite>
              <span>2017 - 2022</span>
            </template>
            <v-card>
              <v-card-title class="headline">University</v-card-title>
              <v-card-text>
                Developed a diverse skill set through various projects, including a Sudoku Solver Program and a Mock Web
                Marketplace.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="blue" right>
            <template v-slot:opposite>
              <span>2022 - Present</span>
            </template>
            <v-card>
              <v-card-title class="headline">CGI Netherlands</v-card-title>
              <v-card-text>
                Working in an Agile Scrum environment with a focus on Java Quarkus, Vue, and Automation using Ansible
                and Powershell.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
