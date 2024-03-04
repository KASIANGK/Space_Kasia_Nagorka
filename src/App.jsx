import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import Home from './assets/Components/Home/Home'
import NavBar from './assets/Components/NavBar/NavBar'
// import Destination from './assets/Components/Destination/Destination';
import DestinationCards from './assets/Components/DestinationCards/DestinationCards'
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
      path: '/destinationcards/:id',
      element: <DestinationCards></DestinationCards>
    },
    {
      path: '/crew',
      element: <Crew></Crew> 
    },
    {
      path: '/technology/:id',
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

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './assets/Components/Home/Home';
// import NavBar from './assets/Components/NavBar/NavBar';
// import Destination from './assets/Components/Destination/Destination';
// import DestinationCards from './assets/Components/DestinationCards/DestinationCards';
// import Crew from './assets/Components/Crew/Crew';
// import Technology from './assets/Components/Technology/Technology';
// import Carousel from './assets/Components/Carousel/Carousel';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/navbar" element={<NavBar />} />
//           <Route path="/destination" element={<Destination />} />
//             <Route path="/destinationcards/:id" element={<DestinationCards/>} />
//           <Route path="/crew" element={<Crew />} />
//           <Route path="/technology" element={<Technology />} />
//           <Route path="/carousel" element={<Carousel />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App
