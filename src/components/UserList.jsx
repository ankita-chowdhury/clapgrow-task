import React from 'react'

const UserList = ({ userData }) => {
  console.log("userData-->check", userData);
  return (
    <div className='userListStyle'>
      <h2>User List</h2>
      <ul>
      <li className='userListHeading'>
                <span>Name</span>
                <span>Email</span>
              </li>
        {userData.map((item, index) => {
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