import React, { useState } from 'react'; 
import styles from '../styles/contact.module.scss';
import useDarkMode from '../hooks/useDarkMode';
const sendWhite = '/send_white.svg';
const sendBlack = '/send_black.svg';

interface ContactProps {

}


export default function Contact({}: ContactProps) {
	const dark = useDarkMode();

	return (
		<section className={styles.contact}>
			<div className={styles.headroom}></div>
				<div className={styles.content}>
					<img src={dark ? sendWhite : sendBlack} alt={'contact'} />

					<h1>Contact Me!</h1>

					<div className={styles.text}>
						<p>
							Feel free to send me an email if you have a web project, or a job opportunity, or just want to link up!
						</p>
					</div>

					<button><a href={'mailto:lemoswilson@yahoo.com'}>Get in touch</a></button>
					
					{/* <div className={styles.footer}>
						Designed &amp; Developed by Wilson Lemos
					</div> */}
				</div>
		</section>
	)
}