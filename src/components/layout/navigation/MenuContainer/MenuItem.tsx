'use client'
import MaterialIcon from '@/components/ui/MaterialIcon'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const asPath = usePathname()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}
export default MenuItem
