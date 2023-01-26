import React, { useState } from "react";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {
  const [name, setName] = useState("")
  const [surname, setLastName] = useState("")
  const [idade, setAge] = useState(0)
  
  const handleNameChange = (event: InputChangeEvent) => {
    setName(event.target.value)
  }
  const handleSurNameChange = (event: InputChangeEvent) => {
    setLastName(event.target.value)
  }
  const handleAgeChange = (event: InputChangeEvent) => {
    setAge( Number(event.target.value) );
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleNameChange}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={surname} onChange={handleSurNameChange}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleAgeChange}/>
      </div>

      <hr/>

      Olá {`${name} ${surname}`}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;