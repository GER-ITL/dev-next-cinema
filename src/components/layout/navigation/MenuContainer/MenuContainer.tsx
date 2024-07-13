import { FC } from 'react'
import Menu from './Menu'
import { firstMenu, genreMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* <GenreMenu /> */}
			<Menu menu={genreMenu} />
			<Menu menu={userMenu} />
		</div>
	)
}
export default MenuContainer
