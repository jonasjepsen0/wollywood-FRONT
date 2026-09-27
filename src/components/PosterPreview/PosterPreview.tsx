import { Link } from 'react-router-dom'
import { PosterPreviewStyled } from './PosterPreview.styled'

type PosterPreviewProps = {
  id: number
  name: string
  image: string
  description: string
  genres: string
}

export const PosterPreview = ({ id, name, image, description, genres }: PosterPreviewProps) => {
  return (
    <PosterPreviewStyled>
      <img src={image} alt={name} loading="lazy" />

      <div className="tekst">
        <h2>{name}</h2>

        <div dangerouslySetInnerHTML={{ __html: description }} />

        <p>Genre: {genres}</p>

        <Link to={`/plakat/${id}`}>Læs mere</Link>
      </div>
    </PosterPreviewStyled>
  )
}
