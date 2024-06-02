
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios';

function App() {
 const[userData,setUserData]=useState([]);
 

 useEffect(()=>{
  apiCall();
 },[])

 const apiCall = async() =>{
  const path=`https://jsonplaceholder.typicode.com/users`;
  try{
    const response = await axios.get(path);
    // console.log("response",response.data);
    setUserData(response.data);
  }
  catch(e){
      console.log("api call failed",e);
  }
 }
//  console.log("userData",userData);
  return (
    <>
    <UserList userData={userData}/>
    </>
  )
}

export default App
