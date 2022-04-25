import React,{ useEffect,useState }  from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Landing from './routes/Landing'; 
import axios from 'axios'

import ShowUsers from './components/ShowUsers';

function App() {
  const [users,setUsers] = useState([])
  useEffect(() => {
      axios.get("http://localhost:3001/controller/")
    .then((res) => setUsers(res.data))
    .catch(err => {console.log(err)})
  },[])



  return (
  <>
      <Navbar/>
      <h1 style={{textAlign:'center'}}>Våra Användare </h1>
      <div className='user-content'>
      {users.map(x => {return(
        <div key={x._id}>
          <ShowUsers {...x} />
        </div>)})}
      </div>
      <Landing/>
  </>
  );
}

export default App;
