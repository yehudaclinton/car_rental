/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
 
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
    const result = await collection.insertOne({ car: request.body.car })
    return result
  })
}

module.exports = routes
