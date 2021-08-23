import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from '../styles/socials.module.scss';
import Github from './SocialIcons/Github';
import Instagram from './SocialIcons/Instagram';
import Linkedin from './SocialIcons/Linkedin';
import Twitter from './SocialIcons/Twitter';

interface SocialsProps {

}

export default function Socials({}: SocialsProps){

	const socials_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const timeline = useRef() as React.MutableRefObject<TimelineMax>;

	useEffect(() => {
		timeline.current = gsap.timeline();

		timeline.current
		.from(socials_ref.current, {duration: 1, y: -20, x: -20, opacity: 0})
	}, [])

	return (
		<div ref={socials_ref} className={styles.socials}>
			<ul className={styles.list}>
				<li><Twitter/></li>
				<li><Linkedin/></li>
				<li><Instagram/></li>
				<li className={styles.last}><Github/></li>
			</ul>
		</div>
	)
}

