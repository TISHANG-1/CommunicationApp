import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';
import GoogleLoginComponent from './component/GoogleLoginSignUp/GoogleLoginComponent';
import Navbar from './component/Navbar/Navbar';
import { useSelector } from 'react-redux';
import  Home  from './component/Home/Home'; 
import  EHome  from './component/Home/EHome'; 
import Form from './component/Form/Form';
import EForm from './component/Form/eForm';
import ShowMail from './component/ShowMail/ShowMail';


function App() {  
  
  
  const {authData, loading} = useSelector(state=>state.authData) ; 
  const [user , setUser] = useState(false) ;  

  useEffect(()=>{  
      
            setUser(authData) ;
     
  } , [authData]) ;
  console.log(user) ;  
  console.log(authData) ; 
  return (   
    <Router>  
      <Navbar/> 
      <Routes>  
      <Route path = '/auth' Component = {GoogleLoginComponent}/>  
      {!user && <Route path = '/' Component={EHome}/>}
      {user && <Route path = '/' Component = {Home}/> }
      { user && <Route path = '/forms' Component = {Form}/> }
      { user && <Route path = '/eforms' Component = {EForm}/> }
      { user && <Route path = '/show-mails' Component = {ShowMail}/> }
      </Routes>
    </Router>
  );
}

export default App;
