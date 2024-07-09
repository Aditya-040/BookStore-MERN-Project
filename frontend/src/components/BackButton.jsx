import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination='/'}) => {

  return (
    <Link to={destination} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      <BsArrowLeft className='inline-block' />
      Back
    </Link>
  )
}

BackButton.propTypes = {
  destination: PropTypes.string
}

export default BackButton