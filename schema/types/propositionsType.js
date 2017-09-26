const moment = require('moment')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const StatusPropositionType = require('./statusPropositionType')

module.exports = new GraphQLObjectType({
  name: 'Proposicao',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: data => data.id
    },
    uri: {
      type: GraphQLString,
      resolve: data => data.uri
    },
    siglaTipo: {
      type: GraphQLString,
      resolve: data => data.siglaTipo
    },
    idTipo: {
      type: GraphQLInt,
      resolve: data => data.idTipo
    },
    numero: {
      type: GraphQLInt,
      resolve: data => data.numero
    },
    ano: {
      type: GraphQLInt,
      resolve: data => data.ano
    },
    ementa: {
      type: GraphQLString,
      resolve: data => data.ementa
    },
    dataApresentacao: {
      type: GraphQLString,
      resolve: data => moment(data.dataApresentacao).toDate()
    },
    uriOrgaoNumerador: {
      type: GraphQLString,
      resolve: data => data.uriOrgaoNumerador
    },
    uriUltimoRelator: {
      type: GraphQLString,
      resolve: data => data.uriUltimoRelator
    },
    statusProposicao: {
      type: StatusPropositionType,
      resolve: data => data.statusProposicao
    }
  })
})
