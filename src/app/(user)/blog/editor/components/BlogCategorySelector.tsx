"use client"
import { getBlogsCategory } from '@/services/services'
import { CategoryT } from '@/types/Types'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

export default function BlogCategorySelector({ category, setCategory }: { category: string, setCategory: React.Dispatch<React.SetStateAction<string>> }) {

    const { data } = useQuery(getBlogsCategory())
    return (
        <div>
            <h1>Categogry</h1>
            <div className='border p-2 rounded-4xl border-OMblue'>
                <select 
                name="category" 
                id="category" className='border-0   w-full focus:outline-0' 
                value={category} 
                onChange={(e) => {setCategory(e.target.value); console.log(e.target.value)}}>
                    {data?.map((category: CategoryT) => (
                        <option key={category._id} value={category._id}>
                            {category?.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
