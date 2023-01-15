<template>
  <div class="relative flex flex-col w-full">    

      <div class="flex-1 space-y-6 xs:pr-16">
        <div class="overflow-hidden rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">
            <div class="space-y-4">
                <div class="relative">
                  <Input
                    id="formName"
                    type="text"
                    label-text="Form name"
                    placeholder="Post PMU Care Form"
                    v-model="formName"
                    :on-change="handleInput"
                    autocomplete="formName"
                  />  
                </div>
                <div class="relative">
                  <Textarea name="description" rows="4" id="description" label-text="Description" placeholder="Please complete this form" />
                </div>
            </div>         
         
        </div>
        <div class="relative space-y-3 xs:space-y-0">
          <!-- Before Form Upload -->
        <div class="relative rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">         
            <div class="space-y-4">
                <div class="space-y-1">
                  <h3 class="flex-1 text-base font-bold leading-snug text-grey-800">Use your own document</h3>
                  <p class="text-base font-normal text-grey-700 leading-snug md:leading-none">Upload your own pre-built PDF or DOC form</p>
                </div>
                <div @click="isUploadDocument = true" class="cursor-pointer flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-14 rounded-xl">               
                <div class="flex flex-col">
                    <span class="inline-flex w-full justify-center items-center rounded-md border border-peach-500 bg-peach-500 py-1 px-2 h-full text-xs font-semibold text-grey-800/70 shadow-sm hover:bg-peach-100 hover:border-peach-100 ease-in-out duration-300 cursor-pointer" >
                      <span v-if="value">{{ value.name }}</span>
                      <span v-else>Upload File </span>
                    </span>
                    <!-- <FileSelect /> -->
                    <p class="text-md text-grey-900">Accepts .pdf., doc.</p>
                  </div>
                </div>
                <div class="flex justify-end ">
                  <Button class="text-red hover:bg-red/10 xs:px-4 gap-x-1.5 inline-flex items-center ml-auto justify-end" type="button" :btn-no-border="true" :btn-primary="false">
                    <TrashIcon class="w-4"/>
                    Delete
                  </Button>
                </div>
            </div>               
        </div>
        <!-- After Form Upload (Please remove class "hidden" when document will be uploaded and updated here)-->
        <div class="relative rounded-lg shadow-3 bg-white border border-grey-300 space-y-3 p-4 lg:py-6 lg:px-8 hidden">
                  <div class="flex items-center">
                      <div class="relative flex-1">
                        <Input
                          id="formDescription"
                          type="text"
                          :label-text="'Form description'"
                          :placeholder="'Please read the folowing'" 
                        />
                      </div>
                      <div class="pt-5 flex pl-3 gap-0.5">
                         
                        <Button  class="text-red hover:bg-red/10 mv:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <TrashIcon class="w-4"/>
                        </Button>
                      </div>
                  </div>


                  <div class="relative py-6 px-4 flex justify-center items-center">
                    <img class="h-auto object-cover" :src="uploadedPdf" alt="" />
                  </div>
        </div>

        <!-- Start right side action button -->         
        <div class="xs:absolute xs:top-0 rounded-lg shadow-3 bg-white border border-grey-300 xs:-right-16 inline-flex">      
              <div class="p-1.5 flex xs:flex-col gap-2 divide-x xs:divide-y xs:divide-x-0 divide-grey">
                <Button @click="isMoreQuestions = true" class="text-grey-700 hover:bg-red/10 px-2 gap-x-2 inline-flex items-center justify-end" :btn-no-border="true" :btn-primary="false">
                  <PlusCircle class="w-5"/>
                </Button>
                 
                <Button class="text-grey-700 hover:bg-red/10 px-2 gap-x-2 inline-flex items-center justify-end" :btn-no-border="true" :btn-primary="false">
                  <PictureIcon class="w-5"/>
                </Button>
              </div>
        </div>
        <!-- End right side action button -->
        </div>
        <!-- Start Question area -->
        <div v-if="isMoreQuestions" class="relative rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area p-4 lg:py-6 lg:px-8">
            <div class="flex flex-col lg:grid lg:grid-cols-12 gap-3 2xl:gap-6">
              <div class="lg:col-span-9">
                <div class="relative space-y-4">
                  
                    
                 
                  <div class="space-y-3">
                    <div class="relative pr-12">
                      <div class="absolute top-6 rounded-lg shadow-0 bg-white right-0" >                                       
                        <Button class="hover:bg-red/10 mv:px-3 shadow-none flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <PictureIcon class="w-4 text-grey-700"/>
                        </Button>
                  </div>
                    <Textarea name="question" rows="4" id="question" label-text="Question" />
                  
                  </div>
                    <CheckboxRadio
                      id="visible"
                      type="checkbox"
                      checked="checked"
                      name="visibility"
                      label-text="This question is required"
                    />
                  </div>
                  <template v-for="(option, index) in addOptions" :key="index">
                    <div class="flex items-center">
                      <div class="relative flex-1">
                        <Input
                          id="formName"
                          type="text"
                          :label-text="`Option #${index}`"
                          :placeholder="`Option #${index}`"
                          :on-change="handleInput"
                          autocomplete="formName"
                        />
                      </div>
                      <div class="pt-5 flex pl-3 gap-0.5">
                        <Button class=" hover:bg-red/10 mv:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <PictureIcon class="w-4 text-grey-700"/>
                        </Button>
                        <Button @click="addOptions--" class="text-red hover:bg-red/10 mv:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <TrashIcon class="w-4"/>
                        </Button>
                      </div>
                    </div>
                  </template>
                  <!-- Repeat options -->
                  <div class="flex items-center cursor-pointer" @click="addOptions++">
                    <PlusCircle class="w-4 mr-2 text-grey-700"/>
                    Add Option or <span class="text-blue ml-2">Add “Other”</span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-3">
                <div class="flex flex-col h-full gap-2">
                  <SelectItem />
                  <div class="mt-auto text-right">
                    <Button class="text-red hover:bg-red/10 px-0 xs:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                      <TrashIcon class="w-4"/> Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Questions area -->

        <div class="mt-8">
          <Button type="submit" :btn-primary="true">Save and create form</Button>
      </div>
    </div>

    <SlideOvers :open-dialog="isUploadDocument" @closeModal="isUploadDocument = false">
      <FileSelect />
    </SlideOvers>
 
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import Input from '@/components/Input.vue';
  import Textarea from '@/components/Textarea.vue';
  import SlideOvers from '@/components/SlideOvers.vue';
  import FileSelect from '@/components/FileSelect.vue';
  import Button from '@/components/Button.vue';
  import CheckboxRadio from '@/components/CheckboxRadio.vue';
  import SelectItem from '@/components/SelectItem.vue';

  import TrashIcon from '@/assets/icons/trash.vue';
  import PlusCircle from '@/assets/icons/PlusCircle.vue';
  import PictureIcon from '@/assets/icons/PictureIcon.vue';
  import uploadedPdf from '@/assets/Pre_and_Post_Care_Agreement.png';
  const addOptions = ref(1);
  const isMoreQuestions = ref(false);
  const isUploadDocument = ref(false);
</script>
