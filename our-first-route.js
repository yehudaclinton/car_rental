/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
 
const errorCodes = require('fastify').errorCodes
 
async function routes (fastify, options) {
  const collection = fastify.mongo.db.collection('test_collection')


  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/cars', async (request, reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No documents found')
    }
    return result
  })


  fastify.get('/cars/:car', async (request, reply) => {
    const result = await collection.findOne({ car: request.params.car })
    if (!result) {
      throw new Error('Invalid value')
    }
    return result
  })
  
  
  const carSchema = {
    type: 'object',
    required: ['car'],
    properties: {
      car: { type: 'string' },
    },
  }

  const schema = {
    body: carSchema,
  }

  fastify.post('/cars', { schema }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({ car: request.body.car, status: 'available' })
    return result
  })

  const reserveCarSchema = {
    type: 'object',
    required: ['car', 'status'],
    properties: {
      car: { type: 'string' },
      status: { type: 'string' },
    },
  }

  const rschema = {
    body: reserveCarSchema,
  }

  fastify.post('/reserve', { rschema }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.update({ car: request.body.car }, {
      $set: {
        status: request.body.status
      }
    })
    return result
  })
  
fastify.setErrorHandler(function (error, request, reply) {
  if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
    // Log error
    this.log.error(error)
    // Send error response
    reply.status(500).send({ ok: false })
  }
})
  
  

}

module.exports = routes
