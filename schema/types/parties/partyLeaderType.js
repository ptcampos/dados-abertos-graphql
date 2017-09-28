const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'LiderPartido',
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
    uf: {
      type: GraphQLString,
      resolve: data => data.uf
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
    }
  })
})
