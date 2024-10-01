<template>
  <div class="form-container">
    <h3>Bài 9:</h3>
    <form @submit.prevent="handleSubmit">
      <p>Đăng ký tài khoản</p>
      <label for="userName">Tên sinh viên</label>
      <input type="text" v-model="userName" ref="myinput" />
      <label for="email">Email</label>
      <input type="text" v-model="email" />
      <label for="password">Mật khẩu</label>
      <input type="password" v-model="password" />
      <label for="address">Địa chỉ</label>
      <input type="text" v-model="address" />
      <button type="submit">Đăng ký</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userName = ref("");
const email = ref("");
const password = ref("");
const address = ref("");
const successMessage = ref("");
const myinput = ref(null);
const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

const handleSubmit = () => {
  if (!userName.value || !email.value || !password.value) {
    alert("Tên sinh viên, Email và Mật khẩu không được để trống");
    return;
  }

  // const userExists = existingUsers.some(user => user.email === email.value);

  // if (userExists) {
  //   alert("Email đã tồn tại");
  //   return;
  // }

  const newUser = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    address: address.value,
  };

  // existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(newUser));

  userName.value = "";
  email.value = "";
  password.value = "";
  address.value = "";

  successMessage.value = "Đăng ký tài khoản thành công";
  myinput.value.focus();
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
</style>
  