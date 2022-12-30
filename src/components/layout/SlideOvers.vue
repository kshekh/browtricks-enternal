<template>
	<TransitionRoot as="template" :show="openDialog">
		<Dialog as="div" class="relative z-30" @click="$emit('closeModal')">
			<TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> </TransitionChild>
			<div class="fixed inset-0 overflow-hidden">
				<div class="absolute inset-0 overflow-hidden">
					<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
						<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
							<DialogPanel class="pointer-events-auto w-screen max-w-md">
								<button type="button" class=" text-white hover:text-gray-500 focus:outline-none outline-none cursor-pointer absolute top-7 left-3 md:left-0" @click="$emit('closeModal')"> <span class="sr-only">Close panel</span>
									<component :is="XMarkIcon" class="block h-6 w-6 text-white cursor-pointer " aria-hidden="true" /> </button>
								<div class="flex h-full flex-col overflow-y-auto overflow-x-hidden on-hover-scroll bg-white rounded-md shadow-xl ">
									<div class="relative flex-1 py-6 px-4 sm:px-6 space-y-5">
										<div class="space-y-5">
											<DialogTitle class="text-lg font-semibold text-gray-800 ">Upload Media</DialogTitle>
											<!-- Replace with your content -->
											<div class="hidden items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-32 rounded-xl">
												<div class="flex flex-col gap-2">
													<div class="flex justify-center items-center">
														<file-select v-model="file"></file-select>
													</div>
													<p v-if="file">{{ file.name }}</p>
													<p class="text-xs text-grey-800/80"> Accepts .jpg., png., mp4., mov. </p>
												</div>
											</div>
											<!-- /End replace -->
											<!-- Picture Profile   -->
											<div class="space-y-4">
												<div class="aspect-w-6 block w-full overflow-hidden rounded-lg"> <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80" alt="" class="object-cover h-40 md:h-80 w-full"> </div>
												<div class="flex items-start justify-between">
													<div class="spce-y-2">
														<h2 class="text-base font-medium text-grey-800">
                          cutie_brows
                        </h2>
														<p class="text-sm font-medium text-grey-300 flex items-center">JPG <span class="w-2 h-2 rounded-full bg-peach-500 block mx-3"></span> Jun 4, 2022</p>
													</div>
													<a href="javascript:void(0)" class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-12 h-12">
														<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" class="w- h-5">
															<path d="M5.79297 7.60407C6.0521 7.95085 6.38271 8.23779 6.76237 8.44543C7.14202 8.65306 7.56185 8.77653 7.99337 8.80747C8.42489 8.83841 8.85801 8.77608 9.26335 8.62472C9.66869 8.47337 10.0368 8.23651 10.3426 7.93024L12.1528 6.11818C12.7024 5.54859 13.0065 4.7857 12.9996 3.99385C12.9928 3.20199 12.6755 2.44451 12.1161 1.88456C11.5567 1.32461 10.8 1.007 10.009 1.00011C9.2179 0.993233 8.45579 1.29764 7.88678 1.84777L6.84892 2.88065" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
															<path d="M8.20678 6.39594C7.94765 6.04915 7.61704 5.76221 7.23738 5.55457C6.85773 5.34694 6.4379 5.22347 6.00638 5.19253C5.57486 5.16159 5.14174 5.22392 4.7364 5.37528C4.33106 5.52664 3.96298 5.76349 3.65712 6.06977L1.84691 7.88182C1.29734 8.45142 0.99324 9.2143 1.00011 10.0062C1.00699 10.798 1.32428 11.5555 1.88366 12.1154C2.44304 12.6754 3.19975 12.993 3.9908 12.9999C4.78185 13.0068 5.54396 12.7024 6.11297 12.1522L7.14479 11.1194" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
														</svg>
													</a>
												</div>
											</div>
											<!-- End Picture Profile -->
										</div>
										<div class="space-y-2">
											<label for="project-description" class="block text-lg font-semibold text-gray-800 ">Description</label>
											<textarea id="project-description" name="project-description" rows="3" placeholder="great eyebrows" class="block w-full resize-none appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-800 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-sm invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer undefined"></textarea>
										</div>
										<div class="space-y-2">
											<label for="project-description" class="block text-lg font-semibold text-gray-800 ">Link</label>
											<input id="project-description" name="project-description" placeholder="www.google.com" class="block w-full resize-none appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-800 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-sm invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer undefined">
                     </div>
										<!-- Customer -->
										<div class="hidden space-y-2">
											<label for="project-description" class="block text-lg font-semibold text-gray-800 ">Customer</label>
											<div class="flex justify-between"> <a href="#" class="text-sm font-normal text-blue leading-none inline-flex cursor-pointer">Carla Septimus</a> <a href="#" class="text-sm font-normal text-blue leading-none inline-flex cursor-pointer">Assign to another client</a> </div>
										</div>
										<!-- Assign to client -->
										<div class="space-y-2">
											<label for="project-description" class="block text-lg font-semibold text-gray-800 ">Assign to customer</label>
											<input id="project-description" name="project-description" placeholder="start typing customer name " class="sr-only block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-sm invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer"> 
                      <Listbox v-model="selectedPerson">
                      <div class="relative mt-1">
                      <ListboxButton class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-sm invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer"> 
                        <span class="block truncate text-left">{{ selectedPerson.name }}</span> 
                    </ListboxButton>
                      <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <ListboxOptions class="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name" :value="person" as="template">
                      <li :class="[
                      active ? 'bg-grey-200 text-amber-900' : 'text-grey-800',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"> <span :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                      ]">{{ person.name }}</span
                      >
                      <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-grey-800"
                      >
                  
                      </span> 
                    </li>
                      </ListboxOption>
                      </ListboxOptions>
                      </transition>
                      </div>
											</Listbox>
                    </div>
                      <div class="space-y-2">
											<label for="project-description" class="block text-lg font-semibold text-gray-800 ">Visibility</label>
											<div class="relative flex item-start gap-3">
												<input type="radio" name="role" id="administrator" class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800">
												<label for="administrator" class="block text-sm font-normal text-grey-800">Administrator</label>
											</div>
											<div class="relative flex item-start gap-3">
												<input type="radio" name="role" id="administrator" class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800">
												<label for="administrator" class="block text-sm font-normal text-grey-800">Hidden</label>
											</div>
										</div>
										<!-- Call to action -->
										<div class="hidden gap-x-2 pt-5">
											<Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6 bg-peach-100" :btn-primary="true">Upload</Button>
											<Button class="w-auto sm:px-8" type="button" :btn-outline="true" :btn-primary="false">Cancle</Button>
										</div>
										<!-- Edit Media button -->
										<div class="flex flex-wrap justify-between items-center">
											<div class="flex gap-x-2 ">
												<Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6 " :btn-primary="true">Save</Button>
												<Button class="w-auto sm:px-8" type="button" :btn-outline="true" :btn-primary="false">Cancle</Button>
											</div>
											<Button @click="deleteCustomerDailog = true" :btn-no-border="true" :btn-primary="false" class="text-red hover:bg-red hover:text-white py-6 h-0 px-2 sm:px-6"> Delete Team </Button>  
										</div>
									</div>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
<script setup>
import FileSelect from '@/components/FileSelect.vue';
import {
	ref
}
from 'vue'
import {
	Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Listbox,
	ListboxLabel,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
}
from '@headlessui/vue'
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import Button from '@/components/Button.vue';
const people = [{
	name: 'Wade Cooper'
}, {
	name: 'Arlene Mccoy'
}, {
	name: 'Devon Webb'
}, {
	name: 'Tom Cook'
}, {
	name: 'Tanya Fox'
}, {
	name: 'Hellen Schmidt'
}, ]
const selectedPerson = ref(people[0])
const roles = [{
	id: '1',
	name: 'Administrator',
	active: 'false',
	description: 'Administrator users can perform any action.',
}, {
	id: '2',
	name: 'Editor',
	active: 'true',
	description: 'Editor users have the ability to read, create, and update.',
}, ];
const open = ref(true)
defineProps({
	openDialog: {
		type: Boolean,
		required: true
	},
})
</script>