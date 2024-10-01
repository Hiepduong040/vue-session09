<template>
  <div>
    <h3>Bài 4: </h3>
    <p>Tiến độ hoàn thành: {{ finish }}%</p>
    <input type="range" v-model="finish" />
    <br>
    ******************************************
  </div>
</template>

<script setup>
import { ref } from "vue";

const finish = ref("");
</script>

<style>
</style>