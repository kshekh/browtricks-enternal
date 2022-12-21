<template>
  <div class="flex-1 relative flex flex-col w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div class="mb-7 pt-3 md:pt-0">
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 pb-10">
          Jane Doe Edit Page
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <div class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      Media
                    </p>
                    <p class="mt-3 text-base text-gray-500 lg:w-70">
                      This customer does not have any content yet.
                    </p>
                  </div>
                  <div class="mt-7">
                    <Button @emitclick="consoleClick" btn-classes="w-auto">Add Media</Button>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4">
                  <div class="flex mb-4">
                    <p class="text-xl font-semibold text-gray-900">
                      PMU Forms
                    </p>
                    <span class="text-blue ml-auto">Add custom form</span>
                  </div>
                  <div class="flex gap-2 md:gap-5">
                    <div class="w-full flex-1">
                      <label for="search" class="sr-only">Search</label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon class="h-4 w-4 text-grey-800" aria-hidden="true" />
                        </div>
                        <input id="search" name="search"
                          class="block w-full placeholder-black/40 appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer pl-10"
                          placeholder="Search" type="search" />
                      </div>
                    </div>

                    <div class="sm:flex-none flex">
                      <button type="button"
                        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <div class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      PMU Form Timeline
                    </p>
                  </div>
                  <div class="flow-root mt-8">
                    <ul role="list" class="-mb-8">
                      <li v-for="(activityItem) in activity" :key="activityItem.id">
                        <div class="relative pb-8">
                          <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div class="relative flex items-start space-x-3">
                            <div>
                              <div class="relative px-1">
                                <div class="flex h-4 w-4 items-center justify-center rounded-full bg-peach ring-8 ring-white">
                                </div>
                              </div>
                            </div>
                            <div class="min-w-0 flex-1 py-0">
                              <div class="text-sm text-gray-500">
                                <p>{{activityItem.date}}</p>
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
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button type="button"
                class="mt-6 inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-36 text-center py-2 text-base font-medium text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300">
                Delete Team
              </button>
            </div>

            <!-- Right column -->
            <div class="grid grid-cols-1 gap-4">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <div class="mt-2 block">
                    <div class="flex">
                      <p class="text-xl font-semibold text-gray-900">
                        Customer
                      </p>
                      <span class="text-blue ml-auto">Edit</span>
                    </div>
                    <div class="mt-3 customer-details">
                      <p class="text-base text-gray-500 lg:w-50">
                        Julia Barneby
                      </p>
                      <p class="text-base text-gray-500 lg:w-50">
                        (888) 376-7160
                      </p>
                      <p class="text-base text-gray-500 lg:w-50">
                        juliabarneby@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <div class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      Notes
                    </p>
                    <p class="mt-3 text-base text-gray-500 lg:w-70">
                      No notes about this customer
                    </p>
                  </div>
                  <div class="mt-7">
                    <Button @emitclick="consoleClick" btn-classes="w-auto">Add Notes</Button>
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
