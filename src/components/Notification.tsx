import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <Link
      href="/menu"
    >
      <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>Livraison gratuite pour toute commande de plus de 50€. Commandez maintenant!
      </div>
    </Link>
  )
}

export default Notification