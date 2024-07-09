import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading,setloading]=useState(false);
  const navigate=useNavigate();
  const { id } = useParams();
  const handledelete=()=>{
  setloading(true);
  axios.delete(`http://localhost:5555/books/${id}`)
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
    
    <div>
    <BackButton/>

    </div>
    <h1>Delete BOok</h1>
    {
      loading?<Spinner/>:('')
    }
  
    <h1>Are you sure you want to delete this book?</h1>
    <button onClick={handledelete}> delete book</button>
    </>
  )

}

export default DeleteBook