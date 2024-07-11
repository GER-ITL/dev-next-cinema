'use client'

import { FC } from 'react'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { data } = usePopularGenres()
	return (
		<div>
			<Menu menu={{ title: 'Popular genres', items: data || [] }} />
		</div>
	)
}
export default GenreMenu
