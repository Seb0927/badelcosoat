import { Mail, Phone, Facebook, Search, MapPin } from 'lucide-react'

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between align-middle h-10">
          <div className="flex items-center space-x-4">
            <button href="/contact" className="text-gray-800 ">
              <Mail size={18} />
            </button>
            <button href="/call" className="text-gray-800 ">
              <Phone size={18} />
            </button>
            <a href="https://www.facebook.com/Badelco.co/" className="text-gray-800 ">
              <Facebook size={18} />
            </a>
            <MapPin className="sm:text-gray-800" size={18} />
            <p className="hidden sm:block text-sm font-medium">Cali - Colombia</p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium">
              3128433999
            </p>
            <a className="text-gray-800" href="https://badelco.co/">
              <Search size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar