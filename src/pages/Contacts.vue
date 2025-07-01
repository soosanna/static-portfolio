<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <form 
      action="https://formspree.io/f/xldnzbvy" 
      method="POST" 
      class="contact-form"
    >
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" required />
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.contact-page {
  padding: 40px;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #174474;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #174474;
  outline: none;
}

.submit-btn {
  background-color:#174474;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #174474;
}
</style>
