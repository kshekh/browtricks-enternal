<template>
  <button
    :class="
      { 
        'inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-auto text-center py-2 text-base font-medium text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300': btnBordered, // red bordered button
        'inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach': btnBorderedGray, // gray bordered button
        'inline-flex gap-2 items-center justify-center bg-peach w-auto rounded-md border border-transparent py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300': btnPeach, // default button peach
     }
     "
    @click="$emit('click')"
  >
    <slot>Save</slot>
  </button>
</template>

<script setup>
defineProps({
  btnClasses: {
    type: String,
    required: false,
  },
  btnPeach: {
    type: Boolean,
    required: true,
    default: 'true'
  },
  btnBordered: Boolean,
  btnBorderedGray: Boolean,
});
</script>
