<template>
  <div class="relative flex flex-col w-full"> 
    <div class="flex-1 py-0 md:p-0 xl:px-0 xl:py-0">
      <div class="space-y-6 pt-0 md:pt-0 md:pb-7 border-0 border-solid border-gray-300 pr-10">
        <div class="relative rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area p-4 lg:p-10">
            <div class="flex flex-col">
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
          </div>
        </div>
        <div class="relative rounded-lg shadow-3 bg-white">
          <!-- Start right side action button -->
          <div class="absolute top-0 rounded-lg shadow-3 bg-white" style="right: -80px">
            <div class="flex flex-col">
              <div class="p-3">
                <Button @click="isMoreQuestions = true" class="text-red hover:bg-red/10 px-3 xs:px-3 gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                  <PlusCircle class="w-4"/>
                </Button>
                <div class="border-t border-primary my-1"></div>
                <Button class="text-red hover:bg-red/10 px-3 xs:px-3 gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                  <PictureIcon class="w-4"/>
                </Button>
              </div>
            </div>
          </div>
          <!-- End right side action button -->

          <div class="setup-guide-area p-4 lg:p-10">
            <div class="flex flex-col">
              <div class="space-y-4">
                <div class="space-y-1">
                  <h3 class="flex-1 text-base font-bold leading-snug text-grey-800">Use your own document</h3>
                  <p class="text-base font-normal text-grey-700 leading-snug md:leading-none">Upload your own pre-built PDF or DOC form</p>
                </div>
                <div @click="isUploadDocument = true" class="cursor-pointer flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-14 rounded-xl">
                  <div class="flex flex-col">
                    <FileSelect />
                    <p class="text-md text-grey-900">Accepts .pdf., doc.</p>
                  </div>
                </div>
                <div class="flex justify-end ">
                  <Button class="text-red hover:bg-red/10 xs:px-4 gap-x-3 inline-flex items-center ml-auto justify-end" type="button" :btn-no-border="true" :btn-primary="false">
                    <TrashIcon class="w-4"/>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Start Question area -->
        <div v-if="isMoreQuestions" class="relative rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area p-4 lg:p-10">
            <div class="md:grid md:grid-cols-3 md:gap-6 mb-7">
              <div class="md:col-span-2">
                <div class="space-y-4 relative">
                  <div class="absolute top-10 rounded-lg shadow-0 bg-white" style="right: -30px">
                    <div class="flex flex-col">
                      <div class="p-0">
                        <Button class="text-red hover:bg-red/10 px-0 xs:p-1 shadow-none gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <PictureIcon class="w-4"/>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <Textarea name="question" rows="4" id="question" label-text="Question" />
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
                      <div class="ml-4 mt-4 pt-1">
                        <Button class="text-red mr-1 hover:bg-red/10 px-0 xs:px-3 gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <PictureIcon class="w-4"/>
                        </Button>
                        <Button @click="addOptions--" class="text-red hover:bg-red/10 px-0 xs:px-3 gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                          <TrashIcon class="w-4"/>
                        </Button>
                      </div>
                    </div>
                  </template>
                  <!-- Repeat options -->
                  <div class="flex items-center cursor-pointer" @click="addOptions++">
                    <PlusCircle class="w-4 mr-2"/>
                    Add Option or <span class="text-blue ml-2">Add “Other”</span>
                  </div>
                </div>
              </div>
              <div class="md:col-span-1 pl-10">
                <div class="p-3 flex flex-col h-full">
                  <SelectItem />
                  <div class="mt-auto text-right">
                    <Button class="text-red hover:bg-red/10 px-0 xs:px-3 gap-x-2 inline-flex items-center ml-auto justify-end" :btn-no-border="true" :btn-primary="false">
                      <TrashIcon class="w-4 mr-2"/> Delete
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
  const addOptions = ref(1);
  const isMoreQuestions = ref(false);
  const isUploadDocument = ref(false);
</script>
