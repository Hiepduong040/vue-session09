<template>
  <div>
    <h3>Bài 2</h3>
    <p>Màu sắc</p>
    <input type="color" v-model="inputColor" />
    <p>Mã màu: {{ inputColor }}</p>
    *****************************
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputColor = ref("");
</script>

<style>
</style>