<template>
  <div>
    <h3>Bài 5:</h3>
    <p>GIới tính: {{ gender }}</p>
    <ul>
        <li>
            <input type="radio" v-model="gender" value="Nam">
            Nam
        </li>
        <li>
            <input type="radio" v-model="gender" value="Nữ">
            Nữ
        </li>
        <li>
            <input type="radio" v-model="gender" value="Khác">
            Khác
        </li>
    </ul>
    <br>*********************************************
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const gender = ref("")
</script>

<style>

</style>