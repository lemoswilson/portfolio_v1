import React, { MutableRefObject, useRef } from 'react';
import styles from '../styles/experience.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import useIntersect from '../hooks/useIntersect';
import gsap from 'gsap';

const cssWhite = '/tech/css_white.svg';
const cssBlack = '/tech/css.svg';
const htmlWhite = '/tech/html_white.svg';
const htmlBlack = '/tech/html.svg'
const javascriptWhite = '/tech/javascript_white.svg';
const javascriptBlack = '/tech/javascript.svg';

const Experience = React.forwardRef<HTMLDivElement>(({}, ref) => {
	const dark = useDarkMode();

	const technologies: string[][] = [
		[ dark ? htmlWhite : htmlBlack, 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', 'HTML5' ],
		[ dark ? cssWhite : cssBlack, 'https://developer.mozilla.org/en-US/docs/Web/CSS', 'CSS3' ],
		[ dark ? javascriptWhite : javascriptBlack, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'JavaScript' ],
		[ '/tech/sass.svg', 'https://sass-lang.com/documentation', 'Sass' ],
		[ '/tech/nodejs.svg', 'https://nodejs.org/en/about/', 'NodeJS' ],
		[ '/tech/react.svg' , 'https://reactjs.org/', 'React'],
		[ '/tech/typescript.svg', 'https://www.typescriptlang.org/', 'Typescript' ],
		[ '/tech/python.svg', 'https://www.python.org/about/', 'Python' ],
		[ '/tech/mongodb.png', 'https://docs.mongodb.com/manual/', 'MongoDB' ],
		[ '/tech/github.svg', 'https://github.com/about', 'GitHub' ],
		[ '/tech/illustrator.svg', 'https://www.adobe.com/products/illustrator.html', 'Adobe Illustrator' ],
		[ '/tech/sketch.svg', 'https://www.sketch.com/', 'Sketch' ],
	]

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
		<section ref={ref} className={styles.experience}>
			<div className={styles.headroom}></div>
			<div ref={content_ref} className={styles.content}>
				<h1>Experience</h1>

				<div className={styles.text}>
					<p>
						I’ve been doing Web Development for a year now, and here are some technologies that I’ve worked with:
					</p>
				</div>
				
				<ul className={styles.technologies}>
					{ technologies.map(tech => (
						<li key={tech[2]}><a target={'_blank'} href={tech[1]}><img src={tech[0]} alt={tech[2]} /></a></li>	
					)) }
				</ul>

			</div>
		</section>
	)
})

export default Experience;
