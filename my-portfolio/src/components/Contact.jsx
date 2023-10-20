import React from 'react'

const Contact = () => {
  return (
    <div> <div className='flex justify-center items-center  pt-20 pb-20'>
    <a href='https://www.linkedin.com/in/ayanara/'
      target='_blank'
      rel="noreferrer"
      className=' mx-2'
    >
      <box-icon type="logo" name="linkedin" color="white"></box-icon>
    </a>

    <a href='https://github.com/ayanara'
      target='_blank'
      rel="noreferrer"
      className=' mx-2'
    >
      <box-icon type="logo" name="github" color="white"></box-icon>
    </a>

    <a href='https://aya-nathane.medium.com/'
      target='_blank'
      rel="noreferrer"
      className=' mx-2'
    >
      <box-icon type="logo" name="medium" color="white"></box-icon>
    </a>

    <a href='https://www.behance.net/ayanaranathane/'
      target='_blank'
      rel="noreferrer"
      className=' mx-2'
    >
      <box-icon type="logo" name="behance" color="white"></box-icon>
    </a>
  </div></div>
  )
}

export default Contact