import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Waris")
  const [form, setForm] = useState({email:"" , phone:""})


  const handleclick = () => {
    console.log("I was Clicked");
  }

  const handlechange = (e) => {
    // setName(e.target.value)
    setForm({...form , [e.target.name]:e.target.value})
  }

    // NEW EVENT
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    console.log(form)
  }

  return (
    <>
       <div className="app">
    <h2>Handeling Events In React</h2>

    <div className="button">
      <button onClick={handleclick}>Click me</button>
    </div>
      <form onSubmit={handleSubmit}>
    <label>Email:</label>
    <input type="text" name="email" value={form.email} onChange={handlechange}/>

    <label>Phone No:</label>
    <input type="number" name="phone" value={form.phone} onChange={handlechange}/>
        <button type="submit">Submit</button>
        </form>
  </div>
    </>
  )
}

export default App
