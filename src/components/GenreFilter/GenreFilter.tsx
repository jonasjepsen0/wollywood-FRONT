import { NavLink } from 'react-router-dom'
import { API_URL } from '../../data/api'
import { useFetch } from '../../hooks/useFetch'
import type { Genre } from '../../types/Api'
import { GenreFilterStyled } from './GenreFilter.styled'

export const GenreFilter = () => {
  //useFetch hook kaldes med genre endpoint
  const { data: genres } = useFetch<Genre[]>(`${API_URL}/api/genres`)

  return (
    <GenreFilterStyled>
      <h2>Filtre</h2>
      <h3>Genre</h3>

      <ul>
        {genres && genres.map((genre) => (
          <li key={genre.id}>
            {/*template literal*/}
            <NavLink to={`/plakater/${genre.id}`}>{genre.title}</NavLink>
          </li>
        ))}
      </ul>
    </GenreFilterStyled>
  )
}

