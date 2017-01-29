import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {graphqlExpress} from 'graphql-server-express'
import schema from './graphql'

const PORT = 4200
const app = express()

app.use(cors())

//
// app.use('/', (req, res) => {
//   res.send('Use /graphql')
// })

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.listen(PORT)
console.log(`App listening on ${PORT}`)
