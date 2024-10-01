<template>
  <div>
    <h3>Bài 6:</h3>
    <p>Sở thích: {{ hobbies }}</p>
    <ul>
      <li>
        <input type="checkbox" v-model="hobbies" value="đá bóng" />
        đá bóng
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="bóng chuyền" />
        bóng chuyền
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="code" />
        code
      </li>
      <li>
        <input type="checkbox" v-model="hobbies" value="Bơi lội" />
        Bơi lội
      </li>
    </ul>
    <br>****************************************
  </div>
</template>

<script setup>
import { ref } from "vue";

const hobbies = ref([]);
</script>

<style>
</style>