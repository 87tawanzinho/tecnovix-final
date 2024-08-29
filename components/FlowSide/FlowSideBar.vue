<template>
  <div
    class="p-4 fixed top-0 left-0 h-full w-full xl:w-[380px] bg-blue-project text-white z-50 overflow-y-auto"
  >
    <div class="p-6">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:airplay" size="32px" />
          <h3 class="text-[18px] font-strong">Docker</h3>
        </div>
        <div>
          <button
            @click="toggleState"
            :class="{
              'bg-green-400': isActive,
              'bg-red-400': !isActive,
            }"
            class="hover:opacity-90 transition-all rounded-2xl w-18 gap-1 flex items-center justify-between"
          >
            <span class="ml-2 font-less">{{
              isActive ? "Ativo" : "Inativo"
            }}</span>
            <Icon
              :name="isActive ? 'ion:ellipse' : 'ion:ellipse-outline'"
              size="22px"
            />
          </button>
        </div>
      </div>

      <div class="mt-8">
        <button
          class="font-less bg-white text-[#7A828A] flex items-center gap-2 rounded-lg px-4 py-[3px]"
        >
          EM TESTE
          <Icon name="material-symbols:close-rounded" class="text-[#7A828A]" />
        </button>

        <div class="relative mt-10">
          <label for="search" class="absolute top-[11px] left-2 text-[#7A828A]">
            <Icon name="ic:baseline-search" size="28" />
          </label>
          <input
            type="text"
            name="search"
            class="w-[294px] h-[46px] text-gray-600 outline-none rounded-lg px-[40px] placeholder-[#7A828A]"
            placeholder="Pesquisar Bloco..."
          />
        </div>
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="ion:md-flash" size="24" />
          <p class="text-[20px] font-less">Integrações</p>
        </div>
        <ToggleButton type="integrations" @toggle="handleToggle" />
      </div>
      <transition name="slide">
        <Integrations v-if="showInfoDiv" :key="showInfoDiv" />
      </transition>
      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:timer" size="24" />
          <p class="text-[20px] font-less">Gatilhos</p>
        </div>
        <ToggleButton type="triggers" @toggle="handleToggle" />
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:database" size="24" />
          <p class="text-[20px] font-less">Dados</p>
        </div>
        <ToggleButton type="data" @toggle="handleToggle" />
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:share" size="24" />
          <p class="text-[20px] font-less">Lógica</p>
        </div>
        <ToggleButton type="logic" @toggle="handleToggle" />
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="material-symbols:video-file" size="24" />
          <p class="text-[20px] font-less">Arquivos</p>
        </div>
        <ToggleButton type="files" @toggle="handleToggle" />
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="oui:app-advanced-settings" size="24" />
          <p class="text-[20px] font-less">Avançado</p>
        </div>
        <ToggleButton type="advanced" @toggle="handleToggle" />
      </div>

      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-2">
          <Icon name="ph:brain-fill" size="24" />
          <p class="text-[20px] font-less">Inteligência Artificial</p>
        </div>
        <ToggleButton type="ai" @toggle="handleToggle" />
      </div>
      <PopUpToShowFlowInMobile />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ToggleButton from "/components/FlowSide/ToggleButtonIntegrations.vue";
import Integrations from "/components/FlowSide/Integrations.vue";
import PopUpToShowFlowInMobile from "./mobileOnly/PopUpToShowFlowInMobile.vue";

const showInfoDiv = ref(false);
const isActive = ref(true);

const toggleState = () => {
  isActive.value = !isActive.value;
  setTimeout(() => {
    close();
  }, 500);
};

const handleToggle = ({ isActive: active, type }) => {
  if (type === "integrations") {
    showInfoDiv.value = active;
  }
};

const emit = defineEmits(["closing"]);

const close = () => {
  emit("closing");
};
</script>
