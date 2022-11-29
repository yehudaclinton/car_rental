//import React, {useState, useEffect} from "react"

function Page({ data }) {
  console.log("hello? "+JSON.stringify(data[1].car));
  // Render data...
  return ("hello "+data[1].car);
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

