import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogRedirecter = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
      navigate('/blogs/all')
    })
  return (
    <div>Redirecting...</div>
  )
}

export default BlogRedirecter