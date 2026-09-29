import { useParams } from 'react-router-dom'
import { GenreFilter } from '../components/GenreFilter/GenreFilter'
import { API_URL } from '../data/api'
import { useCart } from '../hooks/useCart'
import { useFetch } from '../hooks/useFetch'
import type { Poster } from '../types/Api'
import { PlakatStyled } from './Plakat.styled'

export const Plakat = () => {
  //posterId destructures ud af useParams() hooket
  const { posterId } = useParams()
  const { addToCart } = useCart()
  
  //useFetch kaldes med endpointet hvor posterId sættes ind i URLen med en template literal
  const { data: poster } = useFetch<Poster>(`${API_URL}/api/posters/${posterId}`)

  if (!poster) {
    return null
  }

  return (
    <PlakatStyled>
      <h1>Plakater</h1>

      <div className="indhold">
        <GenreFilter />

        <section>
          <div className="tekst">
            <h2>{poster.name}</h2>

            <div dangerouslySetInnerHTML={{ __html: poster.description }} />

            <p>Størrelse: {poster.width} x {poster.height} cm</p>
            <p>Varenummer (SKU): {poster.id}</p>
            <p className="pris">Pris: {poster.price} DKK</p>

            <button
              type="button"
              onClick={() => addToCart({
                id: poster.id,
                name: poster.name,
                image: poster.image,
                price: poster.price
              })}
            >
              Læg i kurv
            </button>
          </div>

          <img src={poster.image} alt={poster.name} />
        </section>
      </div>
    </PlakatStyled>
  )
}
