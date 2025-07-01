<template>
  <div class="skills-page">
    <h1>My Skills</h1>
    <div v-for="skill in skills" :key="skill.name" class="skill">
      <div class="skill-name">{{ skill.name }}</div>
      <div class="skill-bar">
        <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'AWS', level: 85 },
  { name: 'Linux', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'CI/CD', level: 70 },
  { name: 'Networking', level: 65 }
])
</script>

<style scoped>
.skills-page {
  padding: 40px;
  max-width: 700px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #174474;
}

.skill {
  margin-bottom: 20px;
}

.skill-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.skill-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.skill-level {
  height: 20px;
  background-color: #174474;;
  width: 0%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
}
</style>
