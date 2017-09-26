const axios = require('axios')

const { ENDPOINT_API } = require('../config/config.json')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const PropositionsType = require('./types/propositionsType')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    
    fields: () => ({
      proposicao: {
        type: PropositionsType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios.get(
          `${ENDPOINT_API}/proposicoes/${args.id}`
        )
        .then(response => response.data)
        .then(data => data.dados)
      }
    })
  })
})
