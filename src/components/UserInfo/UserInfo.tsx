import { InfoItem, InfoItemProps } from 'components/InfoItem/InfoItem'
import { localGitHubUser } from 'types'
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg'
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg'
import { ReactComponent as WebSiteIcon } from '../../assets/icon-website.svg'
import styles from './userInfo.module.scss'

interface UserInfoProps
	extends Pick<localGitHubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({
	blog,
	company,
	location,
	twitter,
}: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <WebSiteIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company,
		},
	]

	return (
		<div className={styles.userInfo}>
			{items.map((item, i) => (
				<InfoItem {...item} key={i} />
			))}
		</div>
	)
}
