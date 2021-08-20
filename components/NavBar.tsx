import styles from '../styles/navbar.module.scss';
import useWidth from '../hooks/useWidth';
import useDarkMode from '../hooks/useDarkMode';
import { useEffect } from 'react';



interface NavBarProps {

}

const menu = '<wl/>'
const whiteMenu = '/Menu_white.svg'
const blackMenu = '/Menu.svg'

export default function NavBar({}: NavBarProps){
	const { windowWidth } = useWidth();

	useEffect(() => {
		console.log(windowWidth);
	}, [windowWidth])
	const dark = useDarkMode();

	return (
		<div className={styles.navbar}>
			<h3 className={styles.logoMenu}>
				{menu}
			</h3>
			<nav>
				{
					windowWidth > 991 
					? (
						<ul>
							<li className={styles.link}>about</li>
							<li className={styles.link}>experience</li>
							<li className={styles.link}>work</li>
							<li className={styles.link}>contact</li>
						</ul>
					)
					: <img src={dark ? whiteMenu : blackMenu} alt="menu" />
				}

			</nav>
		</div>
	)
}