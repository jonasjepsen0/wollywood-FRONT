import trashIcon from '../assets/svg/icon_trash.svg'
import { useCart } from '../hooks/useCart'
import { KurvStyled } from './Kurv.styled'

export const Kurv = () => {
  const { items, removeFromCart } = useCart()

  return (
    <KurvStyled>
      <h1>Kurv</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="tekst">
              <h2>{item.name}</h2>
              <p>Kr. {item.price}</p>
            </div>

            <button type="button" onClick={() => removeFromCart(item.id)}>
              <img src={trashIcon} alt="Fjern fra kurv" />
            </button>
          </li>
        ))}
      </ul>
    </KurvStyled>
  )
}
