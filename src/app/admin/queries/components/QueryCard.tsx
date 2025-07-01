import React from 'react'
import moment from 'moment'
const QueryCard:React.FC<any> = (props) => {
     console.log(props)
  return (
    <div className=' p-4 border-2 border-blue-950/10 rounded-md '>
      <h1 className='float-right text-black/50'>{moment(props.createdAt).format('MMMM Do YYYY, h:mm:ss a') }</h1>
      <h1 className='text-2xl text-blue-950 font-semibold'>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p className='font-semibold mb-2 text-green-950/80 bg-green-800/20 border border-green-800/10 w-fit  px-2 rounded-md '>{props.subject}</p>
      <div className='p-2 bg-gray-200 rounded-lg text-sm h-28 overflow-y-scroll scrollbar-hide'>
      <p>{props.message}</p>
      </div>
    </div>
  )
}

export default QueryCard