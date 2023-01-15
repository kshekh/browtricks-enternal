<template>
  <div class="relative flex flex-col flex-1 w-full divide-y divide-grey-500 space-y-10">
      <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex flex-col">
        <div v-for="formTemp in formTemplates" :key="formTemp.title" class="overflow-hidden rounded-lg shadow-3 bg-white divide-y divide-grey-500">
          <div class="relative py-6 px-4 flex justify-center items-center">
            <img class="h-auto max-h-60 object-cover" :src="formTemp.templateUrl" alt="" />
          </div>
          <div class="space-y-1 px-4 sl:px-8 py-6">
              <h4 class="flex-1 text-base font-bold leading-none text-grey-800">{{ formTemp.title }}</h4>
              <p class="text-base font-normal text-grey-700 leading-snug">Created
                <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
              </p>
          </div>
        </div>
      
    </div> 
      <div class="space-y-4 sm:space-y-6 pt-6">
        <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto px-3 md:px-0">Forms you have created</h2>
        <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 flex flex-col">
        <div v-for="formTemp in formTemplates" :key="formTemp.title" class="overflow-hidden rounded-lg shadow-3 bg-white divide-y divide-grey-500">
          <div class="relative py-6 px-4 flex justify-center items-center">
            <img class="h-auto max-h-60 object-cover" :src="formTemp.templateUrl" alt="" />
          </div>
          <div class="space-y-1 px-4 sl:px-8 py-6">
              <h4 class="flex-1 text-base font-bold leading-none text-grey-800">{{ formTemp.title }}</h4>
              <p class="text-base font-normal text-grey-700 leading-snug">Created
                <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
              </p>
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
      '/src/assets/Pre_and_Post_Care_Agreement.png',
  },
  {
    title: 'Pre and Post Care Agreement',
    date: 'Nov 10, 2020 - 4:39 AM',
    templateUrl:
      '/src/assets/Pre_and_Post_Care_Agreement.png',
  },
  {
    title: 'Pre and Post Care Agreement',
    date: 'Nov 10, 2020 - 4:39 AM',
    templateUrl:
      '/src/assets/Pre_and_Post_Care_Agreement.png',
  },
]
</script>