// import { useAuth } from "../../../hooks/useAuth";
import { IoMdArrowBack } from 'react-icons/io'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = () => {
	// react router
	// const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill='#fff' fontSize='29px' />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
