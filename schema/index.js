const _ = require('lodash')
const axios = require('axios')
const querystring = require('querystring')

const { ENDPOINT_API } = require('../config/config.json')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const FullPropositionType = require('./types/propositions/fullPropositionsType')
const SmallPropositionType = require('./types/propositions/smallPropositionsType')

const FullPartyType = require('./types/parties/fullPartyType')
const SmallPartyType = require('./types/parties/smallPartyType')

const BlockType = require('./types/blocks/blockType')

const SmallRepresentativeType = require('./types/representatives/smallRepresentativeType')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'root query',
    
    fields: () => ({
      proposicoes: {
        type: new GraphQLList(SmallPropositionType),
        args: {
          id: { type: GraphQLInt },
          siglaUfAutor: { type: GraphQLString },
          siglaTipo: { type: GraphQLString },
          siglaPartidoAutor: { type: GraphQLString },
          numero: { type: GraphQLInt },
          ano: { type: GraphQLInt },
          dataApresentacaoInicio: { type: GraphQLString },
          dataApresentacaoFim: { type: GraphQLString },
          dataInicio: { type: GraphQLString },
          dataFim: { type: GraphQLString },
          idAutor: { type: GraphQLInt },
          autor: { type: GraphQLString },
          idSituacao: { type: GraphQLInt },
          codPartido: { type: GraphQLInt },
          pagina: { type: GraphQLInt },
          itens: { type: GraphQLInt },
          ordem: { type: GraphQLString },
          ordenarPor: { type: GraphQLString }
        },
        resolve: (root, args) => {
          const queryParams = !_.isEmpty(args) ? '?' + querystring.stringify(args) : ''
          const url = `${ENDPOINT_API}/proposicoes${queryParams}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      },
      proposicao: {
        type: FullPropositionType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => axios.get(
          `${ENDPOINT_API}/proposicoes/${args.id}`
        )
        .then(response => response.data)
        .then(data => data.dados)
      },
      partidos: {
        type: new GraphQLList(SmallPartyType),
        args: {
          sigla: { type: GraphQLString },
          dataInicio: { type: GraphQLString },
          dataFim: { type: GraphQLString },
          idLegislatura: { type: GraphQLInt },
          pagina: { type: GraphQLInt },
          itens: { type: GraphQLInt },
          ordem: { type: GraphQLString },
          ordenarPor: { type: GraphQLString }
        },
        resolve: (root, args) => {
          const queryParams = !_.isEmpty(args) ? '?' + querystring.stringify(args) : ''
          const url = `${ENDPOINT_API}/partidos${queryParams}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      },
      partido: {
        type: FullPartyType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => {
          const url = `${ENDPOINT_API}/partidos/${args.id}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      },
      blocos: {
        type: new GraphQLList(BlockType),
        args: {
          id: { type: GraphQLInt },
          idLegislatura: { type: GraphQLInt },
          siglaPartido: { type: GraphQLString },
          pagina: { type: GraphQLInt },
          itens: { type: GraphQLInt },
          ordem: { type: GraphQLString },
          ordenarPor: { type: GraphQLString }
        },
        resolve: (root, args) => {
          const queryParams = !_.isEmpty(args) ? '?' + querystring.stringify(args) : ''
          const url = `${ENDPOINT_API}/blocos${queryParams}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      },
      bloco: {
        type: BlockType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) => {
          const url = `${ENDPOINT_API}/blocos/${args.id}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      },
      deputados: {
        type: new GraphQLList(SmallRepresentativeType),
        args: {
          id: { type: new GraphQLList(GraphQLInt) },
          idLegislatura: { type: new GraphQLList(GraphQLInt) },
          siglaUf: { type: new GraphQLList(GraphQLString) },
          siglaPartido: { type: new GraphQLList(GraphQLString) },
          siglaSexo: { type: GraphQLString },
          pagina: { type: GraphQLInt },
          itens: { type: GraphQLInt },
          ordem: { type: GraphQLString },
          ordenarPor: { type: GraphQLString }
        },
        resolve: (root, args) => {
          const queryParams = !_.isEmpty(args) ? '?' + querystring.stringify(args) : ''
          const url = `${ENDPOINT_API}/deputados${queryParams}`
          return axios.get(url)
            .then(response => response.data)
            .then(data => data.dados)
        }
      }
    })
  })
})
