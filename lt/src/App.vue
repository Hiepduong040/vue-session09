<template>
  <div>
    <h1>session09 : data binding!</h1>
    <p>1. One-way data binding</p>
    <p>Count: {{ count }}</p>
    <button @click="handleClick">click</button>
    **********************
    <OneWay/>
    **********************
    <TwoWay/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OneWay from "./components/OneWay.vue";
import TwoWay from "./components/TwoWay.vue";
const count = ref(0);
const handleClick = () => {
  count.value = count.value + 1;
};
</script>

<style>
</style>