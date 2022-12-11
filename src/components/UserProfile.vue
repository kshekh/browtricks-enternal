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
<div class="py-10 px-3 flex justify-center">
<p>Table we are still working on</p>
</div>




            <div class="hidden sm:items-center p-4">
              <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">Users</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name,
                  title, email and role.</p>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button"
                  class="flex w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Add
                  user</button>
              </div>
            </div>



            <div class="hidden flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col"
                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="person in users" :key="person.email">
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div class="flex items-center">
                              <div class="h-10 w-10 flex-shrink-0">
                                <img class="h-10 w-10 rounded" :src="person.image" alt="" />
                              </div>
                              <div class="ml-4">
                                <div class="font-medium text-gray-900">{{ person.name }}</div>
                                <div class="text-gray-500">{{ person.type }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div class="text-gray-900">{{ person.title }}</div>
                            <div class="text-gray-500">{{ person.department }}</div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{
                                person.name
                            }}</span></a>
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

import { reactive, ref  } from "vue";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,

  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  CheckIcon,
  HomeIcon,
  Cog6ToothIcon,
  Bars3Icon,
  DocumentTextIcon,
  ChevronDownIcon,
  HeartIcon,
  PhotoIcon,
} from "@heroicons/vue/20/solid";
import {
  Bars3CenterLeftIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import logo from '@/assets/logo.png';

const user = {
  "username": "Chris Luke",
  "email": "Sincere@april.biz",
  "profile": "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
  "links": [
    { name: 'Login', href: '/login', current: true },
    { name: 'Create Account', href: '/signup', current: false },
    { name: 'Forgot Password', href: '/forgot-password', current: false },
  ]
}
// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Domains", href: "#", current: false },
// ];
const sidebarNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Customers", href: "#", icon: HeartIcon, current: false },
  { name: "PMU Forms", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Media", href: "#", icon: PhotoIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
  // { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
];

const setupCount = reactive(6);

const showNavbar = ref(false);
// Setup Guide data
const customerSteps = reactive([
  {
    title: "Add customers",
    answer:
      "Streamline your contact book by saving before/after media and signed forms all within our single app.",
    isExpanded: true,
  },
  {
    title: "Create forms",
    answer:
      "Use our pre-built templates for quick onboarding, or create your own templates for use again and again! View signing status, and manage sms integrations.",
    isExpanded: false,
  },
  {
    title: "Connect social accounts",
    answer:
      "Import user generated content across social channels. Gain access to advanced analytics and performance reports by connecting your brand social accounts.",
    isExpanded: false,
  },
  {
    title: "Add before/after media",
    answer:
      "Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.",
    isExpanded: false,
  },
  {
    title: "Enable SMS sending",
    answer:
      "Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.",
    isExpanded: false,
  },
]);


const users = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
</script>
