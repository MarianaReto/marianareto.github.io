<template>
  <v-app>
    <v-main>
      <v-container>
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="skill in skills" :key="skill.title">
              <v-list-item-content>
                <v-list-item-title>{{ skill.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ skill.description }}</v-list-item-subtitle>
                <v-rating
                  v-model="skill.level"
                  length="4"
                  color="teal darken-2"
                  background-color="teal darken-2 lighten-4"
                  empty-icon="mdi-circle-outline"
                  full-icon="mdi-circle"
                  half-icon="mdi-circle-half"
                  half-increments
                  hover
                  readonly
                ></v-rating>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        title: 'Java',
        description: 'Development of a mock social network for professionals and Development of a mock social network to connect students with tutors.',
        level: 4,
      },
      {
        "title": "Agile",
        "description": "I have worked with Agile methodologies since the beginning of my career as a software engineer.",
        "level": 4
      },
      {
        title: 'JavaScript',
        description: 'Development of a phaser browser-based game.',
        level: 3,
      },
      {
        title: 'Python',
        description: 'Development of a couple of loose projects, in order to strengthen my knowledge in Python.',
        level: 2.5,
      },
      {
        title: 'C',
        description: 'Development of a Sudoku Solver Program.',
        level: 2,
      },
      {
        title: 'PHP',
        description: 'Development of a mock web marketplace for buying items.',
        level: 1.5,
      },

      {
        title: 'PostgreSQL',
        description: 'Creation and Management of a Database relative to University.',
        level: 1.5,
      },
    ],
  }),
}
</script>
