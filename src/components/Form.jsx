import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import Loading from './Loading'
import { getDocumentTypes, getQuotation } from '../services/api';

function Form(props) {
  const { setStep, formData, setFormData, quotation, setQuotation } = props;

  const [documentTypes, setDocumentTypes] = useState([]); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const tipoIdentificacionRef = useRef();
  const identificacionRef = useRef();
  const placaRef = useRef();

  const fetchQuotation = async (numPlaca, numDocumento, codTipoDoc, codProducto = 63) => {
    setIsLoading(true)
    try {
      const quotation = await getQuotation(numPlaca, numDocumento, codTipoDoc, codProducto);
      setQuotation(quotation.data);
      setIsModalVisible(true);
    } catch (error) {
      console.error('Error fetching quotation:', error);
    }
    setIsLoading(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numPlaca = placaRef.current.value;
    const numDocumento = identificacionRef.current.value;
    const codTipoDoc = tipoIdentificacionRef.current.value;
    setFormData({ tipoIdentificacion: codTipoDoc, numDocumento });
    fetchQuotation(numPlaca, numDocumento, codTipoDoc);

    tipoIdentificacionRef.current.value = "";
    identificacionRef.current.value = "";
    placaRef.current.value = "";
  };

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      setIsLoading(true)
      try {
        const types = await getDocumentTypes();
        setDocumentTypes(types);
        console.log(types);
      } catch (error) {
        console.error('Error fetching document types:', error);
      }
      setIsLoading(false)
    };

    fetchDocumentTypes();
  }, []);

  return (
    <>
      {isLoading? <Loading /> : null}
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

      {isModalVisible? <Modal 
      setisModalVisible={setIsModalVisible}
      title={"Confirma la información"}>
        {/* Modal body */}
        <div className="p-4 md:p-5 space-y-2">
          <h3 className="text-lg font-semibold ">Información personal</h3>
            <ul className="max-w-md space-y-0 list-none list-inside">
              <li><span className="font-semibold">Tipo de documento:</span> {formData.tipoIdentificacion} </li>
              <li><span className="font-semibold">Número de identificación:</span> {formData.numDocumento} </li>
            </ul>

            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <h3 className="text-lg font-semibold ">Información del vehículo</h3>
            <ul className="max-w-md space-y-0 list-none list-inside">
              <li><span className="font-semibold">Placa:</span> {quotation.NumberPlate} </li>
              <li><span className="font-semibold">Marca:</span> {quotation.BrandName} </li>
              <li><span className="font-semibold">Linea:</span> {quotation.VehicleLineDescription} </li>
              <li><span className="font-semibold">Año:</span> {quotation.VehicleYear} </li>
              <li><span className="font-semibold">Tipo de vehículo:</span> {quotation.VehicleClassMinistryName} </li>
              <li><span className="font-semibold">Servicio:</span> {quotation.ServiceTypeName} </li>
            </ul>
          </div>

          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
            <button data-modal-hide="medium-modal" type="button" onClick={() => setStep(1)} className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Continuar</button>
            <button data-modal-hide="medium-modal" type="button" onClick={() => setIsModalVisible(false)} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Cancelar</button>
          </div>
      </Modal> : null}
    </>
  );
}

export default Form;