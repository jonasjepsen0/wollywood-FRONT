import { useParams } from 'react-router-dom'
import { GenreFilter } from '../components/GenreFilter/GenreFilter'
import { API_URL } from '../data/api'
import { useFetch } from '../hooks/useFetch'
import type { Poster } from '../types/Api'
import { PlakatStyled } from './Plakat.styled'

export const Plakat = () => {
  const { posterId } = useParams()

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

            <button type="button">Læg i kurv</button>
          </div>

          <img src={poster.image} alt={poster.name} />
        </section>
      </div>
    </PlakatStyled>
  )
}
