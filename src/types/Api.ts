export type Genre = {
  id: number
  title: string
}

export type Poster = {
  id: number
  name: string
  description: string
  image: string
  width: number
  height: number
  price: string
  genres: { genre: Genre }[]
}

export type GenreDetails = {
  id: number
  title: string
  posters: { poster: Poster }[]
}
