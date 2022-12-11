<template>
  <div class="home-page-wrapper relative flex flex-col min-h-screen">
    <!-- Top Navbar -->
    <TopNavbar />

    <!-- column wrapper -->
    <div class="flex flex-1 relative ">
      <!-- Left sidebar Account profile -->
      <SidebarNavigation />

      <!-- Home Page -->
      <HomeCustomer />
    </div>
  </div>
</template>

<script setup>
import HomeCustomer from '@/components/HomeCustomer.vue';
import TopNavbar from '../components/helpers/TopNavbar.vue';
import SidebarNavigation from '../components/helpers/SidebarNavigation.vue';
</script>