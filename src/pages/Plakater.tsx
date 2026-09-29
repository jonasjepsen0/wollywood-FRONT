import { useParams } from 'react-router-dom'
import { GenreFilter } from '../components/GenreFilter/GenreFilter'
import { PosterCard } from '../components/PosterCard/PosterCard'
import { API_URL } from '../data/api'
import { useFetch } from '../hooks/useFetch'
import type { Genre, Poster } from '../types/Api'
import { PlakaterStyled } from './Plakater.styled'

export const Plakater = () => {
  const { genreId } = useParams()

  const { data: posters } = useFetch<Poster[]>(`${API_URL}/api/posters`)
  const { data: genres } = useFetch<Genre[]>(`${API_URL}/api/genres`)

  if (!posters || !genres) {
    return null
  }

  const genre = genres.find((item) => item.id === Number(genreId))

  const valgtePlakater = genre
    // .filter() beholder plakater hvor .some() finder en genre med det valgte id
    ? posters.filter((poster) => poster.genres.some((item) => item.genre.id === genre.id))
    : posters
 
  return (
    <PlakaterStyled>
      <h1>Plakater</h1>

      <div className="indhold">
        <GenreFilter />

        <section>
          <h2>{genre ? genre.title : 'Alle plakater'} - {valgtePlakater.length} plakater</h2>

          <div className="gitter">
            {/*.map() laver PosterCard ud af hver plakat i listen*/}
            {valgtePlakater.map((poster) => (
              <PosterCard
                key={poster.id}
                id={poster.id}
                name={poster.name}
                image={poster.image}
                price={poster.price}
              />
            ))}
          </div>
        </section>
      </div>
    </PlakaterStyled>
  )
}
