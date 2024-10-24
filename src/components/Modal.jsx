import React from 'react'

function Modal({setisModalVisible, data, formData}) {
  return (
    <div id="medium-modal" tabIndex="-1" className="flex fixed top-0 left-0 right-0 px-4 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-lg max-h-full">

        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow">
          
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h2 className="text-xl font-medium font-semibold text-gray-900">
              Confirma la información
            </h2>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="medium-modal" onClick={() => setisModalVisible(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-2">
          <h3 className="text-lg font-semibold ">Información personal</h3>
            <ul className="max-w-md space-y-0 list-none list-inside">
              <li><span className="font-semibold">Tipo de documento:</span> {formData.tipoIdentificacion} </li>
              <li><span className="font-semibold">Número de identificación:</span> {formData.numDocumento} </li>
            </ul>

            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <h3 className="text-lg font-semibold ">Información del vehículo</h3>
            <ul className="max-w-md space-y-0 list-none list-inside">
              <li><span className="font-semibold">Placa:</span> {data.NumberPlate} </li>
              <li><span className="font-semibold">Marca:</span> {data.BrandName} </li>
              <li><span className="font-semibold">Linea:</span> {data.VehicleLineDescription} </li>
              <li><span className="font-semibold">Año:</span> {data.VehicleYear} </li>
              <li><span className="font-semibold">Tipo de vehículo:</span> {data.VehicleClassMinistryName} </li>
              <li><span className="font-semibold">Servicio:</span> {data.ServiceTypeName} </li>
            </ul>
          </div>

          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
            <button data-modal-hide="medium-modal" type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Continuar</button>
            <button data-modal-hide="medium-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal