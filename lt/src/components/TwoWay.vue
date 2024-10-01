<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>gia tri cua inputValue : {{ inputValue }}</p>
    <button @click="handleClick">click</button>

    <ul>
      my hobbies
      <li>
        <input type="checkbox" v-model="hobbies" value="đá bóng"/>
        đá bóng
      </li>
    </ul>
    <ul>
      my hobbies
      <li>
        <input type="checkbox" v-model="hobbies" value="Cầu lông"/>
        cầu lông
      </li>
    </ul>
    <ul>
      my hobbies
      <li>
        <input type="checkbox" v-model="hobbies" value="code" />
        code
      </li>
    </ul>
    <p>Giá trị sở thích đc chọn : {{ hobbies }}</p>
    ***********************************
    <ul>
        <li>
            <input type="radio" v-model="gender" value="nam">
            nam
        </li>
    </ul>
    <ul>
        <li>
            <input type="radio" v-model="gender" value="nu">
            nu
        </li>
    </ul>
    <ul>
        <li>
            <input type="radio" v-model="gender" value="khac">
            gioi tinh khac
        </li>
    </ul>
    <p>Giá trị giới tính dc chọn : {{ gender }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const handleClick = () => {
  inputValue.value = "PTIT_K23";
};
const inputValue = ref("rikkei");

const hobbies = ref([])

const gender = ref("")
</script>

<style>
</style>