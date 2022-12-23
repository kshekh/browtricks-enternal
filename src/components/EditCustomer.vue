<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 p-4 md:p-5 xl:px-14 xl:py-12">
      <div class="space-y-6">
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
          Jane Doe Edit Page
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <!-- Main 3 column grid -->
          <div
            class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8"
          >
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-6 lg:col-span-2">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4
                      class="text-lg font-semibold text-grey-800 leading-none"
                    >
                      Media
                    </h4>
                    <p class="text-sm text-grey-900 leading-tight">
                      This customer does not have<br />
                      any content yet.
                    </p>
                  </div>
                  <div class="block">
                    <Button
                      @emitclick="consoleClick"
                      btn-classes="w-auto"
                      class="w-38 py-1.5"
                      >Add Media</Button
                    >
                  </div>
                </div>
              </div>
              <div
                class="overflow-hidden rounded-lg bg-white shadow hidden sm:block"
              >
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex items-center relative">
                    <h4
                      class="text-lg font-semibold text-gray-900 leading-none"
                    >
                      PMU Forms
                    </h4>
                    <Button
                      @emitclick="consoleClick"
                      btn-classes="w-auto"
                      class="absolute right-0 text-blue ml-auto text-base w-auto bg-transparent shadow-none"
                      >Add custom form</Button
                    >
                  </div>
                  <div class="flex gap-2 md:gap-5">
                    <div class="w-full flex-1">
                      <div class="relative">
                        <div
                          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                          <MagnifyingGlassIcon
                            class="h-4 w-4 text-grey-900"
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
                    </div>
                    <div class="sm:flex-none flex">
                      <ButtonInline
                        @emitclick="consoleClick"
                        btn-classes="w-auto mt-1"
                        type="submit"
                        >Browse</ButtonInline
                      >
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
                    <ul
                      role="list"
                      class="space-y-10 relative after:absolute after:z-0 after:top-0 after:left-2 after:h-[calc(100%-20px)] after:border-dashed after:border-peach after:border-l"
                    >
                      <li
                        v-for="activityItem in activity"
                        :key="activityItem.id"
                        class="flex gap-x-3 relative"
                      >
                        <div
                          class="flex h-4 w-4 items-center justify-center rounded-full bg-peach ring-8 ring-white"
                        ></div>
                        <div class="text-sm text-gray-500 leading-none">
                          <span
                            class="text-xs block font-medium pb-1.5 text-grey-700 leading-none"
                            >{{ activityItem.date }}</span
                          >
                          <span class="font-medium text-gray-900">{{
                            activityItem.store_name
                              ? activityItem.store_name
                              : activityItem.cust_name
                          }}</span>
                          {{ ' ' }}
                          <template v-if="activityItem.store_name !== ''">
                            sent
                          </template>
                          <template v-else> signed </template>
                          {{ ' ' }}
                          <span class="font-medium text-gray-900">{{
                            activityItem.form_name
                          }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                type="button" @click="openModalDelete"
                class="absolute bottom-0 sm:relative mt-4 inline-flex items-center justify-center rounded-md border-2 border-red bg-transparent px-4 w-44 text-center py-2 text-base font-semibold text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300"
              >
                Delete Customer
              </button>
            </div>
            <!-- Right column -->
            <div class="grid grid-cols-1 gap-6 pb-12 sm:pb-0">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-4">
                  <div class="flex items-center space-y-2.5 relative">
                    <h4
                      class="text-lg font-semibold text-gray-900 leading-none"
                    >
                      Customer
                    </h4>
                    <Button
                      @emitclick="consoleClick"
                      btn-classes="w-auto"
                      class="absolute right-0 text-blue ml-auto text-base w-auto bg-transparent shadow-none"
                      >Edit</Button
                    >
                  </div>
                  <div class="customer-details">
                    <p class="text-base text-gray-500">
                      Julia Barneby<br />
                      (888) 376-7160<br />
                      juliabarneby@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4
                      class="text-lg font-semibold text-grey-800 leading-none"
                    >
                      Notes
                    </h4>
                    <p class="text-sm text-grey-900 leading-tight">
                      No notes about this customer
                    </p>
                  </div>
                  <div class="block">
                    <Button
                      @emitclick="consoleClick"
                      btn-classes="w-auto"
                      class="w-38 py-1.5"
                      >Add Notes</Button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- Dialog -->
 
 
  <TransitionRoot appear :show="openModalDeleteisOpen" as="template">
    <Dialog as="div" @close="closeModalDelete" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" >
      <div class="fixed inset-0 bg-black bg-opacity-80"/>
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center" >
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95" >
            <DialogPanel class="max-w-full w-96 transform overflow-hidden  bg-white p-8 text-left align-middle transition-all shadow rounded-lg relative" >

              <button class="absolute top-3 right-3 text-grey-700" @click="closeModalDelete"  >
                <CrossIcon class="w-4 h-4" />
              </button>


              <div class="space-y-6 relative text-center flex flex-col justify-center items-center">
              <div class="relative text-peach">
                 <DeleteCustomer class="w-16 h-16" />
              </div>
              <DialogTitle as="h3" class="flex-1 text-lg font-normal leading-tight text-grey-800">
                Are you sure you want to delete <strong class="font-bold block">Customer Name?</strong>
              </DialogTitle> 
              <div class="flex  gap-x-3">  
                <button type="button" class="inline-flex items-center rounded-md border-2 border-gray-300 bg-white px-6 py-2 text-base font-semibold text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach" @click="closeModalDelete" >
                  Cancel    
                </button>
                <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-red bg-transparent px-4 text-center py-2 text-base font-semibold text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300" @click="closeModalDelete" >
                  Yes, delete
                </button>
              </div>
              </div>





            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>





</template>

<script setup>
import { ref } from 'vue'
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import DeleteCustomer from '@/assets/icons/customerDelete.vue';
import CrossIcon from '@/assets/icons/cross.vue';
import Input from '../components/layout/Input.vue';
import ButtonInline from '../components/layout/ButtonInline.vue';
import Button from '../components/layout/Button.vue';
import Textarea from '../components/layout/Textarea.vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

const openModalDeleteisOpen = ref(true);

function closeModalDelete() {
  openModalDeleteisOpen.value = false
}
function openModalDelete() {
  openModalDeleteisOpen.value = true
}

const btnclasses = [
  'mt-6 inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-36 text-center',
  'py-2',
  'text-base',
  'font-medium',
  'text-red',
  'shadow-sm',
  'hover:bg-red',
  'hover:text-white',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-red',
  'focus:ring-offset-2',
  'ease-in-out',
  'duration-300',
];

const activity = [
  {
    id: 1,
    date: 'October 29, 2022, 2:34 PM',
    store_name: '',
    cust_name: 'Customer name 1',
    form_name: 'Form name',
  },
  {
    id: 2,
    date: 'October 17, 2022, 1:34 PM',
    store_name: 'Store name 2',
    cust_name: 'Customer name 2',
    form_name: 'Form name 2',
  },
];

function consoleClick() {
  console.log('Button clicked');
}
</script>
