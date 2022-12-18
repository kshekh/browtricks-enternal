<template>
  <div class="customers-view-wrapper relative flex flex-col min-h-screen w-full">
    <div v-if="showAddCustomer">
      <AddCustomer />
    </div>
    <div  v-else class="bg-gray-100 lg:min-w-0 flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <h1 class="flex-1 text-lg font-bold text-left mb-4 p-3 md:p-0">Customers</h1>

      <div class="card-wrapper overflow-hidden rounded-lg bg-white shadow">
        <div class="setup-guide-area py-20 md:p-40">
          <div class="flex flex-col justify-center text-center">
            <img src="../assets/setup-guide-thumb.svg" alt="setup-thumb" class="mx-auto xl:block xl:p-6" />
            <h2 class="font-bold mb-4">Add a customer</h2>
            <p class="px-10 md:px-0 md:w-1/2 mx-auto">Get started by adding customer contact info in order to add media, manage PMU form signing, and notes.</p>
            <button @click="showAddCustomer = true" class="mt-5 btn bg-orange-300 text-gray-900 w-40 mx-auto rounded-md p-3 inline-block">Add customer</button>
            <!-- <button @click="this.$router.push({ name: 'add-customer' })" class="mt-5 btn bg-orange-300 text-gray-900 w-40 mx-auto rounded-md p-3 inline-block">Add customer</button> -->
            <!-- <router-link
            to="/add-customer" class="mt-5 btn bg-orange-300 text-gray-900 w-40 mx-auto rounded-md p-3 inline-block">Add customer</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddCustomer from '@/components/AddCustomer.vue';

const showAddCustomer = ref(false);
</script>
