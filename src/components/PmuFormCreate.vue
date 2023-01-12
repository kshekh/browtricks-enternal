<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 py-0 md:p-0 xl:px-0 xl:py-0">
      <div class="space-y-6 pt-0 md:pt-0 md:pb-7 border-0 border-solid border-gray-300">
        <div class="overflow-hidden rounded-lg shadow-3 bg-white">
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
                  <Textarea name="description" rows="4" id="description" label-text="Description" />
                </div>
              </div>
             </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area p-4 lg:p-10">
            <div class="flex flex-col">
              <div class="space-y-4">
                <div class="space-y-1">
                  <h3>Use your own document</h3>
                  <p class="text-md text-grey-900">Upload your own pre-built PDF or DOC form</p>
                </div>
                <div class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-14 rounded-xl">
                  <div class="flex flex-col">
                    <FileSelect />
                    <p class="text-md text-grey-900">Accepts .pdf., doc.</p>
                  </div>
                </div>
                <div class="flex justify-end">
                  <Button class="text-red hover:bg-red/10 xs:px-4 gap-x-2 inline-flex items-center ml-auto justify-end" type="button" :btn-no-border="true" :btn-primary="false">
                    <TrashIcon class="w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <Button type="submit" :btn-primary="true">Save and create form</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import Input from '@/components/Input.vue';
  import Textarea from '@/components/Textarea.vue';
  import FileSelect from '@/components/FileSelect.vue';
  import Button from '@/components/Button.vue';

  import TrashIcon from '@/assets/icons/trash.vue';
</script>
