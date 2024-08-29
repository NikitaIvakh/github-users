import { UserStat } from 'components/UserStat/UserStat'
import { localGitHubUser } from 'types'
import styles from './userCard.module.scss'

interface UserCardProps extends localGitHubUser {}

export const UserCard = (props: UserCardProps) => (
	<div className={styles.userCard}>
		<UserStat
			repos={props.repos}
			following={props.following}
			followers={props.followers}
		/>
	</div>
)
