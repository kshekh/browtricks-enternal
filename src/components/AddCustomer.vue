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
                    <div class="mb-0">
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-grey-800"
                        >First name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="first name"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="first-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="last-name"
                        class="block text-sm font-medium text-grey-800"
                        >Last name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="Last name"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="last-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-grey-800"
                        >Phone</label
                      >
                      <div class="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="9727823"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="email"
                        class="block text-sm font-medium text-grey-800"
                        >Email</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="first@email.com"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-7 pt-7">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Add a note
                </h3>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="mb-0">
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-grey-800"
                        >First name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="first name"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="first-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="last-name"
                        class="block text-sm font-medium text-grey-800"
                        >Last name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="Last name"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="last-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-grey-800"
                        >Phone</label
                      >
                      <div class="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="9727823"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="mb-0">
                      <label
                        for="email"
                        class="block text-sm font-medium text-grey-800"
                        >Email</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="first@email.com"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="pt-7 flex items-center mt-3">
            <button
              type="submit"
              class="me-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
            >
            Add customer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>