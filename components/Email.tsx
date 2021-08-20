import styles from '../styles/email.module.scss';
import Link from 'next/link';



interface EmailProps {

}

export default function Email({}: EmailProps){

	return (
		<div className={styles.email}>
			<ul className={styles.list}>
				<li>
					<p><Link href={'mailto:lemosdev@gmail.com'}>lemosdev@gmail.com</Link></p>
				</li>
			</ul>
		</div>
	)
}