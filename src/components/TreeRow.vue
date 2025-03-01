<template>
  <tr>
    <td
      :style="{ paddingLeft: `${depth * 20}px` }"
      @click="toggleExpand"
      :class="{ 'change-bg-color': item.expanded }"
      class="custom-height"
    >
      <div class="d-flex align-items-center ps-2">
        <span v-if="item.children.length" class="toggle">
          <Icon
            :icon="item.expanded ? 'meteor-icons:minus' : 'eva:plus-fill'"
            width="24"
            height="24"
          />
        </span>
        {{ item.name }}
      </div>
    </td>
  </tr>
  <template v-if="item.expanded">
    <TreeRow
      v-for="child in item.children"
      :key="child.id"
      :item="child"
      :depth="depth + 1"
      @toggle="onToggle"
    />
  </template>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  item: Object,
  depth: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['toggle'])

const toggleExpand = () => {
  emit('toggle', props.item)
}

const onToggle = (childItem) => {
  emit('toggle', childItem)
}
</script>

<style scoped>
.toggle {
  cursor: pointer;
  font-weight: bold;
  margin-right: 5px;
  display: inline-flex;
  align-items: center;
}

.change-bg-color {
  background-color: rgba(221, 166, 228, 0.87);
}

.custom-height {
  user-select: none;
  height: 60px;
  transition: all 0.3s;
  cursor: pointer;
}
</style>
