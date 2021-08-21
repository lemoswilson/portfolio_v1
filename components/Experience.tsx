import styles from '../styles/experience.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import Link from 'next/link';

const cssWhite = '/tech/css_white.svg';
const cssBlack = '/tech/css.svg';
const htmlWhite = '/tech/html_white.svg';
const htmlBlack = '/tech/html.svg'
const javascriptWhite = '/tech/javascript_white.svg';
const javascriptBlack = '/tech/javascript.svg';

export default function Experience(){
	const dark = useDarkMode();

	const technologies: string[][] = [
		[ dark ? htmlWhite : htmlBlack, 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' ],
		[ dark ? cssWhite : cssBlack, 'https://developer.mozilla.org/en-US/docs/Web/CSS' ],
		[ dark ? javascriptWhite : javascriptBlack, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' ],
		[ '/tech/sass.svg', 'https://sass-lang.com/documentation', ],
		[ '/tech/nodejs.svg', 'https://nodejs.org/en/about/' ],
		[ '/tech/react.svg' , 'https://reactjs.org/'],
		[ '/tech/typescript.svg', 'https://www.typescriptlang.org/' ],
		[ '/tech/python.svg', 'https://www.python.org/about/' ],
		[ '/tech/mongodb.png', 'https://docs.mongodb.com/manual/' ],
		[ '/tech/github.svg', 'https://github.com/about' ],
		[ '/tech/illustrator.svg', 'https://www.adobe.com/products/illustrator.html' ],
		[ '/tech/sketch.svg', 'https://www.sketch.com/' ],
	]

	return (
		<div className={styles.experience}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
				<h1>Experience</h1>

				<div className={styles.text}>
					<p>
						I’ve been doing Web Development for a year now, and here are some technologies that I’ve worked with:
					</p>
				</div>
				
				<ul className={styles.technologies}>
					{ technologies.map(tech => (
						<li key={tech[0]}><a target={'_blank'} href={tech[1]}><img src={tech[0]} alt={tech[0]} /></a></li>	
					)) }
				</ul>

			</div>
		</div>
	)
}