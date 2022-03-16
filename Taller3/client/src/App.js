import React from 'react';
import { useEffect, useState} from 'react';


function App() {
  const [personas, setPersonas] = useState([])

  useEffect(() => {
      const reqOps = {
          method: 'GET',            
          headers: { 'Content-Type': 'application/json' }
      };
      
      fetch(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}`, reqOps)      
      .then(res => res.json())
      .then(data => setPersonas(data));

  }, []);
  
  return (
    <div className="container m-5">
      <h1 className="display-4">Lista de personas</h1>
      <table className="table">
        <thead className="dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>          
          </tr>
        </thead>
        <tbody>
          {
            Object.values(personas).map(val => 
            <tr key={val._id}>
              <td>{val.Nombre}</td>
              <td>{val.Apellidos}</td>
              <td>{val.Edad}</td>              
            </tr>            
            )
          }          
        </tbody>
      </table>     
    </div>    
  );
}

export default App;
