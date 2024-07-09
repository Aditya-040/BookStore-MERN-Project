import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const Createbook = () => {
const [title,settitle]= useState('');
const [author,setauthor]=useState('');
const [publishyear,setpublishyear]=useState('');
const [loading,setloading]=useState(false);
const navigate=useNavigate();


const handlecreate=()=>{
  const booky={
    title,
    author,
    publishyear,
  };
setloading(true);
axios.post('http://localhost:5555/books', booky)
.then(()=>{
  setloading(false);
  navigate('/');
}).catch((err)=>{
  setloading(false)
  console.log(err);
  alert("something went wrong check console")
})
}

  return (
    <>
    <div>createbook</div>
    <BackButton/>
    {
      loading?<Spinner/>:('')
    }
    <div className="">
      <label htmlFor="title">title</label>
      <input type="text" value={title} onChange={(e)=>{
        settitle(e.target.value);
      }} />
<label htmlFor="author">Author</label>
      <input type="text" value={author} onChange={(e)=>{
        setauthor(e.target.value);
      }} />
<label htmlFor="publishyear">publishyear</label>
      <input type="text" value={publishyear} onChange={(e)=>{
        setpublishyear(e.target.value);
      }} />
    <button onClick={handlecreate}> save book</button>
 


    </div>
    </>
  )
}

export default Createbook