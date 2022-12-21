<template>
  <div class="flex-1 relative flex flex-col w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div
        class="mb-7 pt-3 md:pt-0"
      >
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 pb-10">
          Add Customer
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-7">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Add contact information
                </h3>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <Input id="firstName" type="text" label-text="First Name" :on-change="handleInput" autocomplete="firstName" placeholder="Julia" />
                    <Input id="lastName" type="text" label-text="Last Name" :on-change="handleInput" autocomplete="lastName" placeholder="Barneby" />
                    <Input id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone" placeholder="(888) 376-7160" />
                    <Input id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email" placeholder="juliabarneby@gmail.com" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-7 pt-7">
            <div class="md:col-span-1">
              <div class="relative">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Add a note
                </h3>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <Textarea name="text-note" rows="4" id="textNote" label-text="Note" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="pt-7 flex items-center mt-3">
            <Button @emitclick="consoleClick" class="sm:w-38 sm:mr-auto">Add customer</Button>
          </div>
        </div>
      </div>
    </div>
  </div>


<!-- Dialog -->
<button type="button" @click="openModal" class="absolute top-0 right-0 rounded-md  px-4 py-2 text-sm font-medium text-black underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" > Open dialog </button>
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" >
      <div class="fixed inset-0 bg-black bg-opacity-80"/>
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center" >
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95" >
            <DialogPanel class="w-full max-w-md transform overflow-hidden  bg-white p-6 text-left align-middle transition-all shadow rounded-md" >
              <div class="space-y-6 relative">
              <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
                Add note
              </DialogTitle>
              <div class="space-y-6">
                <form action="#" method="POST">
                <div class="space-y-1">
                <label for="textNote" class="block text-sm font-normal text-grey-900 text-start undefined">Note</label>
                <textarea rows="4" name="text-note" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm undefined" spellcheck="false" placeholder="write here..."></textarea>
                <p class="text-red text-xs peer-invalid:block hidden pt-0.5"><b>Error:</b> Invalid or incorrect Username Invalid or incorrect password </p>
                </div>
              </form>   
              <div class="flex justify-start gap-x-3">
                <button type="button" class=" flex justify-center rounded border border-transparent bg-peach py-2 px-6 text-base font-semibold text-grey-800 shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300" @click="closeModal" >
                  Save  
                </button>
                <button type="button" class="inline-flex items-center rounded border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach" @click="closeModal" >
                  Cancel    
                </button>
              </div>      
              </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script setup>
import { ref } from 'vue'
import Input from '../components/layout/Input.vue';
import Button from '../components/layout/Button.vue';
import Textarea from '../components/layout/Textarea.vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
function consoleClick() {
  console.log('Button clicked');
}
</script>