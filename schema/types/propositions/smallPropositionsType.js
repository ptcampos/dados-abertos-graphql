const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProposicaoResumida',
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
    }
  })
})
