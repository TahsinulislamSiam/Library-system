import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = (props) => {
   const {blog,handleBookMark,handleMarkAsRead}=props;
  //  console.log(blog)
 
   
    return (
        <div className='m-2'>
            <h1>{blog.id}</h1>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img className='w-16' src={blog.author_img} alt="" />
  
      <button onClick ={()=>handleBookMark(blog)}> <FaBookmark size={25}/></button>
        
    </div>
    <h2 className="card-title">{blog.title}</h2>

    <div className="flex">
    {
        blog.hashtag.map((has)=><p>{has}</p>)
    }
    </div>
   
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;