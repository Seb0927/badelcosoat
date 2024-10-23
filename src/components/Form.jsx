import React, { useEffect, useState, useRef } from 'react';
import { getDocumentTypes, getQuotation } from '../services/api';

function Form() {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [quotation, setQuotation] = useState(null);

  const tipoIdentificacionRef = useRef();
  const identificacionRef = useRef();
  const placaRef = useRef();

  const fetchQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
    try {
      const quotation = await getQuotation(numPlaca, numDocumento, codTipoDoc, codProducto);
      setQuotation(quotation);
      console.log('Quotation:', quotation);
    } catch (error) {
      console.error('Error fetching quotation:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numPlaca = placaRef.current.value;
    const numDocumento = identificacionRef.current.value;
    const codTipoDoc = tipoIdentificacionRef.current.value;
    fetchQuotation(numPlaca, numDocumento, codTipoDoc);

    tipoIdentificacionRef.current.value = "";
    identificacionRef.current.value = "";
    placaRef.current.value = "";
  };

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const types = await getDocumentTypes();
        setDocumentTypes(types);
        console.log(types);
      } catch (error) {
        console.error('Error fetching document types:', error);
      }
    };

    fetchDocumentTypes();
  }, []);

  return (
    <>
      <h1 className='font-bold text-3xl text-center py-12'>Llena los siguientes datos:</h1>
      <div className="flex justify-center">
        <form className="w-80" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="tipoIdentificacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de documento de identificación:</label>
            <select id="tipoIdentificacion" ref={tipoIdentificacionRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
              <option value="">Seleccione una opción</option>
              {documentTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="identificacion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de identificación:</label>
            <input type="text" id="identificacion" ref={identificacionRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="1234567" required />
          </div>

          <div className="mb-5">
            <label htmlFor="placa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de placa del vehículo:</label>
            <input type="text" id="placa" ref={placaRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ABC123" required />
          </div>

          <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Form;