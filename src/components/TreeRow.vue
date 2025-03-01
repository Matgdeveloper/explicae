<template>
  <div class="border-radius">
    <!-- Item principal -->
    <div
      class="tree-row"
      :class="{ 'bg-oppened': expanded }"
      :style="{ paddingLeft: `${level * 15}px` }"
      @click="expanded = !expanded"
      role="button"
    >
      <span class="expand-icon">
        <Icon :icon="expanded ? 'meteor-icons:minus' : 'eva:plus-fill'" width="24" height="24" />
      </span>
      <span>{{ item.name }}</span>
    </div>

    <!-- Opções e checkboxes (só aparecem se o item estiver expandido) -->
    <div v-if="expanded" :class="{ 'bg-oppened': expanded }">
      <!-- Opções (lado a lado) -->
      <div v-if="item.options?.length" class="options-container">
        <span
          v-for="(option, index) in item.options"
          :key="option.id"
          @click="activeOptionIndex = activeOptionIndex === index ? null : index"
          class="option"
          :class="{ active: activeOptionIndex === index }"
        >
          {{ option.name }}
        </span>
      </div>

      <!-- Checkboxes (abaixo das opções, em coluna) -->

      <div v-if="activeOptionIndex !== null" class="form-check checkbox-container">
        <p>{{ item.options[activeOptionIndex].titleOptions }}</p>
        <div
          v-for="check in item.options[activeOptionIndex].checkList"
          :key="check.id"
          class="checkbox-item"
        >
          <label>
            <input type="checkbox" v-model="check.checked" class="form-check-input" />
            {{ check.name }}
          </label>
        </div>
      </div>

      <!-- Filhos (abaixo de tudo, em coluna) -->
      <div class="children-container">
        <TreeRow v-for="child in item.children" :key="child.id" :item="child" :level="level + 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  item: Object,
  level: Number,
})

const expanded = ref(props.item.expanded)
const activeOptionIndex = ref(null)
</script>

<style scoped>
.tree-row {
  display: flex;
  align-items: center;
  height: 50px;
  transition: all 0.3s;
  &:hover {
    background-color: #e8a3fd;
  }
}

.expand-icon {
  cursor: pointer;
  margin-right: 5px;
}

.options-container {
  display: flex; /* Opções lado a lado */
  margin-left: 35px;
  margin-top: 5px;
}

.option {
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  padding: 5px 10px;
}

.option:hover,
.option.active {
  background-color: #e8a3fd;
}

.option.active {
  border-bottom: 2px solid #ab56c5;
}

.checkbox-container {
  display: flex;
  flex-direction: column; /* Checkboxes em coluna */
  padding-left: 70px;
  padding-top: 10px;
  background-color: rgb(248, 248, 248);
}

.checkbox-item {
  margin-bottom: 5px;
}

.bg-oppened {
  background-color: #efbaff;
}

.border-radius {
  border-radius: 10px;
}
</style>
