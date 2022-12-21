<template>
  <div class="customer-list-wrapper">
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <div class="sm:flex sm:items-center mb-7">
        <div class="sm:flex-auto">
          <h2 class="text-2xl font-bold text-grey-800 leading-none">Add a customer</h2>
        </div>
        <div class="sm:mt-4 md:mt-0 sm:ml-16 sm:flex-none">
          <button @click="this.$router.push({ name: 'add-customer' })" class="btn bg-orange-300 text-gray-900 w-40 mx-auto rounded-md p-3 inline-block">Add customer</button>
        </div>
      </div>
      <div
        class="overflow-hidden rounded-xl bg-white border border-grey-300 divide-y divide-grey-300"
      >
        <div class="p-4 gap-2 md:gap-5 flex">
          <div class="w-full flex-1">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <MagnifyingGlassIcon
                  class="h-4 w-4 text-grey-800"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                class="block w-full placeholder-black/40 appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer pl-10"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>

          <div class="sm:flex-none flex">
            <button
              type="button"
              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
            >
              <ShortIcon class="w-5 h-4 mr-2" />
              Sort
            </button>
          </div>
        </div>

        <div class="flex-col">
          <div class="overflow-x-auto">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-0 lg:px-0"
            >
              <div class="overflow-hidden">
                <table
                  class="min-w-full border-0 border-collapse divide-y divide-gray-200"
                >
                  <thead class="">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-grey-800 sm:pl-6"
                      >
                      Customer name
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-grey-800"
                      >
                      Phone
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-grey-800"
                      >
                      Email
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="cust in customers" :key="cust.email">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                      >
                      {{ cust.name }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm"
                      >
                        {{ cust.phone }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm"
                      >
                        {{ cust.email }}
                      </td>
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
</template>

<script setup>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import ShortIcon from '@/assets/icons/ShortIcon.vue';

const customers = [
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com'
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com'
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com'
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com'
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com'
  },
];
</script>