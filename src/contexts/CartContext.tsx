import { createContext, useState } from 'react'

export type CartItem = {
  id: number
  name: string
  image: string
  price: string
}

export type CartContextProps = {
  items: CartItem[],
  addToCart: (poster: CartItem) => void,
  removeFromCart: (id: number) => void
}

export type ProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {}
})

export const CartContextProvider = ({ children }: ProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (poster: CartItem) => {
    const found = items.find((item) => item.id === poster.id)

    if (found) {
      return
    }

    setItems([...items, poster])
  }

  const removeFromCart = (id: number) => {
    //.filter returnerer et nyt array med alle varer hvor item.id ikke er lige med id
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
