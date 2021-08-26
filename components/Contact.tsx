import React, { useRef, MutableRefObject } from 'react'; 
import styles from '../styles/contact.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import gsap from 'gsap';
import useIntersect from '../hooks/useIntersect';

const sendWhite = '/send_white.svg';
const sendBlack = '/send_black.svg';

interface ContactProps {

}

const Contact = React.forwardRef<HTMLDivElement>(({}, ref) => {
	const dark = useDarkMode();

	const content_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	useIntersect(ref as MutableRefObject<HTMLDivElement>, animate)

	function animate(){
		gsap.to(content_ref.current, {
		opacity: 1,
		duration: 1.2,
		y: -60,
		ease: "power4.out",
		})
	}

	return (
		<section ref={ref} className={styles.contact}>
			<div className={styles.headroom}></div>
				<div ref={content_ref} className={styles.content}>
					<img src={dark ? sendWhite : sendBlack} alt={'contact'} />

					<h1>Contact Me!</h1>

					<div className={styles.text}>
						<p>
							Feel free to send me an email if you have a web project, or a job opportunity, or just want to link up!
						</p>
					</div>

					<button><a href={'mailto:lemoswilson@yahoo.com'}>Get in touch</a></button>
					
				</div>
		</section>
	)
})

export default Contact;