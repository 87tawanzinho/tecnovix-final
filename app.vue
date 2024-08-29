<template>
  <div>
    <div class="flex flex-col xl:flex-row justify-between w-full">
      <transition name="bounce" mode="out-in">
        <FlowSideBar v-if="showComponentFlow" @closing="handleClose" />
      </transition>
      <Topbar
        @exec="handleClick"
        :show-component-flow="showComponentFlow"
        @closing="handleClose"
      />
    </div>

    <PopUpToShowFlowInComputer
      v-if="showComponentFlow"
      @closing="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Topbar from "./components/Topbar.vue";
import FlowSideBar from "./components/FlowSide/FlowSideBar.vue";
import PopUpToShowFlowInComputer from "./components/ComputerOnly/PopUpToShowFlowInComputer.vue";

const showComponentFlow = ref(false);
function handleClick() {
  showComponentFlow.value = true;
}

function handleClose() {
  showComponentFlow.value = false;
}
</script>
