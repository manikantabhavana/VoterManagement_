import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './assets/Components/Login/Login'
import Dashboard from './assets/Components/MainPage/Dashboard/Dashboard'
import Admin from './assets/Components/Admin/admin'
import Users from './assets/Components/MainPage/Users/Users'
import Booths from './assets/Components/MainPage/Booths/Booths'
import Reports from './assets/Components/MainPage/Reports.jsx/Reports'

import BoothList from './assets/Components/MainPage/Booths/BoothList'
import Page from './assets/Components/MainPage/Page/page'
import DataTable from './assets/Components/data/Data'


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='reports' element={<DataTable/>}/>
        <Route path='admin-access-only' element={<Admin/>}></Route>
        <Route path='dashboard' element={<Dashboard/>}>
        

          <Route path='users' element={<Users/>}/>         
          <Route path='allocated' element={<Booths/>}/> 
          
          
        
          <Route path='allocated/boothlist/:id/:name/:mobile' element={<BoothList/>}/> 

          <Route path='page' element={<Page/>}/>
          </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App;
