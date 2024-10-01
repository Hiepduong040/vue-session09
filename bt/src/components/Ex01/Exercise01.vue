<template>
  <div>
    <h3>Bài 1:</h3>
    <label for="">email</label>
    <input type="text" v-model="inputValue" />
    <p>Giá trị: {{ inputValue }}</p>
    ********************************
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>

<style>
</style>