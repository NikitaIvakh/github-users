import { UserStat } from 'components/UserStat/UserStat'
import { UserTitle } from 'components/UserTitle/UserTitle'
import { localGitHubUser } from 'types'
import styles from './userCard.module.scss'

interface UserCardProps extends localGitHubUser {}

export const UserCard = (props: UserCardProps) => (
	<div className={styles.userCard}>
		<img src={props.avatar} alt={props.login} className={styles.avatar} />
		<UserTitle
			name={props.name}
			login={props.login}
			createdAt={props.createdAt}
		/>
		<p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
			{props.bio || 'This profile has no bio'}
		</p>
		<UserStat
			repos={props.repos}
			following={props.following}
			followers={props.followers}
		/>
	</div>
)
