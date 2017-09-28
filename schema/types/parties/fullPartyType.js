const moment = require('moment')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const PartyStatusType = require('./partyStatusType')

module.exports = new GraphQLObjectType({
  name: 'PartidoCompleto',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: data => data.id
    },
    nome: {
      type: GraphQLString,
      resolve: data => data.nome
    },
    numeroEleitoral: {
      type: GraphQLInt,
      resolve: data => data.numeroEleitoral
    },
    sigla: {
      type: GraphQLString,
      resolve: data => data.sigla
    },
    status: {
      type: PartyStatusType,
      resolve: data => data.status
    },
    uri: {
      type: GraphQLString,
      resolve: data => data.uri
    },
    urlFacebook: {
      type: GraphQLString,
      resolve: data => data.urlFacebook
    },
    urlLogo: {
      type: GraphQLString,
      resolve: data => data.urlLogo
    },
    urlWebSite: {
      type: GraphQLString,
      resolve: data => data.urlWebSite
    }
  })
})
