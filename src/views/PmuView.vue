<template>
  <div class="relative flex flex-col min-h-screen">
    <TopNavbar :is-login="isLogin" />
    <!-- column wrapper -->
    <div class="flex flex-1 relative items-stretch">
      <SidebarNavigation />
      <PmuForm />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import PmuForm from '@/components/PmuForm.vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';
import SidebarNavigation from '@/components/layout/SidebarNavigation.vue';

const isLogin = reactive(true);
</script>
