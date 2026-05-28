<template>
<div class="flex flex-col lg:grid gap-8 relative lg:grid-cols-10 lg:gap-8 overflow-hidden p-1">

<div class="col-span-3 row-span-8 gap-6 flex flex-col justify-between animate-left">
  <div class="w-full pointer-events-auto bg-white dark:bg-gray-900 rounded-lg shadow ring-1 ring-gray-200 dark:ring-gray-800">
    <not1 />
  </div>
  <div class="relative space-y-2 w-full">
    <btns1 />
    <div class="relative w-full">
      <fm1 /><fm2 />
    </div>
  </div>
  <pul />
</div>



<div class="col-span-2 row-span-2 gap-6 flex flex-col animate-right z-10">
  <div class="relative flex items-start">
    <not />
  </div>
  <div class="relative">
    <se />
  </div>
  <div>
    <div><div class="flex content-center items-center justify-between text-sm"><label for="v-0-0-0-21" class="block font-medium text-gray-700 dark:text-gray-200">Labels</label></div></div>
    <div class="mt-1 relative"><div class="relative" data-headlessui-state="">
    <btn99 />
    </div></div>
  </div>
  <div class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
    <div class="px-4 py-5 sm:p-6 !p-1">
      <nav />
    </div>
  </div>
</div>

<div class="col-span-7 row-span-6 animate-bottom">
  <div class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
    <div>
      <div class="relative overflow-x-auto">
        <tbl />
      </div>
    </div>
  </div>
</div>
  
</div>
</template>
