import React from 'react'

function Modal({ setisModalVisible, title, children }) {
  return (
    <div id="medium-modal" tabIndex="-1" className="flex fixed top-0 left-0 right-0 px-4 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-lg max-h-full">

        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow">

          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h2 className="text-xl font-medium font-semibold text-gray-900">
              {title}
            </h2>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="medium-modal" onClick={() => setisModalVisible(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal