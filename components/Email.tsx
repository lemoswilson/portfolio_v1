import {useRef, useEffect} from 'react';
import gsap from 'gsap';
import styles from '../styles/email.module.scss';
import Link from 'next/link';



interface EmailProps {

}

export default function Email({}: EmailProps){

	const emails_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const timeline = useRef() as React.MutableRefObject<TimelineMax>;

	useEffect(() => {
		timeline.current = gsap.timeline();

		timeline.current
		.from(emails_ref.current, {duration: 1, y: -20, x: 20, opacity: 0})
	}, [])

	return (
		<div ref={emails_ref} className={styles.email}>
			<ul className={styles.list}>
				<li>
					<p><Link href={'mailto:lemosdev@gmail.com'}>lemosdev@gmail.com</Link></p>
				</li>
			</ul>
		</div>
	)
}