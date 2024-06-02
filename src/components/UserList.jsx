import React,{ useState } from 'react'
import SearchBox from './SearchBox'


const UserList = ({ userData }) => {
  const[searchData,setSearchData]=useState("");
  return (
    <div className='userListStyle'>
      <h2>User List</h2>
      
        <SearchBox setSearchData={setSearchData}/>
      
      <ul>
      <li className='userListHeading'>
                <span>Name</span>
                <span>Email</span>
              </li>
        {userData.filter((item)=>searchData===""?item:((item.name.toLowerCase().includes(searchData.toLowerCase())?item:"") || (item.email.toLowerCase().includes(searchData.toLowerCase())?item:""))).map((item, index) => {
          return (
            
              <li className='userListItem'>
                <span>{item.name}</span>
                <span>{item.email}</span>
              </li>
            
          )
        })}
      </ul>
    </div>
  )
}

export default UserList