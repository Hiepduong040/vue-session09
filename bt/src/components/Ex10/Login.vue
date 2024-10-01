<template>
  <div class="form-container">
    <h3>Bài 10:</h3>
    <form @submit.prevent="handleSubmit">
      <p>Đăng nhập tài khoản</p>
      <label>Email</label>
      <input type="text" v-model="email" />
      <br />
      <label>Mật khẩu</label>
      <input type="password" v-model="password" />
      <br />
      <button type="submit">Đăng nhập</button>
      <p v-if="message" class="message">{{ message }}</p>
    </form>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const message = ref("");

const handleSubmit = () => {
  if (!email.value || !password.value) {
    message.value = "Email và Mật khẩu không được để trống";
    return;
  }

  const user = JSON.parse(localStorage.getItem("users")) || [];
  console.log(user);
  
  if (user.email === email.value && user.password === password.value) {
    message.value = "Đăng nhập thành công";
  } else {
    message.value = "Đăng nhập thất bại";
  }
};
</script>
  

<style>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h3 {
  color: #333;
}

label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  color: green;
  margin-top: 10px;
}

.message {
  margin-top: 10px;
  color: green;

}
</style>
