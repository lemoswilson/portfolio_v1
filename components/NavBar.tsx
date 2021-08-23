import React, { useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.scss';
import useWidth from '../hooks/useWidth';
import useDarkMode from '../hooks/useDarkMode';
import gsap from 'gsap';



interface NavBarProps {
	setMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

const menu = '<wl/>'
const whiteMenu = '/Menu_white.svg'
const blackMenu = '/Menu.svg'

export default function NavBar({setMenu}: NavBarProps){
	const { windowWidth } = useWidth();
	const dark = useDarkMode();

	const about_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const experience_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const work_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const contact_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const ul_ref = useRef() as React.MutableRefObject<HTMLUListElement>;
	const timeline = useRef() as React.MutableRefObject<TimelineMax>;

	useEffect(() => {
		timeline.current = gsap.timeline();

		timeline.current
		.from(about_ref.current, {duration: 0.2, y: -20, opacity: 0, delay: 1})
		.from(experience_ref.current, {duration: 0.2, y: -20, opacity: 0})
		.from(work_ref.current, {duration: 0.2, y: -20, opacity: 0})
		.from(contact_ref.current, {duration: 0.2, y: -20, opacity: 0})
	}, [])

	return (
		<div className={styles.navbar}>
			<h3 className={styles.logoMenu}>
				{menu}
			</h3>
			<nav>
				{/* {
					windowWidth > 991 
					? (
						<ul ref={ul_ref}>
							<li ref={about_ref} className={styles.link}>about</li>
							<li ref={experience_ref} className={styles.link}>experience</li>
							<li ref={work_ref} className={styles.link}>work</li>
							<li ref={contact_ref} className={styles.link}>contact</li>
						</ul>
					)
					: <img src={dark ? whiteMenu : blackMenu} alt="menu" />
				} */}
				<ul ref={ul_ref}>
					<li ref={about_ref} className={styles.link}>about</li>
					<li ref={experience_ref} className={styles.link}>experience</li>
					<li ref={work_ref} className={styles.link}>work</li>
					<li ref={contact_ref} className={styles.link}>contact</li>
				</ul>
				

			</nav>
		</div>
	)
}