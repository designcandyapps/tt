<template>
<div class="focus:outline-none" style="display:none;">

<form class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
<div class="px-4 py-5 sm:px-6">
<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Password</h3>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Change your password here. After saving, you'll be logged out.</p>
</div>

<div class="px-4 py-5 sm:p-6">
<div class="mb-3">
<div>
<div class="flex content-center items-center justify-between text-sm"><label for="v-0-0-0-11" class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">Current Password</label></div>
</div>

<div class="mt-1 relative">
<div class="relative">
  <input type="password" name="current" class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400">
  </div>
</div>
</div>

<div>
<div>
<div class="flex content-center items-center justify-between text-sm"><label for="v-0-0-0-12" class="block font-medium text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">New Password</label></div>
</div>

<div class="mt-1 relative">
<div class="relative">
  <input type="password" name="new" class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400">
  </div>
</div>

</div>
</div>

<div class="px-4 py-4 sm:px-6">
<button type="submit" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">Save</button>
</div>
</form>

</div>
</template>
