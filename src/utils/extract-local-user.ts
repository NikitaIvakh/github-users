import { GitHubUser, localGitHubUser } from 'types'

export const extractLocalUser = (user: GitHubUser): localGitHubUser => ({
	id: user.id,
	login: user.login,
	avatar: user.avatar_url,
	name: user.name,
	bio: user.bio,
	blog: user.blog,
	company: user.company,
	createdAt: user.created_at,
	followers: user.followers,
	following: user.following,
	location: user.location,
	repos: user.public_repos,
	twitter: user.twitter_username,
})
