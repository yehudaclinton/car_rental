const fastify = require('fastify')({
  logger: true
})

function Page({ data }) {
  let name = 'yehuda';

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${name}`)
    const opts = {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      }
    }
    fastify.post('http://localhost:3000/cars', opts, (request, reply) => {
      request.send({ hello: 'world' })
    })
  }

  const form = (

    <div id='root'>
      <h1>Welcome</h1>
      <p>I am a paragraph.</p>

      <>
        <h2>What is in the garage?</h2>
        <ul>
          {
            data.map(function (cars) {
              return <li> {cars.car} as something</li>
            })
          }
        </ul>
      </>

      <p>add new car form</p>
      <form onSubmit={handleSubmit}>
        <label>Enter name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

    </div>

  );

  return (form);
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/cars`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page

