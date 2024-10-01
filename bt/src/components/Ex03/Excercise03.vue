<template>
  <div>
    <h3>Bài 3:</h3>
    <p>Ngày sinh: {{ inputDate }}</p>
    <input type="date" v-model="inputDate" />
    <br>
    *************************
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputDate = ref("");
</script>

<style>
</style>