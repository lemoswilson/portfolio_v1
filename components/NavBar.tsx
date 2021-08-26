import React, { MutableRefObject, useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.scss';
import NavBarContent from './NavBarContent';


interface NavBarProps {
	setMenu: React.Dispatch<React.SetStateAction<boolean>>,
	scrollToElement: (destination: string) => void,
	emailDone: boolean,
}

export default function NavBar({setMenu, scrollToElement, emailDone: typingDone}: NavBarProps){
	const navbar_ref = useRef() as MutableRefObject<HTMLDivElement>;


	return (
		<div ref={navbar_ref} className={styles.navbar}>
			{
				typingDone 
				? <NavBarContent ref={navbar_ref} scrollToElement={scrollToElement} setMenu={setMenu} />
				: null
			}
		</div>
	)
}