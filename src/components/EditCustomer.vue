<template>
  <div class="flex-1 relative flex flex-col w-full">
    <div class="flex-1 p-4 md:p-5 xl:px-14 xl:py-12">
      <div class="space-y-6">
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
          Jane Doe Edit Page
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-6 lg:col-span-2">  
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4 class="text-lg font-semibold text-grey-800 leading-none">
                      Media
                    </h4>
                    <p class="text-sm text-grey-900 leading-tight">
                      This customer does not have<br> any content yet.
                    </p>
                  </div>
                  <div class="block">
                    <Button @emitclick="consoleClick" btn-classes="w-auto" class="w-38 py-1.5">Add Media</Button>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow hidden sm:block">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex items-center relative">
                    <h4 class="text-lg font-semibold text-gray-900 leading-none">
                      PMU Forms
                    </h4>
                    <Button @emitclick="consoleClick" btn-classes="w-auto" class="absolute right-0 text-blue ml-auto text-base w-auto bg-transparent shadow-none">Add custom form</Button>
                  </div>
                  <div class="flex gap-2 md:gap-5">
                    <div class="w-full flex-1">
                      <label for="search" class="sr-only">Search</label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon class="h-4 w-4 text-grey-800" aria-hidden="true" />
                        </div>
                        <input id="search" name="search"
                          class="block w-full placeholder-black/20 appearance-none rounded-md border-2 bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer pl-10"
                          placeholder="Search forms" type="search"/>   
                      </div>
                    </div>
                    <div class="sm:flex-none flex">
                      <button type="button"
                        class="inline-flex items-center rounded-md border-2 border-grey-800 bg-white px-6 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">
                        Browse
                      </button>  
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex">
                    <p class="text-lg font-semibold text-gray-900 leading-none">
                      PMU Form Timeline
                    </p>
                  </div>
                   <div class="flow-root">
                    <ul role="list" class="space-y-10 relative after:absolute after:z-0 after:top-0 after:left-2 after:h-[calc(100%-20px)] after:border-dashed after:border-peach after:border-l">
                      <li v-for="(activityItem) in activity" :key="activityItem.id" class="flex gap-x-3 relative">
                          <div class="flex h-4 w-4 items-center justify-center rounded-full bg-peach ring-8 ring-white"> </div>
                              <div class="text-sm text-gray-500 leading-none">
                                <span class="text-xs block font-medium pb-1.5 text-grey-700 leading-none">{{activityItem.date}}</span>
                                <span class="font-medium text-gray-900">{{activityItem.store_name ? activityItem.store_name : activityItem.cust_name}}</span>
                                {{ ' ' }}
                                <template v-if="activityItem.store_name !== ''">
                                  sent
                                </template>
                                <template v-else>
                                  signed
                                </template>
                                {{ ' ' }}
                                <span class="font-medium text-gray-900">{{activityItem.form_name}}</span>
                              </div>     
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button type="button"
                class="absolute bottom-0 sm:relative mt-4 inline-flex items-center justify-center rounded-md border-2 border-red bg-transparent px-4 w-44 text-center py-2 text-base font-semibold text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300">
                Delete Customer
              </button> 
            </div> 
            <!-- Right column -->
            <div class="grid grid-cols-1 gap-6 pb-12 sm:pb-0">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-4">
                    <div class="flex items-center space-y-2.5 relative">
                      <h4 class="text-lg font-semibold text-gray-900 leading-none">
                        Customer
                      </h4>
                      <Button  @emitclick="consoleClick" btn-classes="w-auto" class="absolute right-0 text-blue ml-auto text-base w-auto bg-transparent shadow-none">Edit</Button>
                    </div>
                    <div class="customer-details">
                      <p class="text-base text-gray-500 ">
                        Julia Barneby<br>
                        (888) 376-7160<br>
                        juliabarneby@gmail.com
                      </p>
                    </div> 
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4 class="text-lg font-semibold text-grey-800 leading-none">
                      Notes
                    </h4>
                    <p class="text-sm text-grey-900 leading-tight">
                      No notes about this customer
                    </p>
                  </div>
                  <div class="block">
                    <Button @emitclick="consoleClick" btn-classes="w-auto" class="w-38 py-1.5">Add Notes</Button>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';

import Input from '../components/layout/Input.vue';
import Button from '../components/layout/Button.vue';
import Textarea from '../components/layout/Textarea.vue';

const btnclasses = ['mt-6 inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-36 text-center', 'py-2', 'text-base', 'font-medium', 'text-red', 'shadow-sm', 'hover:bg-red', 'hover:text-white', 'focus:outline-none', 'focus:ring-2', 'focus:ring-red', 'focus:ring-offset-2', 'ease-in-out', 'duration-300']

const activity = [
  {
    id: 1,
    date: 'October 29, 2022, 2:34 PM',
    store_name: '',
    cust_name: 'Customer name 1',
    form_name: 'Form name'
  },
  {
    id: 2,
    date: 'October 17, 2022, 1:34 PM',
    store_name: 'Store name 2',
    cust_name: 'Customer name 2',
    form_name: 'Form name 2'
  },
]

function consoleClick() {
  console.log('Button clicked');
}
</script>
