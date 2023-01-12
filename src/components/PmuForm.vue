<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <div class="space-y-6 pt-3 md:pt-0 md:pb-7 border-0 border-solid border-gray-300">
        <div class="flex items-center px-3 md:px-0">
        <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">PMU Forms</h2>
        </div>
        <div v-if="!isPmuForm" class="overflow-hidden md:rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area py-20 px-4 lg:p-40">
            <div class="flex flex-col justify-center text-center space-y-10 max-w-md sm:px-7 mx-auto">
              <div class="relative flex flex-col"><img src="@/assets/pmu.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
              <div class="flex flex-col space-y-5">
                <div class="space-y-4">
                  <h2 class="text-2xl font-bold text-grey-800 leading-none">Setup onboarding PMU forms</h2>
                  <p class="text-xl text-grey-900">Customers can sign your PMU forms before arriving for treatment. Select from our prebuilt PMU form templates, or create your own.</p>
                </div>
                <div class="flex flex-wrap gap-3 w-full justify-center">  
                  <Button type="submit" :btn-outline="true" :btn-primary="false" class="w-auto sm:px-6">Use template</Button>
                  <Button type="submit" :btn-primary="true" @click="isPmuForm = true" class="w-auto sm:px-6 ">Create my own</Button>
                </div>  
              </div>
             </div>
          </div>
        </div>
      </div>
      <div class="divide-y space-y-10">
        <!-- Form templates here -->
        <div class="space-y-6 pt-3  border-0 border-solid border-gray-300">
          <div class="flex items-center px-3 md:px-0">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Form templates</h2>
            <Button @click="isPmuForm = true">Add Media</Button>
           </div>
        <div v-if="!isPmuForm" class="overflow-hidden">
            <div class="sm:grid grid-cols-12 gap-5 space-y-4 sm:space-y-0">
              <div class="overflow-hidden md:rounded-lg shadow-3 bg-white col-span-4 divide-y space-y-3">
                <div class="relative py-6 px-4">
                  <img src="@/assets/Pre-and-Post.svg" alt="setup-thumb" class="mx-auto xl:block" />
                </div>
                <div class="space-y-2 px-8 py-6">
                  <h2 class="flex-1 text-base font-bold leading-none text-grey-800">Pre and Post Care Agreement</h2>
                  <p class="text-base font-normal text-grey-700 leading-snug">Created Nov 10, 2020 - 4:39 AM</p>
                </div>
              </div>
              <div class="overflow-hidden md:rounded-lg shadow-3 bg-white col-span-4 divide-y space-y-3">
                <div class="relative py-6 px-4">
                  <img src="@/assets/Pre-and-Post.svg" alt="setup-thumb" class="mx-auto xl:block" />
                </div>
                <div class="space-y-2 px-8 py-6">
                  <h2 class="flex-1 text-base font-bold leading-none text-grey-800">Booking Fee and Cancellation Policy</h2>
                  <p class="text-base font-normal text-grey-700 leading-snug">Created Nov 10, 2020 - 4:39 AM</p>
                </div>
              </div>
              <div class="overflow-hidden md:rounded-lg shadow-3 bg-white col-span-4 divide-y space-y-3">
                <div class="relative py-6 px-4">
                  <img src="@/assets/Pre-and-Post.svg" alt="setup-thumb" class="mx-auto xl:block" />
                </div>
                <div class="space-y-2 px-8 py-6">
                  <h2 class="flex-1 text-base font-bold leading-snug text-grey-800">Disclosure and Consent for Intradermal Cosmetic Procedure</h2>
                  <p class="text-base font-normal text-grey-700 leading-none">Created Nov 10, 2020 - 4:39 AM</p>
                </div>
              </div>
            </div>
        </div>
        </div>
        <!-- Form you have created -->
        <div class="space-y-6 pt-3 md:pt-6 border-0 border-solid border-gray-300">
          <div class="flex items-center px-3 md:px-0">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Forms you have created</h2>
           </div>
            <div v-if="!isPmuForm" class="overflow-hidden">
            <div class="sm:grid grid-cols-12 gap-5 space-y-4 sm:space-y-0">
            <div class="overflow-hidden md:rounded-lg shadow-3 bg-white col-span-4 divide-y space-y-3">
              <div class="relative py-6 px-4">
                <img src="@/assets/Pre-and-Post.svg" alt="setup-thumb" class="mx-auto xl:block" />
              </div>
              <div class="space-y-2 px-8 py-6">
                <h2 class="flex-1 text-base font-bold leading-snug text-grey-800">Untitled form</h2>
                <p class="text-base font-normal text-grey-700 leading-none">Created Nov 10, 2020 - 4:39 AM</p>
              </div>
            </div>
            <div class="overflow-hidden md:rounded-lg shadow-3 bg-white col-span-4 divide-y space-y-3">
              <div class="relative py-6 px-4">
                <img src="@/assets/Pre-and-Post.svg" alt="setup-thumb" class="mx-auto xl:block" />
              </div>
              <div class="space-y-2 px-8 py-6">
                <h2 class="flex-1 text-base font-bold leading-snug text-grey-800">Form brows privacy</h2>
                <p class="text-base font-normal text-grey-700 leading-none">Created Nov 10, 2020 - 4:39 AM</p>
              </div>
            </div>   
            </div>
            </div>  
        </div>
      </div>    
      <!-- Create Your Own Form -->
      <div class="space-y-6 pt-3 md:pt-0 md:pb-7 border-0 border-solid border-gray-300 mt-8">
        <div class="flex items-center px-3 md:px-0">
        <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Create Your Own Form</h2>
        </div>
        <div v-if="!isPmuForm" class="overflow-hidden md:rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area p-8 space-y-4">
            <div class="space-y-2">
            <Input id="link" type="text" label-text="Form name" name="link" v-model="password" placeholder="Post PMU Care Form" labelClasses="block xs:text-lg font-semibold text-grey-800" inputClasses="border-peach-500" />
            </div>                
            <div class="space-y-2">  
            <Textarea rows="4" id="project-description" name="project-description" label-text="Description" placeholder="Please complete this form" labelClasses="block xs:text-lg font-semibold text-grey-800" />
            </div>
          </div>
        </div>
        <div class="flex items-start gap-5 w-full">
          <div v-if="!isPmuForm" class="overflow-hidden md:rounded-lg shadow-3 bg-white w-full">
            <div class="setup-guide-area p-6 pt-3 space-y-4 relative">
              <div class="relative flex flex-col"><img src="@/assets/dots.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
              <div class="space-y-2">
                  <h2 class="flex-1 text-base font-bold leading-snug text-grey-800">Use your own document</h2>
                  <p class="text-base font-normal text-grey-700 leading-none">Upload your own pre-built PDF or DOC form</p>
                </div>
              <div class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-8 rounded-xl" >
              <div class="flex flex-col gap-2">
              <div class="flex justify-center items-center">
              <file-select v-model="file"></file-select>
              </div>
              <p v-if="file">{{ file.name }}</p>
              <p class="text-xs text-grey-800/80">
              Accepts .jpg., png., mp4., mov.
              </p>
              </div>
              </div>
              <Button @click="deleteCustomerDailog = true" :btn-no-border="true" :btn-primary="false" class=" xs:px-4 pl-0 gap-x-2 text-red flex items-center justify-end ml-auto  hover:bg-red/10 "> <TrashIcon class="w-4" /> Delete</Button>
            </div>
          </div>
          <div class="overflow-hidden md:rounded-lg shadow-3 divide-y space-y-3 bg-white py-6 px-6">
           <div class="flex flex-col"> <PlusCircle class="w-6 h-6 text-grey-700" /></div>
            <div class="flex felx-col pt-2"><gallery class="w-6 h-6 text-grey-700"/></div>
          </div>
        </div>  
        <!-- Question and answer section here -->
        <div v-if="!isPmuForm" class="overflow-hidden md:rounded-lg shadow-3 bg-white w-full">
            <div class="setup-guide-area p-6 pt-3 space-y-6 relative">
              <div class="relative flex flex-col"><img src="@/assets/dots.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
              <div class="sm:grid grid-cols-12 gap-5">
                <div class="col-span-9 space-y-8">
                  <div class="space-y-4">
                    <div class="space-y-2 flex items-start gap-5 w-full">  
                      <Textarea rows="3" id="project-description" class="w-full" name="project-description" label-text="Question" placeholder="I have read, or had read to me, the above Pre and Post Care instructions and expectations. I agree to follow the above directions and understand that how I heal depends on how closely I follow said directions. I understand a touchup appointment will be needed to complete the process." labelClasses="block xs:text-lg font-semibold text-grey-800" />
                      <gallery class="w-5 h-5 text-grey-700 relative top-8"/>
                    </div>
                    <div class="relative flex gap-3 items-start">
                      <input type="checkbox" id="question" class="relative top-1 text-peach-500 rounded shadow-md border-pearch focus:ring-peach-500" />
                      <label for="create" class="block text-lg text-grey-800 flex-1" > This question is required </label>
                    </div>
                  </div>
                  <!-- option box here -->
                  <div class="space-y-4">
                    <div class="flex items-center gap-4">
                      <Input id="option1" class="w-full" type="text" label-text="Option #1" name="link" v-model="password" placeholder="I am currently taking blood thinners" labelClasses="block xs:text-lg font-semibold text-grey-800" inputClasses="border-peach-500" />
                      <PlusCircle class="w-5 h-5 text-grey-700 mt-4"/>
                      <TrashIcon class="w-4 text-red mt-4" />
                    </div>  
                    <div class="flex items-center gap-4">
                      <Input id="option1" class="w-full" type="text" label-text="Option #2" name="link" v-model="password" placeholder="I am pregnant or breastfeeding" labelClasses="block xs:text-lg font-semibold text-grey-800" inputClasses="border-peach-500" />
                      <PlusCircle class="w-5 h-5 text-grey-700 mt-4"/>
                      <TrashIcon class="w-4 text-red mt-4" />
                    </div>   
                    <div class="flex items-center gap-4">
                      <Input id="option1" class="w-full" type="text" label-text="Option #3" name="link" v-model="password" placeholder="I have skin diseases such as psoriasis or eczema" labelClasses="block xs:text-lg font-semibold text-grey-800" inputClasses="border-peach-500" />
                      <PlusCircle class="w-5 h-5 text-grey-700 mt-4"/>
                      <TrashIcon class="w-4 text-red mt-4" />
                    </div>    
                  </div>
                </div>
                <div class="col-span-3">
                  <div class="space-y-3">
                    <h4 class="text-md font-semibold text-grey-800 leading-none ">Respond type</h4>
                    <Listbox v-model="selectedPerson">  
                      <div class="relative mt-1">
                        <ListboxButton class="relative cursor-default overflow-hidden md:rounded-lg shadow-3 border border-grey-300 bg-white w-full py-3 px-4 text-left focus:outline-none  focus-visible:bg-grey-200" >
                        <span class="block truncate">{{ selectedPerson.name }}</span>
                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" >  
                        </span>
                        </ListboxButton>
                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0" >
                        <ListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" >
                        <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="person in people"  
                        :key="person.name"
                        :value="person"
                        as="template"
                        >
                        <li :class="[ active ? 'bg-grey-200 text-grey-800' : 'text-grey-800', 'relative cursor-default select-none py-2 pl-10 pr-4', ]" >
                          <span :class="[ selected ? 'font-medium' : 'font-normal', 'block truncate text-base', ]" >{{ person.name }}</span >
                          <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-grey-800"></span>
                        </li>
                        </ListboxOption>
                        </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                  </div>
                </div>  
              </div>
              <div class="flex justify-between">
                <div class="relative flex items-center gap-2"><PlusCircle class="w-4 h-4 text-grey-700 "/> Add Option or <a href="#" class="text-blue">Add "Other"</a></div>
                <Button @click="deleteCustomerDailog = true" :btn-no-border="true" :btn-primary="false" class="text-red xs:px-4 pl-0 gap-x-2 flex items-center justify-end ml-auto  hover:bg-red/10 "> <TrashIcon class="w-4" /> Delete </Button>
              </div>
            </div>
        </div>
        <Button type="submit" :btn-primary="true" @click="isPmuForm = true" class="w-auto sm:px-6 ml-4 sm:ml-0">Save and create form</Button>   
      </div> 
       <!--Pre and Post Care Agreement-->
       <div class="space-y-6 pt-3  border-0 border-solid border-gray-300">
          <div class="flex items-center px-3 md:px-0">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Pre and Post Care Agreement</h2>
           </div>  
          <div v-if="!isPmuForm" class="overflow-hidden">
          <div class="sm:flex items-start w-full gap-5 space-y-4 sm:space-y-0">
            <div class="overflow-hidden md:rounded-lg shadow-3 bg-white w-full sm:w-3/4 divide-y space-y-3">
              <div class="relative py-6 px-4">
                <img src="@/assets/Pre-and-Post-care.svg" alt="setup-thumb" class="mx-auto xl:block" />
              </div>
            </div>
            <div class="overflow-hidden md:rounded-lg shadow-3 bg-white w-full sm:w-1/4 divide-y space-y-3 p-6">
              <div class="relative space-y-4 ">
                <h4 class="text-lg font-semibold text-grey-800 leading-none">Send to customer</h4>
                <div class="pointer-events-none absolute inset-y-0 top-4 left-0 flex items-center pl-3" >
                <MagnifyingGlassIcon
                class="h-4 w-4 text-grey-900"
                aria-hidden="true"
                />
                </div>
                <Input id="search" type="search" label-text="" name="search" v-model="password" placeholder="Search for client" 
                inputClasses="pl-10 border-peach-500" />
              </div>
            </div>  
          </div>
          </div>
          <div class="flex flex-wrap gap-3 w-full justify-start">  
            <Button type="submit" :btn-primary="true" @click="isPmuForm = true" class="w-auto sm:px-6 ">Send PMU form</Button>
            <Button type="submit" :btn-outline="true" :btn-primary="false" class="w-auto sm:px-6">Print</Button>
          </div> 
        </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';   
  import TrashIcon from '@/assets/icons/trash.vue';
  import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
  import Button from '@/components/Button.vue';
  import Input from '@/components/Input.vue';
  import Textarea from '@/components/Textarea.vue';
  import FileSelect from '@/components/FileSelect.vue';
  import PlusCircle from '../assets/icons/plusCircle.vue';
  import gallery from '../assets/icons/gallery.vue';
  import { Listbox,  ListboxButton, ListboxOptions, ListboxOption, } from '@headlessui/vue';
  const isPmuForm = ref(false);
  
  const people = [
    { name: 'Checklist' },
    { name: 'Text Response' },
    { name: 'Checklist' },
    { name: 'Multiple choice' },
  ]
  const selectedPerson = ref(people[0])

</script>
