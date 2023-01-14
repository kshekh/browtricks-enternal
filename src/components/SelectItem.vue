<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">Respond type</ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <component
            :is="selected.avatar"
            class="block h-4 w-4 cursor-pointer"
            aria-hidden="true"
          />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <Chevrondown class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <component
                  :is="person.avatar"
                  class="block h-4 w-4 cursor-pointer"
                  aria-hidden="true"
                />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name }}</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import Chevrondown from '@/assets/icons/Chevrondown.vue';
import TextLeftAlign from '@/assets/icons/TextLeftAlign.vue';
import MultipleChoiceIcon from '@/assets/icons/MultipleChoiceIcon.vue';
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon.vue';

const people = [
  {
    id: 1,
    name: 'Text Response',
    avatar: TextLeftAlign,
  },
  {
    id: 2,
    name: 'Checklist',
    avatar: CheckCircleIcon,
  },
  {
    id: 3,
    name: 'Multiple choice',
    avatar: MultipleChoiceIcon,
  }
]

const selected = ref(people[1])
</script>