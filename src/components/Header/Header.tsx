import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher'

import styles from './header.module.scss'

export const Header = () => (
	<div className={styles.header}>
		<div className={styles.logo}>find-developer</div>
		<ThemeSwitcher />
	</div>
)
