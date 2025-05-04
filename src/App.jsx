import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Blogs from './component/blogs/blogs'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      

    <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        

        <Blogs></Blogs>

      </div>
      <div className="right-container w-[30%]">
      <h1>Reading time: 0</h1>
      <h1>Bookmark count: 0</h1>
      </div>
    </div>


    </>
  )
}

export default App
