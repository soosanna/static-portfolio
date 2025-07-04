<template>
  <div class="projects-page">
    <h1>My Projects</h1>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.id" class="project-item">
        <span>{{ project.title }}</span>
        <a :href="project.link" target="_blank" class="project-link">
          <i class="fab fa-github"></i> 
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  { id: 1, title: 'AWS CI/CD Pipeline', link: 'https://github.com/yourrepo/aws-ci-cd' },
  { id: 2, title: 'Portfolio Website', link: 'https://github.com/yourrepo/portfolio-website' },
  { id: 3, title: 'LAMP Stack Deployment', link: 'https://github.com/yourrepo/lamp-stack' },
  { id: 4, title: 'Serverless Project Using Lambda', link: 'https://github.com/soosanna/cloud-resume'}
])
</script>

<style scoped>
.projects-page {
  padding: 40px;
  max-width: 700px;
  margin: auto;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color:#174474;
}

.project-list {
  list-style: none;
  padding: 0;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f8;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.project-item:hover {
  background-color: #dce4ec;
}

.project-link {
  color:#174474;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-link:hover {
  text-decoration: underline;
}

.project-link i {
  font-size: 18px;
}
</style>
