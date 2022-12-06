/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('./our-db-connector'))
fastify.register(require('./routes'))

fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
//start()


fastify.addHook('onSend', async (request, reply, payload) => {
  // log requests
  const collection = fastify.mongo.db.collection('request_collection')

  const result = collection.insertOne({ "unixtime": Date.now(), payload});

  // return payload without modification
  return payload
})