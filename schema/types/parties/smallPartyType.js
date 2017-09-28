const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'PartidoResumido',
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
    sigla: {
      type: GraphQLString,
      resolve: data => data.sigla
    },
    uri: {
      type: GraphQLString,
      resolve: data => data.uri
    }
  })
})
