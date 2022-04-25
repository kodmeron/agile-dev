import React,{useState} from 'react'
import axios from 'axios'

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
        const SubmitFunction = e => {
            e.preventDefault()
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
        <form onSubmit={SubmitFunction}>
        <input onChange={onAnyChange} name='name' placeholder='Namn...'/>
        <input onChange={onAnyChange} name='age' type="number" placeholder='Ålder...'/>
        <button>Skapa Användare</button>
        </form>
    </div>
  )
}

export default CreateUser