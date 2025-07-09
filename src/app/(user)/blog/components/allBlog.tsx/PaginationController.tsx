'use client'

import Button from '@/components/ui/Button'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PaginationControls({
    currentPage,
    totalPages
}: {
    currentPage: number
    totalPages: number
}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        router.push(`?${params.toString()}`)
    }

    return (
        <div className="flex gap-2 items-center justify-center mt-8">
            <Button
                // variant="outline"
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
                title="Previous"
                className='px-4'
            />
            <Button
                disabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                title="Next"  
                className='px-4'  
           / >
            
        </div>
    )
}