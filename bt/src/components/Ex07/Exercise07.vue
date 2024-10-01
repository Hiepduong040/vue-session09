<template>
  <div class="form-container">
    <h3>Bài 7:</h3>
    <form @submit.prevent="handleSubmit">
      <p>Thêm mới sản phẩm</p>
      <label for="productCode">Mã sản phẩm:</label>
      <input type="text" v-model="productCode" />
      <br />
      <label for="productName">Tên sản phẩm:</label>
      <input type="text" v-model="productName" />
      <br />
      <label for="price">Giá:</label>
      <input type="number" v-model="price" />
      <br />
      <label for="quantity">Số lượng:</label>
      <input type="number" v-model="quantity" />
      <br />
      <button type="submit">Thêm mới</button>
    </form>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const productCode = ref("");
const productName = ref("");
const price = ref(0);
const quantity = ref(0);

const handleSubmit = () => {
  const product = {
    productCode: productCode.value,
    productName: productName.value,
    price: price.value,
    quantity: quantity.value,
  };

  console.log("Sản phẩm đã được thêm mới:", product);
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
  