import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}  />
      <Route path='/createUser' element={<CreateUser/>}  />
      <Route path='/updateUser' element={<UpdateUser/>}  />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


