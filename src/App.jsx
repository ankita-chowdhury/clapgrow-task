import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserDetail from './components/UserDetail';

function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const path = `https://jsonplaceholder.typicode.com/users`;
    try {
      const response = await axios.get(path);
      setUserData(response.data);
      setError(null);
    } catch (e) {
      console.error("API call failed", e);
      setUserData([]);
      setError("Failed to load user data. Please try again later.");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserList userData={userData} error={error} />
    },
    {
      path: "user/:id",
      element: <UserDetail />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
