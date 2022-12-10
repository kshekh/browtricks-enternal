<template>
  <div>
    <aside class="bg-white md:bg-grey-200 w-68 md:block absolute z-20 left-0 inset-y-0 shadow-md border-r bordr-grey-500
      md:static md:shadow-none
      ">
        <nav class="flex-1 space-y-1 pr-2 py-4" aria-label="Sidebar">
          <div class="space-y-2 relative">
            <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="
              item.current
                ? 'before:opacity-100 after:opacity-100'
                : 'before:opacity-0 after:opacity-0'
            "
              class="group text-grey-800 flex items-center pr-2 pl-6 py-2.5 text-sm font-medium rounded-md transition-all ease-in-out duration-300 relative after:rounded-full after:w-1.5 after:bg-peach after:absolute after:inset-y-0 after:left-0 before:absolute before:bg-peach before:inset-0 before:rounded before:left-3 hover:before:opacity-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
              :aria-current="item.current ? 'page' : undefined">
              <span class="relative z-10 flex items-center">
                <component :is="item.icon" class="mr-3 h-5 w-5 text-grey-900" aria-hidden="true" />
                {{ item.name }}
              </span>
            </a>
          </div>
        </nav>
      </aside>
  </div>
</template>

<script setup>
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
const sidebarNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Customers", href: "#", icon: HeartIcon, current: false },
  { name: "PMU Forms", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Media", href: "#", icon: PhotoIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
  // { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
];
</script>