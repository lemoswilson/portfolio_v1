import styles from '../styles/socials.module.scss';
import Github from './SocialIcons/Github';
import Instagram from './SocialIcons/Instagram';
import Linkedin from './SocialIcons/Linkedin';
import Twitter from './SocialIcons/Twitter';

interface SocialsProps {

}

export default function Socials({}: SocialsProps){

	return (
		<div className={styles.socials}>
			<ul className={styles.list}>
				<li><Twitter/></li>
				<li><Linkedin/></li>
				<li><Instagram/></li>
				<li className={styles.last}><Github/></li>
			</ul>
		</div>
	)
}

