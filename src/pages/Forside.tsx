import curtain from '../assets/images/curtain.jpg'
import { PosterPreview } from '../components/PosterPreview/PosterPreview'
import { API_URL } from '../data/api'
import { useFetch } from '../hooks/useFetch'
import type { Poster } from '../types/Api'
import { ForsideStyled } from './Forside.styled'

export const Forside = () => {
  const { data: posters } = useFetch<Poster[]>(`${API_URL}/api/posters`)

  if (!posters) {
    return null
  }

  return (
    <ForsideStyled>
      <img className="forhaeng" src={curtain} alt="" />

      <h1>Fire tilfældige</h1>

      <div className="gitter">
        {posters.slice(0, 4).map((poster) => (
          <PosterPreview
            key={poster.id}
            id={poster.id}
            name={poster.name}
            image={poster.image}
            description={poster.description}
            genres={poster.genres.map((item) => item.genre.title).join(', ')}
          />
        ))}
      </div>
    </ForsideStyled>
  )
}
