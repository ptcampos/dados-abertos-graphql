const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Bloco',
  description: '...',

  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: data => data.id
    },
    idLegislatura: {
      type: GraphQLString,
      resolve: data => data.idLegislatura
    },
    nome: {
      type: GraphQLString,
      resolve: data => data.nome
    },
    uri: {
      type: GraphQLString,
      resolve: data => data.uri
    }
  })
})
