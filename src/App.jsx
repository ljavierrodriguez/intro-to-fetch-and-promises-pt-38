import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([
    { id: 1, name: 'Hugo' },
    { id: 2, name: 'Paco' },
    { id: 3, name: 'Luis' },
  ])

  useEffect(() => {
    obtenerUsuarios("https://jsonplaceholder.typicode.com/users")
  }, [])

  const obtenerUsuarios = (url, options = {}) => {
    fetch(url, options)
      .then((response) => {
        if (response.status !== 200) {
          console.log(response.status)
          throw new Error("Ha ocurrido un error")
        }

        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        setUsers(responseJson);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const crearNuevoUsuario = (url, options) => {
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        setUsers((users) => {
          return [...users, responseJson]
        })
      })
  }

  const updateUsuario = (url, options) => {
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        
      })
  }

  /* const handleSubmit = () => {
    const usuario = {
      name: 'John Doe',
      username: 'john.doe',
      email: 'john.doe@gmail.com'
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    crearNuevoUsuario("https://jsonplaceholder.typicode.com/users", options);

    //console.log(usuario);
    //console.log(options);
    //console.log(options.body)
  } */

  const handleSubmit = () => {
    const usuario = {
      name: 'John Doe',
      username: 'john.doe',
      email: 'john.doe@gmail.com'
    }

    const options = {
      method: 'PUT',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    updateUsuario("https://jsonplaceholder.typicode.com/users/5", options);

    //console.log(usuario);
    //console.log(options);
    //console.log(options.body)
  }


  return (
    <div>
      <h3>App</h3>

      <ul>
        {
          users.map((user) => {
            return (
              <li key={user.id}>{user.name}</li>
            )
          })
        }
      </ul>

      <button onClick={() => obtenerUsuarios("https://jsonplaceholder.typicode.com/users")}>Buscar Usuarios</button>
      <button onClick={() => handleSubmit()}>Crear Usuario</button>


    </div>
  )
}

export default App