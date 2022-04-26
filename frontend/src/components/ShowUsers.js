import axios from 'axios';
import React,{useState} from 'react'
import UpdateUser from './UpdateUser';

const ShowUsers = ({_id,name,age}) => {
    const [id, setId] = useState("");
    const [updateCollapse,setUpdateCollapse] = useState(false)

    const deleteUser = (e) => {
        axios.delete(`http://localhost:3001/controller/${e.target.name}`);
        window.location.reload();
      }
      const updateUser = (e) => {
        setId(e.target.name);
        console.log(id)
        setUpdateCollapse(!updateCollapse);
        
      };
      const closedUpdate = () => {
        setId("");
        setUpdateCollapse(!updateCollapse);
      };
  return (
    <div>
        <h3 className='user-profile' >Namn: {name} <br/> Ålder: {age}</h3>
        <button name={_id}  onClick={updateUser}>Uppdatera Information</button>
        <button name={_id}  onClick={deleteUser}>Ta bort</button>
        {updateCollapse ? 
        (<UpdateUser id={_id} closedUpdate={closedUpdate}/>) : (<></>)}
    </div>
  )
}

export default ShowUsers