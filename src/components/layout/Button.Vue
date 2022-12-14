<template>
  <button :class="btnClasses ? btnClasses : 'btn bg-peach w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300'"
    @click="onClick">
    <slot>Save</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
  btnClasses: {
    type: String,
    required: true
  }
});
</script>
