<template>
  <div class="relative flex min-h-full flex-col">
    <!-- Navbar -->
    <Disclosure as="nav" class="flex-shrink-0 bg-white" v-slot="{ open }">
      <div class="mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-5">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Logo section -->
          <div class="flex items-center px-2 lg:px-0 xl:w-64">
            <div class="flex-shrink-0">
              <img class="h-8 w-auto" src="../assets/logo.png" alt="BrowTricks" />
            </div>
          </div>

          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
              <span class="sr-only">Open main menu</span>
              <Bars3CenterLeftIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Links section -->
          <div class="hidden lg:block lg:w-80">
            <div class="flex items-center justify-end">
              <div class="flex">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton class="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="sadsd absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in navigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="border-t border-indigo-800 pt-4 pb-3">
          <div class="space-y-1 px-2">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100">{{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 3 column wrapper -->
    <div class="mx-auto w-full max-w-8xl bg-gray-100 flex-grow lg:flex xl:px-0">
      <!-- Left sidebar & main wrapper -->
      <div class="min-w-0 flex-1 bg-gray-100 xl:flex">
        <!-- Account profile -->
        <div class="bg-gray-100 xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-300">
          <nav class="my-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
            <div class="space-y-1 px-2">
              <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-orange-200 text-black' : 'text-gray-900 hover:text-black hover:bg-orange-100', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" class="mr-4 h-6 w-6 flex-shrink-0" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
          </nav>
        </div>

        <!-- Projects List -->
        <div class="bg-gray-100 lg:min-w-0 lg:flex-1">
          <div class="card-wrapper overflow-hidden rounded-lg bg-white shadow m-4">
            <div class="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
              <div class="flex flex-col text-left">
                <h1 class="flex-1 text-lg font-bold">Setup guide</h1>
                <div class="flex items-center">
                  <span class="whitespace-nowrap">1 of 6 tasks complete</span>
                  <span class="bg-orange-100 w-full block rounded-xl h-2 ml-4">
                    <span class="bg-orange-200 w-1/4 block rounded-xl h-2"></span>
                  </span>
                </div>
              </div>
            </div>

            <div class="setup-guide-area xl:flex p-4">
              <ul role="list" class="setup-guide-list px-6">
                <!-- customers steps -->
                <li v-for="(step, index) in customerSteps" :key="index" :class="step.isExpanded ? 'open' : 'close'" class="text-left px-6 pb-6 relative">
                  <div class="point-border border border-l-1 border-orange-200 absolute"></div>
                  <div class="setup-status-header flex items-center relative">
                    <span class="w-6 h-6 block rounded-full mr-4 absolute status-point flex items-center justify-center" :class="step.isExpanded ? 'bg-orange-200' : 'bg-white border-2 border-dashed bg-white border-orange-100 '">
                      <CheckIcon v-if="step.isExpanded" class="h-4 w-4 flex-shrink-0 text-gray-900" aria-hidden="true" />
                    </span>
                    <h4 @click="(step.isExpanded = !step.isExpanded)" class="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{step.title}}</h4>
                  </div>
                  <div :class="step.isExpanded ? 'block' : 'hidden'" class="hidden-area text-gray-500">
                    <p>{{step.answer}}</p>
                    <button type="submit" class="mt-4 flex w-auto justify-center rounded-md border border-transparent bg-orange-200 py-2 px-4 text-sm font-medium text-gray-900 shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Add customers</button>
                  </div>
                </li>
              </ul>
              <img src="../assets/setup-guide-thumb.svg" alt="setup-thumb" class="xl:ml-auto mb-auto hidden xl:block xl:p-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  CheckIcon,
} from '@heroicons/vue/20/solid'
import {
  Bars3CenterLeftIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Domains', href: '#', current: false },
]
const sidebarNavigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
]

// Setup Guide data
const customerSteps = reactive([
  {
    title: 'Add customers',
    answer: 'Streamline your contact book by saving before/after media and signed forms all within our single app.',
    isExpanded: true
  },
  {
    title: 'Create forms',
    answer: 'Use our pre-built templates for quick onboarding, or create your own templates for use again and again! View signing status, and manage sms integrations.',
    isExpanded: false
  },
  {
    title: 'Connect social accounts',
    answer: 'Import user generated content across social channels. Gain access to advanced analytics and performance reports by connecting your brand social accounts.',
    isExpanded: false
  },
  {
    title: 'Add before/after media',
    answer: 'Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.',
    isExpanded: false
  },
  {
    title: 'Enable SMS sending',
    answer: 'Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.',
    isExpanded: false
  }
]);

</script>

<style lang="scss" scoped>
.setup-guide-list {
  .status-point {
    left: -40px;
  }
  .point-border {
    left: -5px;
    height: 25%;
    top: 30px;
  }
  li {
    &.open {
      .point-border {
        height: 72%;
      }
    }
    &:last-child {
      .point-border {
        display: none;
      }
    }
  }
}
</style>