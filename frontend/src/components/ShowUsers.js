import axios from 'axios';
import React,{useState,useEffect} from 'react'
import UpdateUser from './UpdateUser';

const ShowUsers = ({_id,name,age}) => {
    const [update,setUpdate] = useState(false)
    const [id, setId] = useState("");
    const [updateCollapse,setUpdateCollapse] = useState(false)

    const deleteUser = (e) => {
        axios.delete(`http://localhost:3001/controller/${e.target.name}`);
        setUpdate(true)
        window.location.reload();
      }
      const updateUser = (e) => {
        setId(e.target.name);
        setUpdateCollapse(!updateCollapse);
        
      };
      const closedUpdate = () => {
        setId("");
        setUpdateCollapse(!updateCollapse);
      };
  return (
    <div>
        <h3 className='user-profile' >Namn: {name} <br/> Ålder: {age}</h3>
        <button name={_id} className='user-link' onClick={updateUser}>Uppdatera Information</button>
        <button name={_id} className='user-link' onClick={deleteUser}>Ta bort</button>
        {updateCollapse ? 
        (<UpdateUser id={_id} closedUpdate={closedUpdate}/>) : (<></>)}
    </div>
  )
}

export default ShowUsers