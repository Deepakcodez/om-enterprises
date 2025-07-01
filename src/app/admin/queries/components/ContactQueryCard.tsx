import React from 'react'
import moment from 'moment'

const ContactQueryCard:React.FC<any> = (props) => {
     console.log("contact", props)
  return (
    <div className= 'relative p-4 border-2 border-blue-950/10 rounded-md '>

        <div className='absolute right-4 top-4'>
            <span className='text-green-700 font-semibold'>{ props.isDeveloper?"Developer":"N/A"}</span>
        </div>
      <h1 className='text-2xl text-blue-950 font-semibold'>{props.companyName}</h1>
      <h1 className=' text-blue-950 font-semibold'>{props.name}</h1>
      <p><span className='font-semibold text-blue-950/40'>Email: </span> {props.email}</p>
      <p><span className='font-semibold text-blue-950/40'>Phone: </span> {props.phone}</p>
      <p> <span className='font-semibold text-blue-950/40'>Hear From: </span>{props.hearAboutUs}</p>
      <p> <span className='font-semibold text-blue-950/40'>Location: </span> {props.location}</p>
      <p className='font-semibold mb-2 text-green-950/80 bg-green-800/20 border border-green-800/10 w-fit  px-2 rounded-md '>{props.service}</p>

      <div className='p-2 bg-gray-200 rounded-lg text-sm h-28 overflow-y-scroll scrollbar-hide'>
      <p>{props.message}</p>
      </div>
      <h1 className='text-right text-sm text-black/50'>{moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a') }</h1>
    </div>
  )
}

export default ContactQueryCard