'use client'
import EnquiryAnimation from '@/components/animation/Enquiry'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import axios from 'axios'
import Button from '@/components/ui/Button'

// Define the form data type
type FormData = {
  name: string
  email: string
  phone: string
  location: string
  companyName: string
  service: string
  isDeveloper: boolean
  message: string
  hearAboutUs: string
}

// Define the validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .max(12, 'invalid phone number')
    .min(9, 'invalid phone number')
    .required('phone is required'),
  location: yup.string().required('Location is required'),
  companyName: yup.string().required('Company name is required'),
  service: yup.string().required('Service is required'),
  isDeveloper: yup.bool().required('Please select an option'),
  message: yup.string().required('Message is required'),
  hearAboutUs: yup.string().required('Please select an option')
})

const Enquiry: React.FC = () => {
  const [isSubmiting, setIsSubmiting] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormData> = async data => {
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.location ||
      !data.companyName ||
      !data.service ||
      !data.isDeveloper ||
      !data.message ||
      !data.hearAboutUs
    ) {
      toast.error('Please fill all the fields')
      return
    }
    setIsSubmiting(true)

    try {
      await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/form/contact`,
        data
      )
      setIsSubmiting(false)
      reset()
      toast.success('Form submitted successfully')
    } catch (error) {
      console.log(error)
      setIsSubmiting(false)
      toast.error('something went wrong')
    }
  }

  return (
    <div className='my-24'>
      <h1 className='text-6xl font-bold hidden md:block text-center mb-14 text-black'>
        Get a free <span className='text-OMblue'>quote</span>
      </h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        <div className='flex justify-center items-center'>
          <EnquiryAnimation />
        </div>
        <div className='w-full'>
          <h1 className='text-3xl font-bold block md:hidden '>
            Get a free <span className='text-OMblue'>quote</span>
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 mt-4'
          >
            {/* Name Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>Your Name</h1>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full h-10 border bg-gray-50 border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('name')}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>Your Email</h1>
              <input
                type='email'
                placeholder='Enter your Email'
                className='bg-gray-50 w-full h-10 border border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('email')}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>
            {/* phone Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>Your Phone</h1>
              <input
                type='tel'
                placeholder='Enter your Phone'
                className='bg-gray-50 w-full h-10 border border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('phone')}
              />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone.message}</p>
              )}
            </div>

            {/* Location Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>Are You From?</h1>
              <input
                type='text'
                placeholder='Enter your location'
                className='bg-gray-50 w-full h-10 border border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('location')}
              />
              {errors.location && (
                <p className='text-red-500 text-sm'>
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Company Name Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>Company Name</h1>
              <input
                type='text'
                placeholder='Enter your company name'
                className='bg-gray-50 w-full h-10 border border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('companyName')}
              />
              {errors.companyName && (
                <p className='text-red-500 text-sm'>
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Service Field */}
            <div className='flex flex-col gap-2 border bg-gray-50 border-gray-200 rounded-md p-2'>
              <select
                defaultValue='Select Required Service'
                className='outline-none bg-gray-50 text-gray-700'
                {...register('service')}
              >
                <option disabled>Select Required Service</option>
                <option value='Bulk SMS'>Bulk SMS</option>
                <option value='Bulk Emails'>Bulk Emails</option>
                <option value='Voice SMS'>Voice SMS</option>
                <option value='SMS Hubbing'>SMS Hubbing</option>
                <option value='SMS Firewall'>SMS Firewall</option>
                <option value='RCS Business Messaging'>
                  RCS Business Messaging
                </option>
                <option value='WhatsApp Business Messaging'>
                  WhatsApp Business Messaging
                </option>
                <option value='Number Lookup'>Number Lookup</option>
                <option value='Viber Business Messaging'>
                  Viber Business Messaging
                </option>
                <option value='CPaaS'>CPaaS</option>
                <option value='Verified SMS'>Verified SMS</option>
                <option value='Omnichannel Communication'>
                  Omnichannel Communication
                </option>
                <option value='Email Marketing'>Email Marketing</option>
                <option value='Website Development'>Website Development</option>
                <option value='Software Development'>
                  Software Development
                </option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
              {errors.service && (
                <p className='text-red-500 text-sm'>{errors.service.message}</p>
              )}
            </div>

            {/* Developer Field */}
            <div>
              <h1 className='text-black font-semibold'>Are You a Developer?</h1>
              <div className='flex gap-2'>
                <input
                  type='radio'
                  value='true'
                  {...register('isDeveloper')}
                  style={{ accentColor: '#9b59b6' }}
                  className='text-OMblue h-6 w-6'
                />
                <label htmlFor='radio' className='text-gray-700'>
                  Yes
                </label>
                <input
                  type='radio'
                  value='false'
                  {...register('isDeveloper')}
                  style={{ accentColor: '#9b59b6' }}
                  className='text-OMblue h-6 w-6'
                />
                <label htmlFor='radio' className='text-gray-700'>
                  No
                </label>
              </div>
              {errors.isDeveloper && (
                <p className='text-red-500 text-sm'>
                  {errors.isDeveloper.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-black font-semibold'>
                Your Message/Enquiry/Feedback
              </h1>
              <textarea
                style={{ resize: 'none' }}
                placeholder='Enter your Message'
                className='min-h-32 max-h-32 bg-gray-50 w-full h-10 border border-gray-200 rounded-md p-2 outline-none text-gray-700'
                {...register('message')}
              />
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message.message}</p>
              )}
            </div>

            {/* Hear About Us Field */}
            <div className='flex flex-col gap-2 border border-gray-200 bg-gray-50 rounded-md p-2'>
              <select
                defaultValue='Where did you hear about Us'
                className='outline-none bg-gray-50 text-gray-700'
                {...register('hearAboutUs')}
              >
                <option disabled>Where did you hear about Us</option>
                <option value='facebook'>Facebook</option>
                <option value='instagram'>Instagram</option>
                <option value='linkedin'>LinkedIn</option>
                <option value='youtube'>YouTube</option>
                <option value='google'>Other</option>
              </select>
              {errors.hearAboutUs && (
                <p className='text-red-500 text-sm'>
                  {errors.hearAboutUs.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type='submit'
              title={isSubmiting ? 'SUBMITING>>>' : 'SUBMIT'}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Enquiry
