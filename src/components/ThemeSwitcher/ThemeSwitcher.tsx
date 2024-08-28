import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'
import { useEffect, useState } from 'react'

import styles from './themeSwitcher.module.scss'

export const ThemeSwitcher = () => {
	const [isDark, setDark] = useState(false)
	const themeText = isDark ? 'Light' : 'Dark'
	const ThemeIcon = isDark ? SunIcon : MoonIcon

	useEffect(() => {
		document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
	}, [isDark])

	const onChangeTheme = () => {
		setDark(!isDark)
	}

	return (
		<div className={styles.switcher} onClick={onChangeTheme}>
			<span>{themeText}</span>
			<ThemeIcon className={styles.icon} />
		</div>
	)
}
