import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const UserDetail = () => {
    const {id} = useParams();
    const[user,setUser]=useState({});
    const[loader,setLoader]=useState(false);
    useEffect(()=>{
        fetchUser();

    },[id])

    const fetchUser = async() =>{
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log("user detail",response.data);
            setUser(response.data);
            setLoader(true);
        }
        catch(e){
            setLoader(false);
        }
    }
  
    return (
    <div className="outerContainer">
        <h2>User Details</h2>
        {loader?(<div className='userDetailsDiv'>
        <p><span className='userDetailAttr'>Name</span>: {user.name}</p>
        <hr />
        <p><span className='userDetailAttr'>Email</span>: {user.email}</p>
        <hr />
        <p><span className='userDetailAttr'>Phone</span>: {user.phone}</p>
        <hr />
        <div className='adressContainer'><span className='userDetailAttr'>Address</span>:
            
           <div className='adressDetailDiv'>
           <p><span className='adressAttr'>Street</span>: {user.address?.street}</p>
            <p><span className='adressAttr'>Apartment</span>: {user.address?.suite}</p>
            <p><span className='adressAttr'>City</span>: {user.address?.city}</p>
            <p><span className='adressAttr'>Zip-Code</span>: {user.address?.zipcode}</p>
           </div>
           <hr />
            </div>
    </div>):(<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
        <CircularProgress className='spinnerDiv'/>
      </Box>)}
    </div>
  )
}

export default UserDetail