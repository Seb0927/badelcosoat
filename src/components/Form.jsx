import React from 'react'

function Form() {
  return (
    <>
      <h1 className='font-bold text-3xl text-center py-12'>Llena los siguientes datos:</h1>
      <div className="flex justify-center">
        <form className="w-80">

          <div className="mb-5">
            <label htmlFor="tipoIdentificacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de documento de identificación:</label>
            <select id="tipoIdentificacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
              <option value="">Seleccione una opción</option>
              <option value="cc">Cédula de ciudadanía</option>
              <option value="ce">Cédula de extranjería</option>
              <option value="nit">NIT</option>
              <option value="ti">Tarjeta de identidad</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="identificacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de identificación:</label>
            <input type="text" id="identificacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1234567" required />
          </div>

          <div className="mb-5">
            <label htmlFor="placa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de placa del vehículo:</label>
            <input type="text" id="placa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ABC123" required />
          </div>

          <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Form