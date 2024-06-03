
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserDetail from './components/UserDetail';

function App() {
 const[userData,setUserData]=useState([]);

 useEffect(()=>{
  apiCall();
 },[])

 const apiCall = async() =>{
  const path=`https://jsonplaceholder.typicode.com/users`;
  try{
    const response = await axios.get(path);
    setUserData(response.data);
  }
  catch(e){
      console.log("API call failed",e);
  }
 }


const router = createBrowserRouter([
  {
    path:"/",
    element: <UserList userData={userData}/>
  },
  {
    path:"user/:id",
    element:<UserDetail/>
  }
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
