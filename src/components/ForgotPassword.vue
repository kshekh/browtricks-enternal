<template>
  <div class="forgot-password-wrapper">
    <div class="top-navbar bg-white px-3 py-4">
      <img src="../assets/logo.png" alt="image" class="mx-auto" />
    </div>
    <div class="form-wrapper flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <h2 class="text-start font-bold text-3xl text-gray-900">Forgot Password</h2>
            <p class="text-start">Enter your registered email address to receive password reset instructions.</p>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 text-start">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Reset password</button>
              </div>
            </div>
          </form>
        </div>
        <div class="mt-8">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-900">Back to login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg-gray : #DFDFDF;
.bg-gray {
  background-color: $bg-gray;
}
.forgot-password-wrapper {
  background: $bg-gray;
}
</style>
