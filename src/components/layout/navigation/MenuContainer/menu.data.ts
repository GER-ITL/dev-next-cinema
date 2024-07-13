import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
}

export const genreMenu: IMenu = {
	title: 'Popular Genres',
	items: [
		{
			icon: 'MdGroup',
			link: '/comedy',
			title: 'Comedy',
		},
		{
			icon: 'MdExplore',
			link: '/cartoons',
			title: 'Cartoons',
		},
		{
			icon: 'MdBakeryDining',
			link: '/fantasy',
			title: 'Fantasy',
		},
		{
			icon: 'MdAccessibilityNew',
			link: '/biography',
			title: 'Biography',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}
