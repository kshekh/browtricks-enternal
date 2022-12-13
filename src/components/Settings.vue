<template>
  <div class="settings-wrapper relative flex flex-col min-h-screen w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black mb-5">
          Settings
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Team Name</h3>
                <p class="mt-1 text-sm text-gray-600">The team's name and owner information.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div class="w-full">
                      <div class="col-span-3 sm:col-span-2">
                        <h6 for="company-website" class="block text-sm font-medium text-gray-700">Team Owner</h6>
                        <div class="mt-3 flex items-center">
                          <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=56&h=56&q=80" class="rounded-full" />
                          <div class="ml-2">
                            <h5>Koko</h5>
                            <p class="text-sm">design.mailboxx@gmail.com</p>
                          </div>
                        </div>
                        <div class="mt-3">
                          <label for="email" class="block text-sm font-medium text-gray-700">Team name</label>
                          <div class="mt-1">
                            <input type="email" name="email" id="email" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm" placeholder="you@example.com" aria-describedby="email-description" />
                          </div>
                          <p class="hidden text-sm mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p>
                        </div>
                        <div class="flex items-center mt-3">
                          <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Team Address</h3>
                <p class="mt-1 text-sm text-gray-600">Add team address</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div class="w-full">
                      <div class="col-span-3 sm:col-span-2">
                        <div class="mt-3">
                          <label for="address" class="block text-sm font-sm text-gray-700">Address</label>
                          <div class="mt-1">
                            <input type="text" name="address" id="address" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm" placeholder="" aria-describedby="email-description" />
                          </div>
                          <p class="hidden text-sm mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p>
                        </div>
                        <div class="mt-3">
                          <label for="city" class="block text-sm font-sm text-gray-700">City</label>
                          <div class="mt-1">
                            <input type="text" name="city" id="city" class="mt-1 block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm" placeholder="" aria-describedby="email-description" />
                          </div>
                          <p class="hidden text-sm mt-2 text-sm text-gray-500" id="email-description">We'll only use this for spam.</p>
                        </div>
                        <div class="mt-3">
                          <label for="country" class="block text-sm font-sm text-gray-700">Country</label>
                          <select id="country" name="country" autocomplete="country-name" class="mt-1 relative block w-full rounded-md p-3 border border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                        <div class="mt-3">
                          <label for="postal-code" class="block text-sm font-sm text-gray-700">ZIP / postcode</label>
                          <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 relative block p-3 w-auto rounded-md border border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" />
                        </div>
                        <div class="flex items-center mt-3">
                          <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Add Team Member</h3>
                <p class="mt-1 text-sm text-gray-600">Add a new team member to your team, allowing them to collaborate with you.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div class="w-full">
                      <div class="col-span-3 sm:col-span-2">
                        <div class="mt-3">
                          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                          <div class="mt-1">
                            <input type="email" name="email" id="email" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm" placeholder="you@example.com" aria-describedby="email-description" />
                          </div>
                          <p class="text-sm mt-2 text-sm text-gray-500" id="email-description">Please provide the email address of the person you would like to add to this team.</p>
                        </div>
                        <div class="mt-3">
                          <fieldset>
                            <legend class="block mb-3">Role</legend>
                            <div class="space-y-5">
                              <div v-for="role in roles" :key="role.id" class="relative flex items-start">
                                <div class="flex h-5 items-center">
                                  <input :id="role.id" :aria-describedby="`${role.id}-description`" name="plan" type="radio" :checked="role.active === 'true'" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label :for="role.id" class="font-medium text-gray-700">{{ role.name }}</label>
                                  <p :id="`${role.id}-description`" class="text-gray-500">{{ role.description }}</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div class="flex items-center mt-3">
                          <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Connected Socials</h3>
                <p class="mt-1 text-sm text-gray-600">Manage and remove your connected accounts.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="w-full">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Your connected accounts.</h3>
                    <p class="mt-1 text-sm text-gray-600">You are free to connect any social accounts to your profile and may remove any connected accounts at any time. If you feel any of your connected accounts have been compromised, you should disconnect them immediately and change your password.</p>
                    <div class="w-full mt-3">
                      <div class="mt-6 flow-root">
                        <ul role="list" class="-my-5 divide-y divide-gray-200">
                          <li v-for="social in socials" :key="social.handle" class="py-4">
                            <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <img class="h-8 w-8 rounded-full" :src="social.imageUrl" alt="" />
                              </div>
                              <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium text-gray-900">{{ social.name }}</p>
                                <p class="truncate text-sm text-gray-500">{{ '@' + social.handle }}</p>
                              </div>
                              <div>
                                <a href="#" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50">View</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Create API Token</h3>
                <p class="mt-1 text-sm text-gray-600">API tokens aloow third-party services to
                  authentificate with our application on your
                  behalf.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="w-full">
                    <div class="mt-3">
                      <label for="name" class="block text-sm font-sm text-gray-700">Name</label>
                      <input type="text" name="name" id="name" autocomplete="name" class="mt-1 relative block p-3 w-full rounded-md border border-gray-300 bg-transparent focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="" />
                    </div>
                    <div class="mt-3">
                      <fieldset class="space-y-3">
                        <legend class="sr-only">Names</legend>
                        <div class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="comments" class="font-sm text-gray-700">Create</label>
                          </div>
                        </div>
                        <div class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="candidates" class="font-sm text-gray-700">Read</label>
                          </div>
                        </div>
                        <div class="relative flex items-start">
                          <div class="flex h-5 items-center">
                            <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="offers" class="font-sm text-gray-700">Delete</label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div class="flex items-center mt-3">
                      <button type="submit" class="flex ml-auto justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-gray-900 shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300">Create</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Delete Team</h3>
                <p class="mt-1 text-sm text-gray-600">Permanently delete this team.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="w-full">
                    <p class="mt-1 text-sm text-gray-600">Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.</p>
                    <div class="flex items-center mt-3">
                      <button type="submit" class="flex justify-center rounded-md border border-red bg-transparent py-2 px-4 text-base font-semibold text-red shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300">Delete Team</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const roles = [
  { id: '1', name: 'Administrator', active: 'false', description: 'Administrator users can perform any action.' },
  { id: '2', name: 'Editor', active: 'true', description: 'Editor users have the ability to read, create, and update.' },
]

const socials = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
</script>