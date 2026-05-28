<template>

<input type="text" name="q" placeholder="Search..." class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 ps-9 pe-9">
<span class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-2.5">
  <span class="iconify i-heroicons:magnifying-glass-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" aria-hidden="true"></span>
</span>
<span class="absolute inset-y-0 end-0 flex items-center px-2.5">
  <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" style="display:none;">
    <span class="iconify i-heroicons:x-mark-20-solid flex-shrink-0 h-5 w-5"></span>
  </button>
</span>

</template>
