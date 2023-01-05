<template>
  <div class="rounded-md bg-black p-0 fixed right-4 bottom-2 shadow-3" style="width: 294px; bottom: 10px" v-if="openAlert">
    <div class="flex p-4">
      <div class="flex-shrink-0">
        <slot name="icon"></slot>
      </div>
      <button
        type="button"
        class="mr-2 hover:text-light focus:outline-none outline-none cursor-pointer absolute top-2.5 right-5 hover:bg-red text-white p-1 rounded ease-in-out duration-300"
        @click="showDetails = !showDetails"
        v-if="showDetailsBtn"
      >
        <span class="sr-only">Show details</span>
        <component
          :is="Chevrondown"
          class="block h-4 w-4 cursor-pointer"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        class="hover:text-light focus:outline-none outline-none cursor-pointer absolute top-2.5 right-2 hover:bg-red text-white p-1 rounded ease-in-out duration-300"
        @click="$emit('closeAlert')"
      >
        <span class="sr-only">Close panel</span>
        <component
          :is="XMarkIcon"
          class="block h-4 w-4 cursor-pointer"
          aria-hidden="true"
        />
      </button>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-white">
          <slot name="title"></slot>
        </h3>
        <div class="mt-2 text-sm text-white">
          <slot name="description"></slot>
        </div>
      </div>
    </div>
    <div class="details relative border-t border-gray-200 p-4 mt-2 text-sm text-white" v-if="showDetails">
      <slot name="details"></slot>
    </div>
  </div>
</template>

<script setup>
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import Chevrondown from '@/assets/icons/Chevrondown.vue';
defineProps({
  openAlert: {
    type: Boolean,
    required: true,
    default: false,
  },
  showDetails: {
    type: Boolean,
    required: true,
    default: false,
  },
  showDetailsBtn: {
    type: Boolean,
    required: true,
    default: false,
  },
});

</script>