import { Button } from 'components/Button/Button'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'
import styles from './search.module.scss'

interface SearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

type FormFields = {
	username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement & FormFields>
	) => {
		event.preventDefault()
		const text = event.currentTarget.username.value

		if (text.trim()) {
			onSubmit(text)
			event.currentTarget.reset()
		}
	}

	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SearchIcon />
				</label>
				<input
					type='text'
					id='search'
					name='username'
					className={styles.textField}
					placeholder='Search GitHub username...'
				/>
				{hasError && <div className={styles.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	)
}
