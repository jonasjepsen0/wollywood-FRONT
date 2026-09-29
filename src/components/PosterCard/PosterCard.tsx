import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { PosterCardStyled } from './PosterCard.styled'

type PosterCardProps = {
  id: number
  name: string
  image: string
  price: string
}

export const PosterCard = ({ id, name, image, price }: PosterCardProps) => {
  //addToCart destructures af useCart() hooket, henter objekt
  const { addToCart } = useCart()

  return (
    <PosterCardStyled>
      <Link to={`/plakat/${id}`}>
        <img src={image} alt={name} loading="lazy" />
        <h3>{name}</h3>
      </Link>

      <p>Kr. {price}</p>

      <button type="button" onClick={() => addToCart({ id, name, image, price })}>
        Læg i kurv
      </button>
    </PosterCardStyled>
  )
}
