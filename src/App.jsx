import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import Home from './assets/Components/Home/Home'
import NavBar from './assets/Components/NavBar/NavBar'
import Destination from './assets/Components/Destination/Destination';
import Crew from './assets/Components/Crew/Crew';
import Technology from './assets/Components/Technology/Technology';
import Carousel from './assets/Components/Carousel/Carousel'


function App() {

  const routeur = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/navbar',
      element: <NavBar></NavBar>
    },
    {
      path: '/destination',
      element: <Destination></Destination>
    },
    {
      path: '/crew',
      element: <Crew></Crew>
    },
    {
      path: '/technology',
      element: <Technology></Technology>
    },
    {
      path: '/carousel',
      element: <Carousel></Carousel>
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={routeur}></RouterProvider>
      </div>
    </>
  )
}

export default App
