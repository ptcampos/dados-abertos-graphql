const moment = require('moment')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const PartyLeaderType = require('./partyLeaderType')

module.exports = new GraphQLObjectType({
  name: 'StatusPartido',
  description: '...',

  fields: () => ({
    data: {
      type: GraphQLString,
      resolve: data => moment(data.data).toDate()
    },
    idLegislatura: {
      type: GraphQLInt,
      resolve: data => data.idLegislatura
    },
    lider: {
      type: PartyLeaderType,
      resolve: data => data.lider
    },
    situacao: {
      type: GraphQLString,
      resolve: data => data.situacao
    },
    totalMembros: {
      type: GraphQLString,
      resolve: data => data.totalMembros
    },
    totalPosse: {
      type: GraphQLString,
      resolve: data => data.totalPosse
    },
    uriMembros: {
      type: GraphQLString,
      resolve: data => data.uriMembros
    }
  })
})
