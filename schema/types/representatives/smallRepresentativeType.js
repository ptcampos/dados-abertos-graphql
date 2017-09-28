const axios = require('axios')
const _ = require('lodash')
const querystring = require('querystring')

const { ENDPOINT_API } = require('../../../config/config.json')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const ExpenseType = require('../expenses/expenseType')

module.exports = new GraphQLObjectType({
  name: 'DeputadoResumido',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: data => data.id
    },
    idLegislatura: {
      type: GraphQLInt,
      resolve: data => data.idLegislatura
    },
    nome: {
      type: GraphQLString,
      resolve: data => data.nome
    },
    siglaPartido: {
      type: GraphQLString,
      resolve: data => data.siglaPartido
    },
    siglaUf: {
      type: GraphQLString,
      resolve: data => data.siglaUf
    },
    uri: {
      type: GraphQLString,
      resolve: data => data.uri
    },
    uriPartido: {
      type: GraphQLString,
      resolve: data => data.uriPartido
    },
    urlFoto: {
      type: GraphQLString,
      resolve: data => data.urlFoto
    },
    despesas: {
      type: new GraphQLList(ExpenseType),
      args: {
        idLegislatura: { type: new GraphQLList(GraphQLInt) },
        ano: { type: new GraphQLList(GraphQLInt) },
        mes: { type: new GraphQLList(GraphQLInt) },
        cnpjCpfFornecedor: { type: GraphQLString },
        pagina: { type: GraphQLInt },
        itens: { type: GraphQLInt },
        ordem: { type: GraphQLString },
        ordenarPor: { type: GraphQLString }
      },
      resolve: (data, args) => {
        const queryParams = !_.isEmpty(args) ? '?' + querystring.stringify(args) : ''
        return axios.get(`${ENDPOINT_API}/deputados/${data.id}/despesas${queryParams}`)
          .then(response => response.data)
          .then(data => data.dados)
      }
    }
  })
})
