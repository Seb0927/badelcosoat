import { useEffect } from 'react'

function BillingDetails(props) {
  const { paymentMethod, setPaymentMethod, quotation, setQuotation, formData, setFormData } = props;
  const { BrandName, VehicleLineDescription, NumberPlate, NewTariff } = quotation;
  const { TotalWithDiscountAmount, TotalWithDiscountAmountFormatted, TotalFormatted, ElectricDiscount, ElectricDiscountFormatted, GasDiscount, GasDiscountFormatted, Law2161Discount } = NewTariff;

  const newQuotation = Math.round(TotalWithDiscountAmount * 2.59 * 0.01 * 1.19 + 800);
  const finalPrice = newQuotation + TotalWithDiscountAmount;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
  };

  const mercadoPagoFormatted = formatCurrency(newQuotation);
  const finalPriceFormatted = formatCurrency(finalPrice);

  useEffect(() => {
    setQuotation({ ...quotation, mercadoPago: newQuotation, finalPrice: finalPrice, mercadoPagoFormatted, finalPriceFormatted });
  }, []);

  const handleOrder = () => {
    const formElements = document.querySelectorAll('form input, form select');
    let showAlert = false;

    formElements.forEach(element => {
      if (element.id && element.id !== 'FirstName1' && element.id !== 'LastName1' && !element.value) {
      showAlert = true;
      }
    });

    if (showAlert) {
      alert(`Por favor, rellenar los campos obligatorios restantes.`);
      return;
    }
    const updatedFormData = { ...formData };

    formElements.forEach(element => {
      if (element.id) {
        updatedFormData[element.id] = element.value;
      }
    });

    setFormData(updatedFormData);
    console.log('Form Data:', updatedFormData);
  };

  return (
    <div className="bg-gray-100 p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Tu pedido</h2>
      <table className="w-full mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-2">Producto</th>
            <th className="text-right pb-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">SOAT: {BrandName} {VehicleLineDescription} {NumberPlate}</td>
            <td className="text-right">{TotalFormatted}</td>
          </tr>
          {ElectricDiscount !== 0 && (
            <tr className="border-b text-red-600">
              <td className="py-2">DESCUENTO POR: VEHÍCULO ELECTRICO</td>
              <td className="text-right">{ElectricDiscountFormatted}</td>
            </tr>
          )}
          {GasDiscount !== 0 && (
            <tr className="border-b text-red-600">
              <td className="py-2">DESCUENTO POR: VEHÍCULO CON GAS</td>
              <td className="text-right">{GasDiscountFormatted}</td>
            </tr>
          )}
          {Law2161Discount && Law2161Discount.HasDiscount && (
            <tr className="border-b text-red-600">
              <td className="py-2">DESCUENTO POR LEY 2161</td>
              <td className="text-right">{Law2161Discount.TotalLaw2161DiscountFormatted}</td>
            </tr>
          )}
          <tr className="border-b">
            <td className="py-2 font-bold">Subtotal</td>
            <td className="text-right">{TotalWithDiscountAmountFormatted}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Servicios de pago</td>
            <td className="text-right">{quotation.mercadoPagoFormatted}</td>
          </tr>
          <tr>
            <td className="py-2 font-bold">Total</td>
            <td className="text-right font-bold">{quotation.finalPriceFormatted}</td>
          </tr>
        </tbody>
      </table>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="mercadoPago"
            name="paymentMethod"
            value="Mercado Pago"
            checked={paymentMethod === 'Mercado Pago'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="form-radio"
          />
          <label htmlFor="mercadoPago">Badelco.co aliado de Mercado Pago</label>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra política de privacidad.
      </p>

      <button 
        className="w-full bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 transition duration-300"
        onClick={handleOrder}
      >
        Realizar el pedido
      </button>
    </div>
  )
}

export default BillingDetails