function Page({ data }) {
console.log("hello? "+JSON.stringify(data[1].car));
let name = 'yehuda';

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

const form = (
  
  <div id='root'>
    <h1>Welcome</h1>
    <p>I am a paragraph.</p>

    <form onSubmit={handleSubmit}>
      <label>Enter your name:
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

