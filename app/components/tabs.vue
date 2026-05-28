<template>
<div class="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full h-10 inline-grid items-center" style="grid-template-columns:repeat(2,minmax(0px,1fr));">

  <div class="absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none" style="top:4px; left:4px; width:190px; height:32px;">
    <div class="w-full h-full bg-white dark:bg-gray-900 rounded-md shadow-sm"></div>
  </div>

  <button type="button" class="relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out h-8 px-3 text-sm font-medium rounded-md text-gray-900 dark:text-white" data-headlessui-state="selected"><span class="truncate">Account</span></button>
  <button type="button" class="relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out h-8 px-3 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400"><span class="truncate">Password</span></button>

</div>

<fm1 /><fm2 />

</template>
