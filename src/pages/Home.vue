<template>
  <div class="home-container">
    <div class="profile-section">
      <img src="../assets/soosanna.png" alt="Soosanna Profile" class="profile-photo" />
      <div class="intro-text">
        <h1>Hi, I'm Soosanna 👋</h1>
        <h2>Aspiring Cloud & DevOps Engineer</h2>
        <p>
          I’m passionate about building scalable cloud solutions and automating deployments.
          I specialize in AWS, Linux, Docker, and CI/CD pipelines.
          Welcome to my portfolio!
        </p>
       
<router-link to="/projects" class="btn">View My Projects</router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed now
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background: linear-gradient(135deg, #f0f0f0, #dfe9f3);
}

.profile-section {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d8dfe7;
}

.intro-text h1 {
  margin: 0;
  font-size: 36px;
  color: #333;
}

.intro-text h2 {
  font-size: 24px;
  color: #174474;
}

.intro-text p {
  font-size: 18px;
  margin: 15px 0;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #174474;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #a1609c;
}
</style>
