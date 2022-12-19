<template>
  <div class="space-y-1">
    <label
      :for="id"
      :class="`block text-sm font-normal text-grey-900 text-start ${labelClasses}`"
    >
      {{ labelText }}
    </label>
    <textarea :rows="rows" :name="name" :id="comment" :class="`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClasses}`"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
      <b>Error:</b> Invalid or incorrect Username Invalid or incorrect password
    </p>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  labelText: String,
  modelValue: String,
  rows: {
    type: Boolean,
    required: false
  },
  // Input name attr
  name: {
    type: String,
    required: false,
  },
  // Input box classes
  inputClasses: {
    type: String,
    required: true,
  },
  // Label classes
  labelClasses: {
    type: String,
    required: true,
  },
});
</script>
