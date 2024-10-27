import { useState } from 'react'
import BillingForm from './BillingForm'
import BillingDetails from './BillingDetails'

export default function Billing(props) {
  const { setStep, formData, setFormData, quotation, setQuotation } = props;

  const [paymentMethod, setPaymentMethod] = useState('Mercado Pago');

  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-2xl font-bold mb-6">Detalles de facturación</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <BillingForm formData={formData} setFormData={setFormData}/>
        </div>
        <div className="w-full md:w-1/3">
          <BillingDetails paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} quotation={quotation} setQuotation={setQuotation}/>
        </div>
      </div>
    </div>
  )
}