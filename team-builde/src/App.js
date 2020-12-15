
import './App.css';
import React,  { useState } from'react'
import Form from './Components/Form'
import FormCard from './Components/FormCard'
const initialForm={
  name:'',
  email:'',
  role:''
}

function App() {
  const [workerList] = useState([])

  const [formStat, setFormStat] = useState(initialForm)

  const updateForm= evt =>{
    setFormStat({
      ...formStat, [evt.target.name]: evt.target.value
    })
  }

  const submitForm = evt =>{
    workerList.push(formStat)
    setFormStat({
      name:'',
      email:'',
      role:''
    })
    evt.preventDefault() 
  }
  console.log(workerList)
  return (
    <div className="App">
      <header>
       <h1>Co Worker List</h1>
        </header>
      <div>
        <Form
        update={updateForm}
        values={formStat}
        submit={submitForm}
        />
      </div>
      <h2>Team List</h2>
      <div className='card-wrap'>
        {workerList.map(a => {
          return(
            <FormCard data={a}/>
          )
        })}

      </div>
    </div>
  );
}

export default App;
