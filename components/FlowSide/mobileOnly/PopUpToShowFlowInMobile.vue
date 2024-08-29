<template>
  <div
    class="flex flex-col xl:hidden mt-8 bg-white text-black h-96 rounded-2xl p-4"
  >
    <p class="font-bold">Execuções</p>

    <div class="flex flex-col gap-0 text-gray-800">
      <div class="mt-4">
        <select class="mt-4 bg-gray-100 p-2 rounded-lg outline-none">
          <option value="">Qualquer Status</option>
          <option value="">Ativado</option>
          <option value="">Inativo</option>
        </select>
      </div>
      <div class="flex gap-1 w-full">
        <div class="relative">
          <label for="start" class="absolute top-[24px] left-2">
            <Icon name="ic:baseline-timer" size="22" />
          </label>
          <select
            class="mt-4 bg-gray-100 p-2 rounded-lg outline-none px-8"
            name="start"
          >
            <option value="">| Inicio</option>
          </select>
        </div>

        <div class="relative">
          <label for="start" class="absolute top-[24px] left-2">
            <Icon name="ic:baseline-timer" size="22" />
          </label>
          <select
            class="mt-4 bg-gray-100 p-2 rounded-lg outline-none px-8"
            name="start"
          >
            <option value="">| Fim</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col items-start mt-8">
        <div class="flex gap-2 justify-between">
          <Icon name="ic:baseline-timer" size="22" />
          <p>9 Aug 19:58</p>
        </div>

        <div class="flex gap-2 items-center">
          <Icon name="ic:baseline-timer" size="22" />
          <p>00:13| ID #167CDD</p>
        </div>

        <div class="flex gap-2 items-center justify-between w-full">
          <button class="bg-red-200 rounded-lg px-4">error</button>
          <Icon
            name="material-symbols-light:delete-outline"
            size="24"
            class="text-red-800"
          />
        </div>
      </div>
    </div>
  </div>
</template>
