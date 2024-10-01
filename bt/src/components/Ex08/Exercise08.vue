<template>
  <div class="form-container">
    <h3>Bài 8:</h3>
    <form @submit.prevent="handleSubmit">
      <p>Thêm tài khoản mới</p>
      <label for="">Họ và tên</label>
      <input type="text" v-model="userName"/>
      <br>
      <label for="">Email</label>
      <input type="text" v-model="email"/>
      <br>
      <label for="">Mật khẩu</label>
      <input type="password" v-model="password"/>
      <br>
      <label for="">Nhập lại mật khẩu</label>
      <input type="password" v-model="rePassword"/>
      <br>
      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userName = ref("")
const email = ref("")
const password = ref("")
const rePassword = ref("")
const handleSubmit =()=>{
    const user = {
        userName: userName.value,
        email: email.value,
        password: password.value,
        rePassword: rePassword.value,
    }
    console.log("Ng dùng đã đc thêm mới:", user);
    
}
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

form {
  margin-bottom: 20px;
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
</style>