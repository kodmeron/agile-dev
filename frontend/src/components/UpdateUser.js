import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UpdateUser = ({_id}) => {
    const [information, setInformation] = useState({
        name: "",
        age: ""
      });
      const SubmitFunction = (e) => {
        console.log(information)
        axios
          .patch(`http://localhost:3001/controller/${_id}`, information)
          .then((res) => {
            setInformation({
              name: "",
              age:""
            });
            console.log(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      };
      const onAnyChange = (e) => {
        setInformation((data) => ({ ...data, [e.target.name]: e.target.value }));
      };
  return (
    <div>
        <form onSubmit={SubmitFunction}>
        <input onChange={onAnyChange} name="name" placeholder='Namn...'/>
        <input onChange={onAnyChange} name="age" type="number" placeholder='Ålder...'/>
        <button>Uppdatera Utbildning</button>
        </form>
            
    </div>
  )
}

export default UpdateUser