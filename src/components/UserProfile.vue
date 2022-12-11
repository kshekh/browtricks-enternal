<template>
  <div class="user-profile-wrapper relative flex flex-col min-h-screen w-full">
      <!-- Projects List -->
      <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
        <div class="mb-7 pb-7 border-b border-solid border-gray-300">
          <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3">
            Chris Luke
          </h2>
          <div class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300">
            <div class="p-7">
              <div class="flex flex-col text-left">
                <h6>Add Media</h6>
                <div
                  class="flex items-center justify-center gap-5 border border-dashed border-orange-200 mt-3 p-5 py-10 rounded-xl">
                  <div class="flex flex-col gap-2">
                    <div class="flex justify-center items-center"><file-select v-model="file"></file-select></div>
                    <p v-if="file">{{ file.name }}</p>
                    <p class="text-xs text-grey-800/80">Accepts .jpg., png., mp4., mov.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-7">
          <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3">
            Your media
          </h2>
          <div class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300">
            <!-- Table we are still working on -->
            <div class="hidden py-10 px-3 flex justify-center">
              <p>Table we are still working on</p>
            </div>
            <div class="sm:items-center p-4 md:flex">
              <div class="sm:flex-auto">
                <div class="w-full">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button"
                  class="flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">
                  <svg
                    class="icon"
                    style="width:24px;height:24px"
                    viewBox="0 0 24 24"
                  >
                    <path :d="icons.sort" />
                  </svg>
                  Sort</button>
              </div>
            </div>

            <div class="flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Media</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Link</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date added</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="cust in customers" :key="cust.email">
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div class="flex items-center">
                              <div class="h-10 w-10 flex-shrink-0">
                                <img class="h-10 w-10 rounded" :src="cust.image" alt="" />
                              </div>
                              <div class="ml-4">
                                <div class="font-medium text-gray-900">{{ cust.name }}</div>
                                <div class="text-gray-500">{{ cust.type }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div class="text-gray-900">{{ cust.name }}</div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ cust.date_added }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import FileSelect from './FileSelect.vue'

export default {
  components: {
    FileSelect
  },

  data() {
    return {
      file: null
    }
  }
}
</script>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

const icons = {
  "sort": "M5.29289 2.29289C5.47386 2.11193 5.72386 2 6 2C6.27614 2 6.52614 2.11193 6.70711 2.29289L9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711L7 5.41421V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V5.41421L3.70711 6.70711C3.31658 7.09763 2.68342 7.09763 2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289L5.29289 2.29289ZM13 7C13 6.448 13.448 6 14 6C14.553 6 15 6.448 15 7V14.585L16.293 13.293C16.683 12.902 17.317 12.902 17.707 13.293C17.903 13.488 18 13.744 18 14.001C18 14.256 17.903 14.512 17.707 14.707L14.707 17.707C14.527 17.888 14.277 18 14 18C13.724 18 13.474 17.888 13.293 17.707L10.293 14.707C10.098 14.512 10 14.256 10 14.001C10 13.744 10.098 13.488 10.293 13.293C10.684 12.902 11.316 12.902 11.707 13.293L13 14.585V7Z"
}

const customers = [
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
</script>
