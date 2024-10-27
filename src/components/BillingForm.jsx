import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function BillingForm() {
  const [department, setDepartment] = useState('')

  return (
    <form className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="nombre" className="block mb-1">Nombre *</label>
          <input type="text" id="nombre" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="apellidos" className="block mb-1">Apellidos *</label>
          <input type="text" id="apellidos" className="w-full border rounded px-3 py-2" required />
        </div>
      </div>

      <div>
        <label htmlFor="empresa" className="block mb-1">Nombre de la empresa (opcional)</label>
        <input type="text" id="empresa" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label htmlFor="pais" className="block mb-1">País / Región *</label>
        <div className="relative">
          <select
            id="pais"
            className="w-full border rounded px-3 py-2 appearance-none bg-gray-200"
            required
            disabled
          >
            <option value="Colombia">Colombia</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="direccion" className="block mb-1">Dirección de la calle *</label>
        <input type="text" id="direccion" className="w-full border rounded px-3 py-2" placeholder="Nombre de la calle y número de la casa" required />
      </div>

      <div>
        <input type="text" className="w-full border rounded px-3 py-2" placeholder="Apartamento, habitación, etc. (opcional)" />
      </div>

      <div>
        <label htmlFor="departamento" className="block mb-1">Departamento *</label>
        <div className="relative">
          <select
            id="departamento"
            className="w-full border rounded px-3 py-2 appearance-none"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Elige una opción...</option>
            <option value="Antioquia">Antioquia</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Valle del Cauca">Valle del Cauca</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="codigoPostal" className="block mb-1">Código postal / ZIP (opcional)</label>
        <input type="text" id="codigoPostal" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label htmlFor="telefono" className="block mb-1">Teléfono *</label>
        <input type="tel" id="telefono" className="w-full border rounded px-3 py-2" required />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">Dirección de correo electrónico *</label>
        <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Información adicional</h2>
        <label htmlFor="notas" className="block mb-1">Notas del pedido (opcional)</label>
        <textarea id="notas" className="w-full border rounded px-3 py-2 h-32" placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega."></textarea>
      </div>
    </form>
  )
}

export default BillingForm