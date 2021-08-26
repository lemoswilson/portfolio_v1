import useWidth from '../hooks/useWidth';
import useDarkMode from '../hooks/useDarkMode';
import React, { useRef, useEffect } from 'react';
import styles from '../styles/navbar.module.scss';
import gsap from 'gsap';

const menu = '<wl/>'
const whiteMenu = '/Menu_white.svg'
const blackMenu = '/Menu.svg'


interface NavBarContentProps {
	setMenu: React.Dispatch<React.SetStateAction<boolean>>,
	scrollToElement: (destination: string) => void,
}



const NavBarContent = React.forwardRef<HTMLDivElement, NavBarContentProps>(({scrollToElement, setMenu}, ref) => {
	const { windowWidth } = useWidth();
	const dark = useDarkMode();

	const about_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const experience_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const work_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const contact_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
	const ul_ref = useRef() as React.MutableRefObject<HTMLUListElement>;
	const logo_menu_ref = useRef() as React.MutableRefObject<HTMLHeadingElement>;
	const menu_ref = useRef() as React.MutableRefObject<HTMLImageElement>;
	const timeline_desk = useRef() as React.MutableRefObject<TimelineMax>;
	const timeline_mobile = useRef() as React.MutableRefObject<TimelineMax>;
	const firstRender = useRef(false) as React.MutableRefObject<boolean>;

	// i'm changing the opacity to 0 in order to use gsap.to
	// instead of gsap.from

	useEffect(() => {
		let t: any = ref;
		if (windowWidth > 991 && !firstRender.current){

			timeline_desk.current = gsap.timeline();
			timeline_desk.current
			.to(t.current, {visibility: 'visible', duration: 0})
			.from(logo_menu_ref.current, {duration: 0.2, y: -20, opacity: 0, delay: 0.5})
			.from(about_ref.current, {duration: 0.2, y: -20, opacity: 0})
			.from(experience_ref.current, {duration: 0.2, y: -20, opacity: 0})
			.from(work_ref.current, {duration: 0.2, y: -20, opacity: 0})
			.from(contact_ref.current, {duration: 0.2, y: -20, opacity: 0})
			firstRender.current = true;
		} else if (windowWidth < 992 && !firstRender.current) {
			timeline_mobile.current = gsap.timeline();
			timeline_mobile.current
			.to(t.current, {visibility: 'visible', duration: 0})
			.from(logo_menu_ref.current, {duration: 0.2, y: -20, opacity: 0, delay: 0.5})
			.from(menu_ref.current, {duration: 0.2, y: -20, opacity: 0})
			firstRender.current = true;
		}
	}, [windowWidth])


	return (
		<>
		<h3 ref={logo_menu_ref} className={styles.logoMenu}>
			{menu}
		</h3>
		<nav>
			<img onClick={() => setMenu(true)} ref={menu_ref} style={windowWidth > 991 ? {display: 'none'} : {}} src={dark ? whiteMenu : blackMenu} alt="menu" />
			<ul style={windowWidth < 992 ? {display: 'none'} : {}} ref={ul_ref}>
				<li onClick={() => scrollToElement('about')} ref={about_ref} className={styles.link}>about</li>
				<li onClick={() => scrollToElement('experience')} ref={experience_ref} className={styles.link}>experience</li>
				<li onClick={() => scrollToElement('work')} ref={work_ref} className={styles.link}>work</li>
				<li onClick={() => scrollToElement('contact')} ref={contact_ref} className={styles.link}>contact</li>
			</ul>
		</nav>
		</>
	)
})

export default NavBarContent;

// export default function NavBarContent({scrollToElement, setMenu}: NavBarContentProps){
// 	const { windowWidth } = useWidth();
// 	const dark = useDarkMode();

// 	const about_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
// 	const experience_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
// 	const work_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
// 	const contact_ref = useRef() as React.MutableRefObject<HTMLLIElement>;
// 	const ul_ref = useRef() as React.MutableRefObject<HTMLUListElement>;
// 	const logo_menu_ref = useRef() as React.MutableRefObject<HTMLHeadingElement>;
// 	const menu_ref = useRef() as React.MutableRefObject<HTMLImageElement>;
// 	const timeline_desk = useRef() as React.MutableRefObject<TimelineMax>;
// 	const timeline_mobile = useRef() as React.MutableRefObject<TimelineMax>;
// 	const firstRender = useRef(false) as React.MutableRefObject<boolean>;

// 	// i'm changing the opacity to 0 in order to use gsap.to
// 	// instead of gsap.from

// 	useEffect(() => {
// 		if (windowWidth > 991 && !firstRender.current){
// 			timeline_desk.current = gsap.timeline();
// 			timeline_desk.current
// 			.from(logo_menu_ref.current, {duration: 0.2, y: -20, opacity: 0, delay: 0.5})
// 			.from(about_ref.current, {duration: 0.2, y: -20, opacity: 0})
// 			.from(experience_ref.current, {duration: 0.2, y: -20, opacity: 0})
// 			.from(work_ref.current, {duration: 0.2, y: -20, opacity: 0})
// 			.from(contact_ref.current, {duration: 0.2, y: -20, opacity: 0})
// 			firstRender.current = true;
// 		} else if (windowWidth < 992 && !firstRender.current) {
// 			timeline_mobile.current = gsap.timeline();
// 			timeline_mobile.current
// 			.from(logo_menu_ref.current, {duration: 0.2, y: -20, opacity: 0, delay: 0.5})
// 			.from(menu_ref.current, {duration: 0.2, y: -20, opacity: 0})
// 			firstRender.current = true;
// 		}
// 	}, [windowWidth])


// 	return (
// 		<>
// 		<h3 ref={logo_menu_ref} className={styles.logoMenu}>
// 			{menu}
// 		</h3>
// 		<nav>
// 			<img ref={menu_ref} style={windowWidth > 991 ? {display: 'none'} : {}} src={dark ? whiteMenu : blackMenu} alt="menu" />
// 			<ul style={windowWidth < 992 ? {display: 'none'} : {}} ref={ul_ref}>
// 				<li onClick={() => scrollToElement('about')} ref={about_ref} className={styles.link}>about</li>
// 				<li onClick={() => scrollToElement('experience')} ref={experience_ref} className={styles.link}>experience</li>
// 				<li onClick={() => scrollToElement('work')} ref={work_ref} className={styles.link}>work</li>
// 				<li onClick={() => scrollToElement('contact')} ref={contact_ref} className={styles.link}>contact</li>
// 			</ul>
// 		</nav>
// 		</>
// 	)
// }
