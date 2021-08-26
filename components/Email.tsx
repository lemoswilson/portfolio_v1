import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import styles from '../styles/email.module.scss';
import Link from 'next/link';

interface EmailProps {
	setEmailDone: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Email({setEmailDone}: EmailProps){

	const emails_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const timeline = useRef() as React.MutableRefObject<TimelineMax>;

	useEffect(() => {
		timeline.current = gsap.timeline();

		timeline.current
		.from(emails_ref.current, {duration: 0.6, y: -10, x: 20, opacity: 0, onComplete: setEmailDone, onCompleteParams: [true]})
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