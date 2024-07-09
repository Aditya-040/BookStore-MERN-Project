import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useParams } from 'react-router-dom'


const Showbook = () => {
  const [book,setBooks] = useState([]);
  const [loading,setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  },[]);
  return (<>
    
    <BackButton destination='/' />
    {loading ? <Spinner /> : (
      <div className='container mx-auto py-8'>
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-4 py-2'>
            <h1 className='text-3xl font-bold text-gray-800'>BOOK title:-{book.title}</h1>
            <p className='text-gray-600 text-sm'>AUTHOR:-{book.author}</p>
            <p className='text-gray-600 text-sm'> PUBLISH YEAR:-{book.publishyear}</p>
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default Showbook