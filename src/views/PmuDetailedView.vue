<template>
  <div class="relative flex flex-col min-h-screen">
    <TopNavbar :is-login="isLogin" />
    <!-- column wrapper -->
    <div class="flex flex-1 relative items-stretch">
      <SidebarNavigation />
      <PmuDetails />
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
      <div class="space-y-6 relative max-w-full" :style="`width:450px`">
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800">
          Edit customer
        </DialogTitle>

        <form action="#" method="POST">
          <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3 p-1">
              <div class="flex flex-col gap-3 xs:grid grid-cols-2">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              </div>
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>

            <div class="flex justify-end gap-x-3">
              <Button @click="isEditCustomer = false" type="submit" class="w-auto sm:px-6"
                :btn-primary="true">Done</Button>
              <Button @click="isEditCustomer = false"
                class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
                type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </DialogPopup>
    <!-- End Edit customer -->

    <!-- Send customer -->
    <DialogPopup :open-dialog="sendPMUform" @closeModal="sendPMUform = false">

      <div class="space-y-6 relative max-w-full" :style="`width:300px`">
        <div class="mx-auto text-center">
          <component :is="document" class="block h-16 w-16 text-grey-700 mx-auto" aria-hidden="true" />
        </div>
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800 text-center">
        </DialogTitle>
        <div class="space-y-6 text-center">
          <div class="customer-details max-w-60 mx-auto">
            <p class="text-xl">Send <span class="font-bold">Pre and Post Care Agreement</span> to  <span class="font-bold">Phil Lucus?</span></p>
          </div>
          <div class="flex justify-center gap-x-3">
            <Button @click="$router.push('/pmu')" class="w-auto sm:px-6 " type="button" :btn-outline="true" :btn-primary="false">Yes, Send Forms</Button>
            <Button @click="sendPMUform = false" class="w-auto sm:px-6 " type="button" :btn-danger="true" :btn-primary="false">Cancel</Button>
          </div>
        </div>
      </div>
    </DialogPopup>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';
import SidebarNavigation from '@/components/layout/SidebarNavigation.vue';
import PmuDetails from '@/components/PmuDetails.vue';

const isLogin = reactive(true); 

</script>
