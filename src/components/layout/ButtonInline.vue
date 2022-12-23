<template>
  <button
    :class="`inline-flex items-center rounded-md border border-grey-900 bg-white px-6 py-2 font-semibold text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach leading-none outline-none ${btnClasses}`"
    @click="$emit('click')"
  >
    <slot>Save</slot>
  </button>
</template>

<script setup>
defineProps({
  btnClasses: {
    type: String,
    required: true,
  },
  
   
});
</script>
