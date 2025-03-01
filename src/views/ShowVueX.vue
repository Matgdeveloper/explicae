<template>
  <div class="d-flex justify-content-center align-items-center pt-4">
    <div class="card w-100">
      <div class="card-body">
        <h5>Seus Dados Selecionados Foram:</h5>
        <div v-for="item in selectedData" :key="item.id">
          <p class="mt-5">
            <strong>{{ item }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

const selectedData = ref()

const goBack = () => {
  const checkboxes = store.getters.getCheckBoxes

  if (!checkboxes || checkboxes.length === 0) {
    router.push('/')
  } else {
    selectedData.value = [...checkboxes]
  }
}

onMounted(() => {
  goBack()
})
</script>

<style lang="scss"></style>
