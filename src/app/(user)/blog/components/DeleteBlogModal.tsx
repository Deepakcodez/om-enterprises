import React from 'react'


type DeleteBlogModalProps = {
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
    delelteBlog: () => void
}
const DeleteBlogModal:React.FC<DeleteBlogModalProps> = ({setShowDeleteModal, delelteBlog}) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
    <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Delete Blog
      </h2>
      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this blog? This action cannot be
        undone.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={delelteBlog}
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteBlogModal
