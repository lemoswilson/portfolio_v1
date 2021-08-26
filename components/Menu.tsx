import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import useWidth from '../hooks/useWidth';
import styles from '../styles/menu.module.scss';

const whiteClose = '/close_white.svg';
const blackClose = '/close.svg';

interface MenuProps {
	isMenuOpen: boolean,
	setHide: React.Dispatch<React.SetStateAction<boolean>>,
	setMenu: React.Dispatch<React.SetStateAction<boolean>>,
	scrollToElement: (destination: string) => void,
}

export default function Menu({isMenuOpen, setMenu, scrollToElement, setHide}: MenuProps){
	const { windowWidth } = useWidth();
	const dark = useDarkMode();

	function sc(destination: string){
		setHide(true);
		scrollToElement(destination);
		setTimeout(() => {
			setHide(false);
			setMenu(false);
		}, 400);

	}
	
	return (
		<div style={isMenuOpen && windowWidth < 992 ? {left: '40vw'} : {visibility: 'hidden'}} className={styles.menu}>
			<div className={styles.close}>
				<img onClick={() => setMenu(false)} src={dark ? whiteClose : blackClose} alt="close" />
			</div>	
			<ul className={styles.links}>
				<li onClick={() => sc('about')}>about</li>
				<li onClick={() => sc('experience')}>experience</li>
				<li onClick={() => sc('work')}>work</li>
				<li onClick={() => sc('contact')}>contact</li>
			</ul>
		</div>
	)
}