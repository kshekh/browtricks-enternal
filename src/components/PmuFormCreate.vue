<template>
  <div class="relative flex flex-col w-full">

    <div class="flex-1 space-y-6 pr-16">
      <div class="overflow-hidden rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">
        <div class="space-y-4">
          <div class="relative">
            <Input id="formName" type="text" label-text="Form name" placeholder="Post PMU Care Form" v-model="formName"
              :on-change="handleInput" autocomplete="formName" />
          </div>
          <div class="relative">
            <Textarea name="description" rows="4" id="description" label-text="Description"
              placeholder="Please complete this form" />
          </div>
        </div>

      </div>
      <div class="relative rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">
        <!-- Start right side action button -->
        <div class="absolute top-0 rounded-lg shadow-3 bg-white border border-grey-300 -right-16">

          <div class="p-1.5">
            <Button @click="isMoreQuestions = true"
              class="text-grey-700 hover:bg-red/10 px-2 gap-x-2 inline-flex items-center ml-auto justify-end"
              :btn-no-border="true" :btn-primary="false">
              <PlusCircle class="w-5" />
            </Button>
            <div class="border-t border-primary my-1"></div>
            <Button class="text-grey-700 hover:bg-red/10 px-2 gap-x-2 inline-flex items-center ml-auto justify-end"
              :btn-no-border="true" :btn-primary="false">
              <PictureIcon class="w-5" />
            </Button>
          </div>

        </div>
        <!-- End right side action button -->
        <div class="space-y-4">
          <div class="space-y-1">
            <h3 class="flex-1 text-base font-bold leading-snug text-grey-800">Use your own document</h3>
            <p class="text-base font-normal text-grey-700 leading-snug md:leading-none">Upload your own pre-built PDF or
              DOC form</p>
          </div>
          <div @click="isUploadDocument = true"
            class="cursor-pointer flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-14 rounded-xl">
            <div class="flex flex-col">
              <span
                class="inline-flex w-full justify-center items-center rounded-md border border-peach-500 bg-peach-500 py-1 px-2 h-full text-xs font-semibold text-grey-800/70 shadow-sm hover:bg-peach-100 hover:border-peach-100 ease-in-out duration-300 cursor-pointer">
                <span v-if="value">{{ value.name }}</span>
                <span v-else>Upload File </span>
              </span>
              <!-- <FileSelect /> -->
              <p class="text-md text-grey-900">Accepts .pdf., doc.</p>
            </div>
          </div>
          <div class="flex justify-end ">
            <Button class="text-red hover:bg-red/10 xs:px-4 gap-x-1.5 inline-flex items-center ml-auto justify-end"
              type="button" :btn-no-border="true" :btn-primary="false">
              <TrashIcon class="w-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      <!-- Start Question area -->
      <div v-if="isMoreQuestions" class="relative rounded-lg shadow-3 bg-white">
        <div class="setup-guide-area p-4 lg:py-6 lg:px-8">
          <div class="md:grid md:grid-cols-12 md:gap-6">
            <div class="md:col-span-9">
              <div class="relative space-y-4">
                <div class="space-y-3">
                  <div class="relative pr-12">
                    <div class="absolute top-6 rounded-lg shadow-0 bg-white right-0">
                      <Button class="hover:bg-red/10 mv:px-3 shadow-none flex items-center ml-auto justify-end"
                        :btn-no-border="true" :btn-primary="false">
                        <PictureIcon class="w-4 text-grey-700" />
                      </Button>
                    </div>
                    <Textarea name="question" rows="4" id="question" label-text="Question" />

                  </div>
                  <CheckboxRadio id="visible" type="checkbox" checked="checked" name="visibility"
                    label-text="This question is required" />
                </div>
                <template v-for="(option, index) in addOptions" :key="index">
                  <div class="flex items-center">
                    <div class="relative flex-1">
                      <Input id="formName" type="text" :label-text="`Option #${index}`"
                        :placeholder="`Option #${index}`" :on-change="handleInput" autocomplete="formName" />
                    </div>
                    <div class="ml-4 mt-4 pt-1">
                      <Button
                        class="mr-1 hover:bg-red/10 px-0 xs:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end"
                        :btn-no-border="true" :btn-primary="false">
                        <PictureIcon class="w-4 text-grey-700" />
                      </Button>
                      <Button @click="addOptions--"
                        class="text-red hover:bg-red/10 px-0 xs:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end"
                        :btn-no-border="true" :btn-primary="false">
                        <TrashIcon class="w-4" />
                      </Button>
                    </div>
                  </div>
                </template>
                <!-- Repeat options -->
                <div class="flex items-center cursor-pointer" @click="addOptions++">
                  <PlusCircle class="w-4 mr-2 text-grey-700" />
                  Add Option or <span class="text-blue ml-2">Add “Other”</span>
                </div>
              </div>
            </div>
            <div class="md:col-span-3">
              <div class="flex flex-col h-full">
                <SelectItem />
                <div class="mt-auto text-right">
                  <Button
                    class="text-red hover:bg-red/10 px-0 xs:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end"
                    :btn-no-border="true" :btn-primary="false">
                    <TrashIcon class="w-4" /> Delete
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

    <SlideOvers :open-dialog="isUploadDocument" dialog-title="Upload Document" @closeModal="isUploadDocument = false">
      <div class="space-y-5">
        <!-- Replace with your content -->
        <div class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-32 rounded-xl">
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
        <!-- /End replace -->
        <!-- Picture Profile after upload -->
        <div class="space-y-4 hidden">
          <div class="block w-full overflow-hidden rounded-lg">
            <iframe src="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf" frameborder="0" class="object-cover aspect-square w-full h-1/4"></iframe>
          </div>
          <div class="flex items-start justify-between">
            <div class="space-y-1">
              <h2 class="text-lg font-normal text-grey-800 leading-none">
                Pre & Post Brow Care.pdf
              </h2>
              <p class="text-lg font-normal text-grey-700 flex items-center">
                PDF
                <span class="w-2 h-2 rounded-full bg-grey-500 block mx-3"></span>
                Jun 4, 2022
              </p>
            </div>
            <a href="javascript:void(0)"
              class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9">
              <LinkChain class="w-4 h-4" />
            </a>
          </div>
        </div>
        <!-- End Picture Profile -->
      </div>

      <div class="flex flex-wrap justify-between items-strech mt-4">
        <div class="flex gap-x-2">
          <Button @click="editNoteDailog = false" type="submit" class="w-auto" :btn-primary="true">Save</Button>
          <Button class="w-auto" @click="isUploadDocument = false" type="button" :btn-outline="true"
            :btn-primary="false">Cancel</Button>
        </div>
        <!-- <Button @click="deleteCustomerDailog = true" :btn-no-border="true" :btn-primary="false"
          class="text-red hover:bg-red/10 xs:px-4 gap-x-2 inline-flex items-center">
          <TrashIcon class="w-4" /> Delete Media
        </Button> -->
      </div>
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
  import LinkChain from '@/assets/icons/LinkChain.vue';

  const addOptions = ref(1);
  const isMoreQuestions = ref(false);
  const isUploadDocument = ref(false);
</script>
