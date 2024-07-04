import { PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'
const Layout = ({ children }: PropsWithChildren) => {
	return (
		<section className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</section>
	)
}
export default Layout
