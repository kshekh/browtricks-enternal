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
                    <Button @emitclick="consoleClick" :btn-peach="true">Add Media</Button>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-4">
                  <div class="flex mb-4">
                    <p class="text-xl font-semibold text-gray-900">
                      PMU Forms
                    </p>
                    <span class="text-blue ml-auto cursor-pointer">Add custom form</span>
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
                      <Button :btn-bordered-gray="true" :btn-peach="false">Browse</Button>
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
                                <div
                                  class="flex h-4 w-4 items-center justify-center rounded-full bg-peach ring-8 ring-white">
                                </div>
                              </div>
                            </div>
                            <div class="min-w-0 flex-1 py-0">
                              <div class="text-sm text-gray-500">
                                <p>{{ activityItem.date }}</p>
                                <span class="font-medium text-gray-900">{{ activityItem.store_name ?
                                    activityItem.store_name : activityItem.cust_name
                                }}</span>
                                {{ ' ' }}
                                <template v-if="activityItem.store_name !== ''">
                                  sent
                                </template>
                                <template v-else>
                                  signed
                                </template>
                                {{ ' ' }}
                                <span class="font-medium text-gray-900">{{ activityItem.form_name }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flex">
                <Button @click="deleteCustomerDailog = true" :btn-bordered="true" :btn-peach="false">Delete Customer</Button>
              </div>
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
                      <span class="text-blue ml-auto cursor-pointer" @click="editCustomerDailog = true">Edit</span>
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
                    <Button @click="addNoteDailog = true" :btn-peach="true">Add Notes</Button>
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
  <!-- Add Note dailog -->
  <DialogPopup :open-dialog="addNoteDailog" @closeModal="addNoteDailog = false">
    <div class="space-y-6 relative">
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Add note
      </DialogTitle>
      <div class="space-y-6">
        <form action="#" method="POST">
          <div class="space-y-1">
            <label for="textNote" class="block text-sm font-normal text-grey-900 text-start undefined">Note</label>
            <textarea rows="4" name="text-note"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm undefined"
              spellcheck="false" placeholder="write here..."></textarea>
            <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
              <b>Error:</b> Invalid or incorrect Username Invalid or
              incorrect password
            </p>
          </div>
        </form>
        <div class="flex justify-start gap-x-3">
          <Button @click="addNoteDailog = false" :btn-peach="true">Save</Button>
          <Button @click="addNoteDailog = false" :btn-bordered-gray="true" :btn-peach="false">Cancel</Button>
        </div>
      </div>
    </div>
  </DialogPopup>

  <!-- Edit Note dailog -->
  <DialogPopup :open-dialog="editNoteDailog" @closeModal="editNoteDailog = false">
    <div class="space-y-6 relative">
      <div class="flex">All notes</div>
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Edit note
      </DialogTitle>
      <div class="space-y-6">
        <form action="#" method="POST">
          <div class="space-y-1">
            <label for="textNote" class="block text-sm font-normal text-grey-900 text-start undefined">Note</label>
            <textarea rows="4" name="text-note"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm undefined"
              spellcheck="false" placeholder="write here..."></textarea>
            <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
              <b>Error:</b> Invalid or incorrect Username Invalid or
              incorrect password
            </p>
          </div>
        </form>
        <div class="flex justify-start gap-x-3">
          <Button @click="editNoteDailog = false" :btn-peach="true">Save</Button>
          <Button @click="editNoteDailog = false" :btn-bordered-gray="true" :btn-peach="false">Cancel</Button>
        </div>
      </div>
    </div>
  </DialogPopup>

  <!-- Edit customer -->
  <DialogPopup :open-dialog="editCustomerDailog" @closeModal="editCustomerDailog = false">
    <div class="space-y-6 relative">
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Edit Customer
      </DialogTitle>
      <div class="space-y-6">
        <div class="customer-details">
          <form action="#" method="POST">
            <div class="sm:overflow-hidden sm:rounded-md">
              <Input class="mb-3" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="mb-3" id="lastName" type="text" label-text="Last Name" :on-change="handleInput" autocomplete="lastName"
                placeholder="Barneby" />
              <Input class="mb-3" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="mb-3" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>
          </form>
        </div>
        <div class="flex justify-start gap-x-3">
          <Button @click="editCustomerDailog = false" :btn-peach="true">Save</Button>
          <Button @click="editCustomerDailog = false" :btn-bordered-gray="true" :btn-peach="false">Cancel</Button>
        </div>
      </div>
    </div>
  </DialogPopup>

  <!-- Delete customer -->
  <DialogPopup :open-dialog="deleteCustomerDailog" @closeModal="deleteCustomerDailog = false">
    <div class="space-y-6 relative">
      <div class="mx-auto text-center">
        <component :is="RemoveProfile" class="block h-16 w-16 text-grey-900 mx-auto" aria-hidden="true" />
      </div>
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800 text-center">
        Delete Customer
      </DialogTitle>
      <div class="space-y-6 text-center">
        <div class="customer-details">
          <p>Are you sure you want to delete</p>
          <p class="font-bold">Customer Name?</p>
        </div>
        <div class="flex justify-center gap-x-3">
          <Button @click="deleteCustomerDailog = false" class="w-auto">Cancel</Button>
          <Button @click="deleteCustomerDailog = false" class="w-auto" :btn-peach="false" :btn-bordered="true">Yes, delete</Button>
        </div>
      </div>
    </div>
  </DialogPopup>
</template>

<script setup>
import { ref, reactive } from 'vue';

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';

import Input from '../components/layout/Input.vue';
import Button from '../components/layout/Button.vue';
import Textarea from '../components/layout/Textarea.vue';

import DialogPopup from '../components/layout/DialogPopup.vue';
import RemoveProfile from '@/assets/icons/RemoveProfile.vue';
import { DialogTitle } from '@headlessui/vue';

const addNoteDailog = ref(false);
const editNoteDailog = ref(false);
const editCustomerDailog = ref(false);
const deleteCustomerDailog = ref(false);

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
