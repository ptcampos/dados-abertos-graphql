const { ENDPOINT_API } = require('../../../config/config.json')
const axios = require('axios')
const moment = require('moment')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'StatusProposicao',
  description: '...',

  fields: () => ({
    dataHora: {
      type: GraphQLString,
      resolve: data => moment(data.dataHora).toDate()
    },
    sequencia: {
      type: GraphQLInt,
      resolve: data => data.sequencia
    },
    siglaOrgao: {
      type: GraphQLString,
      resolve: data => data.siglaOrgao
    },
    uriOrgao: {
      type: GraphQLString,
      resolve: data => data.uriOrgao
    },
    regime: {
      type: GraphQLString,
      resolve: data => data.regime
    },
    descricaoTramitacao: {
      type: GraphQLString,
      resolve: data => data.descricaoTramitacao
    },
    idTipoTramitacao: {
      type: GraphQLString,
      resolve: data => data.idTipoTramitacao
    },
    descricaoSituacao: {
      type: GraphQLString,
      resolve: data => data.descricaoSituacao
    },
    idSituacao: {
      type: GraphQLInt,
      resolve: data => data.idSituacao
    },
    situacaoCompleta: {
      type: GraphQLString,
      resolve: data => {
        const idSituacao = data.idSituacao
        return axios.get(`${ENDPOINT_API}/referencias/situacoesProposicao`)
          .then(response => response.data.dados)
          .then(dados => dados.find(d => parseInt(d.id, 10) === parseInt(idSituacao, 10)))
          .then(situacaoCompleta => situacaoCompleta ? situacaoCompleta.nome : 'N/A')
      }
    },
    despacho: {
      type: GraphQLString,
      resolve: data => data.despacho
    },
    url: {
      type: GraphQLString,
      resolve: data => data.url
    },
    codOrgao: {
      type: GraphQLInt,
      resolve: data => data.codOrgao
    }
  })
})
