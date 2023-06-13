import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage='/public/images/bg.avif'>
			<Button clickHandler={() => navigate(!isAuth ? '/auth' : '/new-workout')}>
				{!isAuth ? 'Sign in' : 'New workout'}
			</Button>
			<h1 className={styles.heading}>Training</h1>
		</Layout>
	)
}

export default Home
