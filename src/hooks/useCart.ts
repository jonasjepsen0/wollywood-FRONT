import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import type { CartContextProps } from '../contexts/CartContext'

export const useCart = () => {
  //useContext hook kaldes med CartContext og returnerer dens værdi
  return useContext<CartContextProps>(CartContext)
}
