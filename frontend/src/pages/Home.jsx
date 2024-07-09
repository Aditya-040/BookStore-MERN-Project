import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const Home = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <Link to='/create'>createbook</Link>
    <div className="container mx-auto py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Title</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Author</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Publish Year</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {book.map((book) => (
              <tr key={book._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{book.title}</td>
                <td className="py-2 px-4 border-b border-gray-200">{book.author}</td>
                <td className="py-2 px-4 border-b border-gray-200">{book.publishyear}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <Link to={`/show/${book._id}`} className="text-blue-500 hover:text-blue-700"><BsInfoCircle /></Link>
                    <Link to={`/update/${book._id}`} className="text-green-500 hover:text-green-700"><AiOutlineEdit /></Link>
                    <Link to={`/delete/${book._id}`} className="text-red-500 hover:text-red-700"><MdOutlineDelete /></Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>);
};

export default Home;