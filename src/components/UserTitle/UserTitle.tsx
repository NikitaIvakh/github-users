import { localGitHubUser } from 'types'
import styles from './userTitle.module.scss'

interface UserTitleProps
	extends Pick<localGitHubUser, 'name' | 'login' | 'createdAt'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
})

export const UserTitle = ({ name, login, createdAt }: UserTitleProps) => {
	const joinedDate = localDate.format(new Date(createdAt))

	return (
		<div className={styles.userTitle}>
			<h2>{name}</h2>
			<h3>{login}</h3>
			<span>{joinedDate}</span>
		</div>
	)
}
