import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const api = axios.create({
  baseURL: 'http://localhost',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const mock = new MockAdapter(api)

mock.onGet('/items').reply(200, {
  items: [
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
          options: [
            {
              id: 5,
              name: 'Aulas',
              expanded: false,
              titleOptions: 'TEORIA +QUESTÕES ORIENTADAS',
              checkList: [
                { id: 101, name: 'Aula 1', checked: false },
                { id: 102, name: 'Aula 2', checked: false },
              ],
            },
            {
              id: 6,
              name: 'Exercícios',
              expanded: false,
              titleOptions: 'TITULO EXEMPLO',
              checkList: [
                { id: 201, name: 'Exercício 1', checked: false },
                { id: 202, name: 'Exercício 2', checked: false },
              ],
            },
            {
              id: 7,
              name: 'Materiais',
              expanded: false,
              titleOptions: 'TITULO EXEMPLO 1',
              checkList: [
                { id: 301, name: 'Material PDF', checked: false },
                { id: 302, name: 'Slides', checked: false },
              ],
            },
          ],
        },
      ],
    },
  ],
})

export default api
