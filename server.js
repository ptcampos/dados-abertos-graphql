const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const app = express()

app.use(cors())

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const port = process.env.PORT || 4000
app.listen(port)
console.log('Listening on port...' + port)
