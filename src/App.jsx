import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Blogs from './component/blogs/blogs'

function App() {
  const [bookmarked,setBookmarked]  =useState([]);
  const [readingCount,setReadingCount]=useState(0)

    const handleBookMark =(blog)=>{
     setBookmarked([...bookmarked,blog])
    }


    const handleMarkAsRead=(time,id)=>{
      setReadingCount(readingCount+time)
      handleRemoveFromBookmark(id)
    }


    const handleRemoveFromBookmark=(id)=>{
      const remainingBookMark=bookmarked.filter((mark)=>mark.id!==id);
      setBookmarked(remainingBookMark)
    }


  return (
    <>
      <Navbar></Navbar>
      

    <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        

        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>

      </div>
      <div className="right-container w-[30%]">
      <h1>Reading time: {readingCount} </h1>
      <h1>Bookmark count: {bookmarked.length}</h1>

    {
      bookmarked.map((marked) => <p key={marked.id} className='bg-red-600 p-2 shadow m-2 text-white'>{marked.title}</p>)
    }

      </div>
    </div>


    </>
  )
}

export default App
