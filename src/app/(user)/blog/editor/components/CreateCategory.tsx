"use client"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { handleCreateCategory } from '@/services/services'
import React, { useState } from 'react'

export default function CreateCategory() {
    const [categoryName, setCategoryName] = useState<string>("")

  
    return (
        <div className='my-12 flex flex-col gap-2'>
            <h1 className='text-md font-semibold text-black/50'>Create Category</h1>
            <Input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder='Category Name'
                type='text'
                className=' outline-OMblue'
            />
            <Button
                title='Create Category'
                onClick={()=>handleCreateCategory(categoryName)}
            />
        </div>

    )
}
