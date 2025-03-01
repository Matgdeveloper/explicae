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
                  <table class="tree-table">
                    <tbody>
                      <TreeRow
                        v-for="item in itemsTwo"
                        :key="item.id"
                        :item="item"
                        :depth="0"
                        @toggle="toggleItem"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->

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
                  <table class="tree-table">
                    <tbody>
                      <TreeRow
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                        :depth="0"
                        @toggle="toggleItem"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TreeRow from './TreeRow.vue'
const items = ref([
  {
    id: 1,
    name: 'Morfologia',
    expanded: false,
    children: [
      {
        id: 2,
        name: 'Estrutura e Formação das Palavras',
        expanded: false,
        children: [],
      },
    ],
  },
])

const itemsTwo = ref([
  {
    id: 1,
    name: 'Morfologia',
    expanded: false,
    children: [
      {
        id: 2,
        name: 'Estrutura e Formação das Palavras',
        expanded: false,
        children: [],
      },
    ],
  },
])

const toggleItem = (item) => {
  item.expanded = !item.expanded
}
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
  --bs-accordion-active-bg: #ffffff !important; /* Substitua pela cor desejada */
}
</style>
