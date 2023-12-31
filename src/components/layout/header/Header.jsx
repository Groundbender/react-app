/* eslint-disable react/prop-types */
// import { useAuth } from "../../../hooks/useAuth";
import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	// react router
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink || '/')}>
					<IoMdArrowBack fill='#fff' fontSize='29px' />
				</button>
			) : (
				<button onClick={() => navigate(isAuth ? '/profile' : '/auth')}>
					<SlUser fill='#fff' fontSize='25px' />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
