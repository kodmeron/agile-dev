import React,{useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar';

const CreateUser = () => {
    const [profile,setProfile] = useState({
        name:"",
        age:""
    })
    const onAnyChange = e => {
        setProfile((data) => ({
          ...data,
          [e.target.name]: e.target.value,
        }))};
        const SubmitFunction = () => {
            axios
            .post("http://localhost:3001/controller/", profile)
            .then((res) => {
              setProfile({
                name:"",
                age:""
              });
              console.log(res.data)})
              .catch((err) => {
                  console.log("Error");
                  console.log(err.message);
                }); 
        }
  return (
    <div>
      <Navbar/>
        <form action='/Profile' onSubmit={SubmitFunction}>
      <div className='create-user'>
        <h1>Skapa Användare</h1>
        <input onChange={onAnyChange} name='name' placeholder='Namn...' required/>
        <input onChange={onAnyChange} name='age' type="number" placeholder='Ålder...' required/>
        <input onChange={onAnyChange} name='about' placeholder='Om dig själv...' required/>
        <input onChange={onAnyChange} name='job' placeholder='Jobb...' required/>
        <input onChange={onAnyChange} name='location' placeholder='Plats...' required/>
        <input onChange={onAnyChange} name='gender' placeholder='Kön...' required/>
        <input onChange={onAnyChange} name='lookingFor' placeholder='Vad söker du efter...' required/>
        <button>Skapa</button>
      </div>
        </form>
    </div>
  )
}

export default CreateUser