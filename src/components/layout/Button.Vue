<template>
  <button class="btn" @click="onClick">
    <slot>Button</slot>
  </button>
  </template>
  ​
  <script setup>
    const props = defineProps({
      onClick: {
        type: Function,
        required: true
      }
    })
  </script>