"use client"
import React from 'react'
import { AlertCircle,  } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle size={48} />
                    <h2 className="text-2xl font-bold">Failed to load Page</h2>
                </div>
                <p className="text-gray-600 max-w-md text-center">
                     An unexpected error occurred
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Retry
                </button>
            </div>
  )
}
