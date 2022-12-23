<template>
 <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <div class="sm:flex sm:items-center mb-7">
        <div class="sm:flex-auto">
          <h2 class="text-2xl font-bold text-grey-800 leading-none">Customers List</h2>
        </div>
        <div class="sm:mt-4 md:mt-0 sm:ml-16 sm:flex-none">
          <Button @click="this.$router.push({ name: 'add-customer' })" class="sm:w-38 sm:mr-auto">Add customer</Button>
         </div>
      </div>
      <div
        class="overflow-hidden rounded-xl bg-white border border-grey-300 "
      >
        <div class="p-4 pb-0 gap-2 md:gap-5 flex">
          <div class="flex flex-1 gap-2 md:gap-5">
                   
                      <div class="relative flex-1">
                        <div
                          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                          <MagnifyingGlassIcon
                            class="h-4 w-4 text-grey-900 mt-1"
                            aria-hidden="true"
                          />
                        </div>
                        <Input
                          id="search"
                          type="search"
                          label-text=""
                          name="search"
                          v-model="password"
                          placeholder="Search forms"
                          inputClasses="pl-10 border-peach"
                        />
                      </div>
                   
                    <div class="sm:flex-none flex">
                      <ButtonInline
                        @emitclick="consoleClick"
                        btn-classes="w-auto mt-1"
                        type="submit"
                        > <ShortIcon class="w-5 h-4 mr-2" /> <span>Short</span></ButtonInline
                      >
                    </div>
                  </div>


 
        </div>

        <div class="flex-col">
          <div class="overflow-x-auto">
            <div
              class="inline-block min-w-full align-middle md:px-0 lg:px-0"
            >
              <div class="overflow-hidden">
                <table
                  class="min-w-full border-0 border-collapse divide-y divide-gray-200"
                >
                  <thead class="">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 w-1/3 pl-4 pr-3 text-left text-sm font-bold text-grey-800 sm:pl-6"
                      >
                      Customer name
                      </th>
                      <th
                        scope="col"
                        class="px-3 w-1/3 py-3.5 text-left text-sm font-bold text-grey-800"
                      >
                      Phone
                      </th>
                      <th
                        scope="col"
                        class="px-3 w-1/3 py-3.5 text-left text-sm font-bold text-grey-800"
                      >
                      Email
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="cust in customers" :key="cust.email"  class="odd:bg-white even:bg-grey-100">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6 font-medium "
                      >
                      {{ cust.name }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm font-medium"
                      >
                        {{ cust.phone }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm font-medium"
                      >
                        {{ cust.email }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" aria-label="Pagination">
    
    <div class="flex flex-1 justify-start items-center gap-2  ">
      <a href="#" class="relative inline-flex items-center rounded-l border border-grey-500 bg-white px-2.5 py-2 text-sm font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300">
        <AngleLeft class="w-1.5" /> 
      </a>
      <p class="text-sm text-grey-800 font-medium">
         
         <!-- space -->
         <span class="">10</span>
         <!-- space -->
         of
         <!-- space -->
         <span class="">174</span>
         results
       </p>
      <a href="#" class="relative inline-flex items-center rounded-r border border-grey-500 bg-white px-2.5 py-2 text-sm font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300"><AngleRight class="w-1.5" /></a>
    </div>
  </nav>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AngleRight from '@/assets/icons/AngleRight.vue';
import AngleLeft from '@/assets/icons/AngleLeft.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import ShortIcon from '@/assets/icons/ShortIcon.vue';
import Button from '../components/layout/Button.vue';
import Input from '../components/layout/Input.vue';
import ButtonInline from '../components/layout/ButtonInline.vue';
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