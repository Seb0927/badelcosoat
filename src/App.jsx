import { useState } from 'react'
import Navbar from './components/Navbar'
import Placeholder from './components/Placeholder'
import Form from './components/Form'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [quotation, setQuotation] = useState(null);

  return (
    <>
      <Navbar />
      {step === 0 ?
        <>
          <Placeholder />
          <Form setStep={setStep} formData={formData} setFormData={setFormData} quotation={quotation} setQuotation={setQuotation} />
        </> : null}
    </>
  )
}

export default App
