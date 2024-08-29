import { Container } from 'components/Container/Container'
import { Header } from 'components/Header/Header'
import { Search } from 'components/Search/Search'
import { UserCard } from 'components/UserCard/UserCard'
import { defaultUser } from 'mock'
import { useState } from 'react'
import { GitHubError, GitHubUser, localGitHubUser } from 'types'
import { extractLocalUser } from 'utils/extract-local-user'
import { isGitHubUser } from 'utils/typeguards'

const BASE_URL = 'https://api.github.com/users/'

function App() {
	const [user, setUser] = useState<localGitHubUser | null>(defaultUser)

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username
		const response = await fetch(url)
		const user = (await response.json()) as GitHubUser | GitHubError

		if (isGitHubUser(user)) {
			setUser(extractLocalUser(user))
		} else {
			setUser(null)
		}
	}

	return (
		<Container>
			<Header />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	)
}

export default App
