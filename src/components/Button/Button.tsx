import { MouseEventHandler } from 'react'
import style from './button.module.scss'

interface ButtonProps {
	children: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: ButtonProps) => (
	<button className={style.button} onClick={onClick}>
		{children}
	</button>
)
