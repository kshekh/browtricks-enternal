<template>
  <div class="relative flex flex-col min-h-screen">
    <TopNavbar :is-login="isLogin" />
    <!-- column wrapper -->
    <div class="flex flex-1 relative items-stretch">
      <SidebarNavigation />
      <!-- Details contents -->
      <div class="overflow-hidden rounded-xl divide-y divide-grey-300 w-full">
        <div class="py-3 md:p-5 xl:px-14 xl:py-12 flex flex-col">
          <div class="flex items-center px-3 md:px-0 mb-10">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Pre and Post Care
              Agreement</h2>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-2">
              <div
                class="relative p-5 flex flex-col w-full overflow-hidden md:rounded-lg border border-grey-300 shadow-3 bg-white">
                <iframe
                  src="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf"
                  frameborder="0" class="object-cover aspect-square w-full h-1/4"></iframe>
                <div class="flex gap-x-2 mt-10">
                  <Button class="w-auto" :btn-primary="true">Send PMU form</Button>
                  <Button class="w-auto" :btn-outline="true" :btn-primary="false">Print</Button>
                </div>
              </div>
            </div>
            <div class="mt-5 md:col-span-1 md:mt-0 overflow-hidden md:rounded-lg">
              <div
                class="relative p-5 flex flex-col w-full overflow-hidden md:rounded-lg border border-grey-300 shadow-3 bg-white">
                <div class="flex items-center">
                  Send to Customer
                  <div class="ml-auto" v-if="isSendToCustomer">
                    <Menu as="div" class="relative inline-block text-left">
                      <MenuButton
                        class="inline-flex items-center rounded-md border-0 border-grey-700 text-lg font-medium text-grey-800 shadow-0 hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500 mt-1"
                        :class="[
                          active
                            ? 'bg-peach-500 border-peach-500'
                            : 'border-grey-700 bg-white',
                          'block pl-4 pr-5 py-2.5 text-lg text-left ease-in-out duration-300 w-full',
                        ]">
                        <MoreHorizontal class="w-4" />
                      </MenuButton>
                      <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                          class="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-3 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                            ]" @click="isEditCustomer = true">
                            Edit customer information
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                              active
                                ? 'bg-gray-100 text-red'
                                : 'text-red',
                              'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                            ]" @click="isDeleteCustomer = true">
                            Remove customer
                            </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>
                <div class="relative flex-1 cursor-pointer" v-if="!isSendToCustomer"
                  @click="isOpenCustomers = !isOpenCustomers;">
                  <div
                    class="cursor-pointer rounded-md border border-transparent py-2 px-4 text-xl font-semibold text-black shadow-sm hover:bg-peach-100 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 inline-flex leading-none min-h-10 items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-lg font-medium text-grey-800 shadow-sm hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500 w-full block">
                    <div class="flex items-center">
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon class="h-4 w-4 text-grey-900 mt-1" aria-hidden="true" />
                      </div>
                      <span class="ml-6 text-gray-400">Search for client</span>
                    </div>
                  </div>
                </div>
                <div v-if="isSendToCustomer" class="ss">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li class="flex py-4" @click="isEditCustomer = true">
                      <div class="ml-0">
                        <p class="text-sm font-medium text-gray-900">Carla Siphron</p>
                        <p class="text-sm text-gray-500">(469) 578-8248</p>
                        <p class="text-sm text-gray-500">carlasiphron@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="relative mt-1 p-5 flex flex-col overflow-hidden md:rounded-lg border border-grey-300 shadow-3 bg-white"
                v-if="isOpenCustomers" style="width: 87%; margin: -16px auto 0;">
                <div @click="isCreateCustomer = true; isOpenCustomers = false"
                  class="cursor-pointer rounded-md border border-transparent py-2 px-4 text-xl font-semibold text-black shadow-sm hover:bg-peach-100 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 inline-flex leading-none min-h-10 items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-lg font-medium text-grey-800 shadow-sm hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500 w-full block">
                  <div class="flex items-center">
                    <PlusCircle class="w-5 mr-2" />
                    Create a new customer
                  </div>
                </div>
                <ul role="list" class="divide-y divide-gray-200">
                  <li v-for="person in people" :key="person.email" @click="isSendToCustomer = true; isOpenCustomers = false" class="flex py-4 cursor-pointer">
                    <div class="ml-0">
                      <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
                      <p class="text-sm text-gray-500">{{ person.tel }}</p>
                      <p class="text-sm text-gray-500">{{ person.email }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Create customer -->
    <DialogPopup :open-dialog="isCreateCustomer" @closeModal="isCreateCustomer = false">
      <div class="space-y-6 relative max-w-full" :style="`width:390px`">
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800">
          Create customer
        </DialogTitle>

        <form action="#" method="POST">
          <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>

            <div class="flex justify-start gap-x-3">
              <Button @click="isCreateCustomer = false" type="submit" class="w-auto sm:px-8"
                :btn-primary="true">Save customer</Button>
              <Button @click="isCreateCustomer = false"
                class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
                type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </DialogPopup>
    <!-- End Create customer -->

    <!-- Start Edit customer -->
    <DialogPopup :open-dialog="isEditCustomer" @closeModal="isEditCustomer = false">
      <div class="space-y-6 relative max-w-full" :style="`width:390px`">
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800">
          Edit customer
        </DialogTitle>

        <form action="#" method="POST">
          <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>

            <div class="flex justify-start gap-x-3">
              <Button @click="isEditCustomer = false" type="submit" class="w-auto sm:px-8"
                :btn-primary="true">Done</Button>
              <Button @click="isEditCustomer = false"
                class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
                type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </DialogPopup>
    <!-- End Edit customer -->

    <!-- Delete customer -->
    <DialogPopup :open-dialog="isDeleteCustomer" @closeModal="isDeleteCustomer = false">

      <div class="space-y-6 relative max-w-full" :style="`width:390px`">
        <div class="mx-auto text-center">
          <component :is="RemoveProfile" class="block h-16 w-16 text-grey-900 mx-auto" aria-hidden="true" />
        </div>
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800 text-center">
        </DialogTitle>
        <div class="space-y-6 text-center">
          <div class="customer-details">
            <p>Send <span class="font-bold">Pre and Post Care Agreement</span> to  <span class="font-bold">Phil Lucus?</span></p>
          </div>
          <div class="flex justify-center gap-x-3">
            <Button @click="isDeleteCustomer = false" class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50" type="button" :btn-outline="true" :btn-primary="false">Yes, Send Forms</Button>
            <Button @click="isDeleteCustomer = false" class="w-auto sm:px-8 " type="button" :btn-danger="true" :btn-primary="false">Cancel</Button>
          </div>
        </div>
      </div>
    </DialogPopup>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import PlusCircle from '@/assets/icons/PlusCircle.vue';
import RemoveProfile from '@/assets/icons/RemoveProfile.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import MoreHorizontal from '@/assets/icons/MoreHorizontal.vue';
import DialogPopup from '@/components/DialogPopup.vue';

import TopNavbar from '@/components/layout/TopNavbar.vue';
import SidebarNavigation from '@/components/layout/SidebarNavigation.vue';

const isLogin = reactive(true);
const isOpenCustomers = ref(false);
const isSendToCustomer = ref(false);
const isCreateCustomer = ref(false);
const isEditCustomer = ref(false);
const isDeleteCustomer = ref(false);

const people = [
  { id: 1, name: 'Leslie Alexander', tel: '(469) 578-8248', email: 'carlasiphron@gmail.com' },
  { id: 2, name: 'Michael Foster', tel: '(469) 578-8248', email: 'michael@gmail.com' },
  { id: 3, name: 'Dries Vincent', tel: '(469) 578-8248', email: 'dries@gmail.com' },
  { id: 4, name: 'Lindsay Walton', tel: '(469) 578-8248', email: 'lindsay@gmail.com' },
]

</script>
