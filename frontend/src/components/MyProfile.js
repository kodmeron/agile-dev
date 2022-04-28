import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const MyProfile = () => {
    const { id } = useParams()
    const [user,setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/controller/${id}`)
      .then((res) => setUser(res.data))
      .catch(err => {console.log(err)})
    },[])

    useEffect( () => console.log(user), [user] )
  return (
      <>
      <Navbar/>
    <div style={{margin:'50px 0'}}>
        <div className='profile-image'>
            <h4 className='profile-image-explainer'>IMG</h4>
        </div>
        <div className='profile-page'>
            <div className='about-me'>
        <h1>{user.name}</h1>
        <h1>{user.age} År</h1>
        <label>Kön:</label>
        <h1>{user.gender}</h1>
            </div>
            <label>Om {user.name}:</label>
        <h3>{user.about}</h3>
            <label>Jobb titel:</label>
        <h3>{user.job}</h3>
            <label>Bor i:</label>
        <h3>{user.location}</h3>
            <label>Letar efter:</label>
        <h3>{user.lookingFor}</h3>
        </div>


    </div>
      </>
  )
}

export default MyProfile