<template>
  <div class="d-flex justify-content-center align-items-center pt-4">
    <div class="card w-100">
      <div class="card-body">
        <h4 class="py-2">Cadernos/Língua Portuguesa</h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div class="d-block">
                  <div><h5>1. Interpretação de Textos</h5></div>
                  <div class="container">
                    <div class="row subtitle">
                      <div class="col">Aulas: <strong>Lorem</strong></div>
                      <div class="col">Exercícios: <strong>Lorem</strong></div>
                      <div class="col">Materias: <strong>Lorem</strong></div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
              <div class="accordion-body">
                <div class="table-container">
                  <div v-if="concludedRequest" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <table class="tree-table">
                    <tbody>
                      <TreeRow
                        v-for="(item, index) in items"
                        :key="index"
                        :item="item"
                        :level="0"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- new accordion -->

        <div class="accordion mt-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <div class="d-block">
                  <div><h5>2. Gramática</h5></div>
                  <div class="container">
                    <div class="row subtitle">
                      <div class="col">Aulas: <strong>Lorem</strong></div>
                      <div class="col">Exercícios: <strong>Lorem</strong></div>
                      <div class="col">Materias: <strong>Lorem</strong></div>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
              <div class="accordion-body">
                <div class="table-container">
                  <div v-if="concludedRequest" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <table class="tree-table">
                    <tbody>
                      <TreeRow
                        v-for="(item, index) in itemsTwo"
                        :key="index"
                        :item="item"
                        :level="0"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center flex-column mt-5">
          <p>Acessar Dados Selecionados</p>
          <button
            type="button"
            class="btn btn-bd-primary custom-button-default"
            @click="goToVuex"
            title="Selecione os checkboxes"
          >
            Veja o Vuex em Ação!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TreeRow from './TreeRow.vue'
import api from '../api/api'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

//FORJANDO REQUISIÇÃO AO ENTRAR NA TELA
//AXIOS INSTANCIADO EM API.JS
//ADOTEI ESSA ESTRATÉGIA PARA SIMULAR UMA REQUISIÇÃO AO MONTAR A TELA (onMounted) E OBTER TODOS OS DADOS EVITANDO REQUESTS A CADA CLIQUE, MAS PODERIA SIM, SER COM O CLIQUE DOS ITENS DA LISTAGEM PASSANDO PARAMETRO ID E RETORNANDO OS DADOS VIA API
const items = ref()
const itemsTwo = ref()
const concludedRequest = ref(true)
const router = useRouter()

const getItems = async () => {
  await api.get('/items').then((response) => {
    items.value = response.data.items
    itemsTwo.value = response.data.items
    concludedRequest.value = false
  })
}

const goToVuex = () => {
  router.push('/vuex')
}

onMounted(() => {
  setTimeout(() => {
    getItems()
  }, 2000)
})
</script>
<style lang="scss">
.card {
  background-color: #ececec;
  border-color: #f3f3f3;

  &.custom-card {
    background-color: #f8f8f8;
    border-color: rgb(231, 231, 231);
  }
  .card-body {
    h5 {
      color: #313131;
    }
    .row {
      width: 120%;
      &.subtitle {
        color: #313131;
      }
    }
    .custom-pragraph {
      margin-bottom: 5px;
    }
  }
}

.table-container {
  width: 100%;
}

.tree-table {
  user-select: none;
  width: 100%;
  border-collapse: collapse;
}

.tree-table th,
.tree-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.tree-table th {
  background-color: #f4f4f4;
  text-align: left;
}

.accordion {
  --bs-accordion-active-bg: #ffffff !important;
}

.btn-bd-primary {
  background-color: #e185fd !important;
  color: #fff !important;
  &:hover {
    background-color: #c97ee0 !important;
  }
}
</style>
