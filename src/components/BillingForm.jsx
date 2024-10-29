import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { getDepartments, getCities } from '../services/api'

function BillingForm({formData, setFormData, setIsLoading }) {
  const [departments, setDepartments] = useState([])
  const [cities, setCities] = useState([]);
  const [selectedDept, setSelectedDept] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      setIsLoading(true);
      try {
        const deptos = await getDepartments();
        console.log(deptos)
        setDepartments(deptos);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
      setIsLoading(false);
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    if (selectedDept) {
      setIsLoading(true);
      const fetchCities = async () => {
        try {
          const cities = await getCities(selectedDept);
          setCities(cities);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
        setIsLoading(false);
      };

      fetchCities();
    }
  }, [selectedDept]);

  return (
    <form className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <label htmlFor="FirstName" className="block mb-1">Primer Nombre *</label>
          <input type="text" id="FirstName" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="w-full md:w-1/4">
          <label htmlFor="FirstName1" className="block mb-1">Segundo nombre</label>
          <input type="text" id="FirstName1" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="w-full md:w-1/4">
          <label htmlFor="LastName" className="block mb-1">Primer apellido*</label>
          <input type="text" id="LastName" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="w-full md:w-1/4">
          <label htmlFor="LastName1" className="block mb-1">Segundo apellido</label>
          <input type="text" id="LastName1" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div>
        <label htmlFor="DocumentNumber" className="block mb-1 font-bold">{formData.tipoIdentificacionFormatted} :</label>
        <input type="text" id="DocumentNumber" className="w-full border rounded px-3 py-2" defaultValue={formData.DocumentNumber} disabled />
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
        <label htmlFor="Address" className="block mb-1">Dirección de residencia *</label>
        <input type="text" id="Adress" className="w-full border rounded px-3 py-2" placeholder="Dirección" required />
      </div>

      <div>
        <label htmlFor="StateId" className="block mb-1">Departamento *</label>
        <div className="relative">
          <select id="StateId" className="w-full border rounded px-3 py-2 appearance-none" onChange={(e) => setSelectedDept(e.target.value)} required>
            <option value="">Seleccione una opción</option>
            {departments.map((dept) => (
              <option key={dept.value} value={dept.value}>{dept.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="CityId" className="block mb-1">Ciudad *</label>
        <div className="relative">
          <select id="CityId" className="w-full border rounded px-3 py-2 appearance-none" required>
            <option value="">Seleccione una opción</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div>
        <label htmlFor="Celullar" className="block mb-1">Teléfono Celular *</label>
        <input type="tel" id="Celullar" className="w-full border rounded px-3 py-2" required />
      </div>

      <div>
        <label htmlFor="Email" className="block mb-1">Dirección de correo electrónico *</label>
        <input type="email" id="email" className="w-full border rounded px-3 py-2" required />
      </div>
    </form>
  )
}

export default BillingForm