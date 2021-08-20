import styles from '../styles/about.module.scss';

export default function About(){
	return (
		<div className={styles.about}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
				<h1>About me</h1>

				<div className={styles.circle}>
					<img src="" alt="" />
				</div>
				
				<p className={styles.description}>
					Hello! My name is Wilson Lemos, I’m a web developer whose interests orbit around exploring creativity through the use of digital tools. I aspire for a career that will push me to continually learn new concepts and techniques, while creating software that is pleasant to use, code that is easy to maintain, and experiences that connect people.
					<br/>
					<br/>
					If I’m not working on a development project, you’ll probably find me at a good concert, running, or taking walks on the beach with my wife.
				</p>

				<ul className={styles.stuff}>
					<li className={styles.item}>
						<img src={'/keyboard_white.svg'} alt="Web dev" />		
						<p>Web Developer</p>
					</li>
					<li className={styles.item}>
						<img src={'/tech_white.svg'} alt="Tech enthusiast" />		
						<p>Tech Enthusiast</p>
					</li>
					<li className={styles.item}>
						<img src={'/note_white.svg'} alt="Music nerd" />		
						<p>Music Nerd</p>
					</li>
				</ul>
			</div>
		</div>
	)
}