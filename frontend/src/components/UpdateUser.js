import React,{useState} from 'react'
import axios from 'axios'

const UpdateUser = ({id,closedUpdate}) => {
    const [information, setInformation] = useState({
        name: "",
        age: ""
      });
      const SubmitFunction = () => {
        window.location.reload();
        axios
          .patch(`http://localhost:3001/controller/${id}`, information)
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
        <form onSubmit={() => {SubmitFunction();closedUpdate();}}>
          <div className='update-user'>
        <input onChange={onAnyChange} name='name' placeholder='Namn...' required/>
        <input onChange={onAnyChange} name='age' type="number" placeholder='Ålder...' required/>
        <input onChange={onAnyChange} name='about' placeholder='Om dig själv...' required/>
        <input onChange={onAnyChange} name='job' placeholder='Jobb...' required/>
        <input onChange={onAnyChange} name='location' placeholder='Plats...' required/>
        <input onChange={onAnyChange} name='gender' placeholder='Kön...' required/>
        <input onChange={onAnyChange} name='lookingFor' placeholder='Vad söker du efter...' required/>
        <button>Uppdatera</button>
            </div> 
        </form>
            
    </div>
  )
}

export default UpdateUser