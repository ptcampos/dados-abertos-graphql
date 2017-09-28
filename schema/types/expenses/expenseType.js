const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'DespesaDeputado',
  description: '...',

  fields: () => ({
    ano: {
      type: GraphQLString,
      resolve: data => data.ano
    },
    cnpjCpfFornecedor: {
      type: GraphQLString,
      resolve: data => data.cnpjCpfFornecedor
    },
    dataDocumento: {
      type: GraphQLString,
      resolve: data => data.dataDocumento
    },
    idDocumento: {
      type: GraphQLString,
      resolve: data => data.idDocumento
    },
    idLote: {
      type: GraphQLString,
      resolve: data => data.idLote
    },
    idTipoDocumento: {
      type: GraphQLString,
      resolve: data => data.idTipoDocumento
    },
    mes: {
      type: GraphQLString,
      resolve: data => data.mes
    },
    nomeFornecedor: {
      type: GraphQLString,
      resolve: data => data.nomeFornecedor
    },
    numDocumento: {
      type: GraphQLString,
      resolve: data => data.numDocumento
    },
    numRessarcimento: {
      type: GraphQLString,
      resolve: data => data.numRessarcimento
    },
    parcela: {
      type: GraphQLString,
      resolve: data => data.parcela
    },
    tipoDespesa: {
      type: GraphQLString,
      resolve: data => data.tipoDespesa
    },
    tipoDocumento: {
      type: GraphQLString,
      resolve: data => data.tipoDocumento
    },
    urlDocumento: {
      type: GraphQLString,
      resolve: data => data.urlDocumento
    },
    valorDocumento: {
      type: GraphQLString,
      resolve: data => data.valorDocumento
    },
    valorGlosa: {
      type: GraphQLString,
      resolve: data => data.valorGlosa
    },
    valorLiquido: {
      type: GraphQLString,
      resolve: data => data.valorLiquido
    }
  })
})
