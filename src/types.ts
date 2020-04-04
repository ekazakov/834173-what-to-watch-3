export interface Film {
  id: number,
  name: string,
  posterBig: string,
  poster: string,
  background: string,
  backgroundColor: string,
  video: string,
  preview: string,
  description: string,
  genre: string,
  rating: number,
  score: number,
  director: string,
  starring: string[],
  duration: number,
  year: number,
  favorite: boolean,
}

export interface Comment {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}
