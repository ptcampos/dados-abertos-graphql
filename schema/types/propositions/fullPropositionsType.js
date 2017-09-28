const moment = require('moment')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const StatusPropositionType = require('./statusPropositionType')

module.exports = new GraphQLObjectType({
  name: 'ProposicaoCompleta',
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
    },
    tipoAutor: {
      type: GraphQLString,
      resolve: data => data.tipoAutor
    },
    idTipoAutor: {
      type: GraphQLInt,
      resolve: data => data.idTipoAutor
    },
    uriAutores: {
      type: GraphQLString,
      resolve: data => data.uriAutores
    },
    descricaoTipo: {
      type: GraphQLString,
      resolve: data => data.descricaoTipo
    },
    ementaDetalhada: {
      type: GraphQLString,
      resolve: data => data.ementaDetalhada
    },
    keywords: {
      type: GraphQLString,
      resolve: data => data.keywords
    },
    uriPropPrincipal: {
      type: GraphQLString,
      resolve: data => data.uriPropPrincipal
    },
    uriPropAnterior: {
      type: GraphQLString,
      resolve: data => data.uriPropAnterior
    },
    uriPropPosterior: {
      type: GraphQLString,
      resolve: data => data.uriPropPosterior
    },
    urlInteiroTeor: {
      type: GraphQLString,
      resolve: data => data.urlInteiroTeor
    },
    urnFinal: {
      type: GraphQLString,
      resolve: data => data.urnFinal
    },
    texto: {
      type: GraphQLString,
      resolve: data => data.texto
    },
    justificativa: {
      type: GraphQLString,
      resolve: data => data.justificativa
    }
  })
})
