import React from 'react'

function Placeholder() {
  return (
    <div className="flex justify-center">
      <img
        alt='Imagen de logo de Badelco junto a un texto debajo del logo indicando el sitio web principal de la empresa: Badelco.co'
        src="/badelco.jpg"
        className='max-h-44'
        onClick={() => window.location.href = 'https://badelco.co/'}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default Placeholder