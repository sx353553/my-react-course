import { useParams } from 'react-router-dom'
import React, { usEffect } from 'react' 
import axios from axios

function Users () {
  const { id } = useParams();

  async function fetchUser() {
     await axios.get(`https://jsonplaceholder.typicode.com/users/${id}` )
  } 
  

  useEffect(() => {

  }, [])

return <h1>{id}</h1>
}

export default Users