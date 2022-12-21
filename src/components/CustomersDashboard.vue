<template>
  <div class="customers-view-wrapper relative flex flex-col min-h-screen w-full">
    <div v-if="showAddCustomer">
      <EditCustomer />
      <!-- <AddCustomer /> -->
      <!-- <CustomersList /> -->
    </div>
    <div  v-else class="bg-gray-100 lg:min-w-0 flex-1 px-4 py-3 md:p-5 xl:px-14 xl:py-12"> 
      <h1 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 mb-5">
        Customers
        </h1>
      <div class="card-wrapper overflow-hidden rounded-lg bg-white shadow">
        <div class="setup-guide-area py-20 px-4 lg:p-40">
          <div class="flex flex-col justify-center text-center space-y-10 max-w-xs mx-auto">
            <div class="relative flex flex-col"><img src="../assets/customer.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
            <div class="flex flex-col space-y-10">
              <div class="space-y-4">
              <h2 class="text-2xl font-bold text-grey-800 leading-none">Add a customer</h2>
              <p class="text-md text-grey-900">Get started by adding customer contact info in order to add media, manage PMU form      
                signing, and notes.</p>
              </div>
            <Button type="submit"  @click="showAddCustomer = true" class="w-38 mx-auto">Add customer</Button>
            </div>
            <!-- <button @click="showAddCustomer = true" class="mt-5 btn bg-orange-300 text-gray-900 w-40 mx-auto rounded-md p-3 inline-block">Add customer</button> -->
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

import EditCustomer from '@/components/EditCustomer.vue';
import AddCustomer from '@/components/AddCustomer.vue';
import Button from './layout/Button.vue';
import CustomersList from '@/components/CustomersList.vue';

const showAddCustomer = ref(false);
</script>
