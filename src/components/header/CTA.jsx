import React from 'react'
import document from '../../assets/RESUME (Software Engineer).pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={document} download className='btn'>Download RESUME/CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA