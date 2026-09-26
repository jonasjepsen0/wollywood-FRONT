import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import type { CartContextProps } from '../contexts/CartContext'

export const useCart = () => {
  return useContext<CartContextProps>(CartContext)
}
