import { axiosClassic } from '@/api/interceptors'
import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.type'

export const GenreService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('popular'))
	},
}
