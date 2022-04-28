import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ShowUsers from './ShowUsers';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Profiles = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/controller/")
      .then((res) => setUsers(res.data))
      .catch(err => {console.log(err)})
    },[])
  
  return (
    <div>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>Våra Användare </h1>
        <div className='user-content'>
            {users.map(x => {return(
              <div key={x._id}><ShowUsers {...x} />
            </div>)})}
              <Link className='user-link' to="/createUser">Skapa användare</Link>
            </div>
    </div>
  )
}

export default Profiles