<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="form-wrapper border-b border-grey-300 pb-6 mb-6">
      <div class="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        <div v-for="formTemp in formTemplates" :key="formTemp.title" class="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
          <div class="flex-shrink-0 p-6">
            <img class="h-48 w-full object-cover" :src="formTemp.templateUrl" alt="" />
          </div>
          <div class="mt-0 flex items-center border-t border-grey-300 bg-white p-6">
            <div class="ml-0">
              <p class="text-sm font-medium text-gray-900">{{ formTemp.title }}</p>
              <div class="flex space-x-1 text-sm text-peach-200">Created
                <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-wrapper border-0 border-grey-300 pb-6 mb-6">
      <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 mr-auto mb-6 py-6">Forms you have created</h2>

      <div class="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        <div v-for="formTemp in formTemplates" :key="formTemp.title" class="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
          <div class="flex-shrink-0 p-6">
            <img class="h-48 w-full object-cover" :src="formTemp.templateUrl" alt="" />
          </div>
          <div class="mt-0 flex items-center border-t border-grey-300 bg-white p-6">
            <div class="ml-0">
              <p class="text-sm font-medium text-gray-900">{{ formTemp.title }}</p>
              <div class="flex space-x-1 text-sm text-peach-200">Created
                <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import Button from '@/components/Button.vue';

const formTemplates = [
  {
    title: 'Pre and Post Care Agreement',
    date: 'Nov 10, 2020 - 4:39 AM',
    templateUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Pre and Post Care Agreement',
    date: 'Nov 10, 2020 - 4:39 AM',
    templateUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Pre and Post Care Agreement',
    date: 'Nov 10, 2020 - 4:39 AM',
    templateUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
]
</script>