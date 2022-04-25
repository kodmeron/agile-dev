import React,{ useEffect,useState }  from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Landing from './routes/Landing'; 
import axios from 'axios'
import UpdateUser from './components/UpdateUser';

function App() {
  const [users,setUsers] = useState([])
  const [update,setUpdate] = useState(false)
  const [id, setId] = useState("");
  const [updateCollapse,setUpdateCollapse] = useState(false)

  useEffect(() => {
      axios.get("http://localhost:3001/controller/")
    .then((res) => setUsers(res.data))
    .catch(err => {console.log(err)})
  },[update])

  const deleteUser = (e) => {
    axios.delete(`http://localhost:3001/controller/${e.target.name}`);
    setUsers((data) => {
      return data.filter((user) => user._id !== e.target.name);
    });
    setUpdate(true)
  }
  const updateUser = (e) => {
    setId(e.target.name);
    setUpdateCollapse(!updateCollapse);
  };
  const closedUpdate = () => {
    setId("");
    setUpdateCollapse(false);
  };

  return (
  <>
      <Navbar/>
      <h1 style={{textAlign:'center'}}>Våra Användare </h1>
      <div className='user-content'>
      {users.map(x => {return(
        <div key={x._id}>
      <h3 className='user-profile' >Namn: {x.name} <br/> Ålder: {x.age}</h3>
      <button name={x._id} className='user-link' onClick={updateUser}>Uppdatera Information</button>
      <button name={x._id} className='user-link' onClick={deleteUser}>Ta bort</button>
      {updateCollapse ? 
        (<UpdateUser _id={x._id} closedUpdate={closedUpdate} />) : (<></>)}
        </div>)})}
      </div>
      <Landing/>
  </>
  );
}

export default App;
