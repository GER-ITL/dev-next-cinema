export const getGenreUrl = (slug: string) => `genre/${slug}`
export const getMovieUrl = (slug: string) => `movie/${slug}`
export const getActorUrl = (slug: string) => `actor/${slug}`

export const getAdminUrl = (slug: string) => `manage/${slug}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, 1)
