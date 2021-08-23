import React, { MutableRefObject, useState, useRef, useEffect } from 'react'; 
import styles from '../styles/hero.module.scss';
import useDarkMode from '../hooks/useDarkMode';


import { TextPlugin } from 'gsap/dist/TextPlugin';
import { RoughEase } from 'gsap/dist/EasePack';

import { TimelineMax } from 'gsap';
import gsap from 'gsap';

interface HeroProps {

}

const whiteArrow = '/arrow_white.svg';
const blackArrow = '/arrow_black.svg';

export default function Hero({}: HeroProps) {
	const [bits, setBits] = useState([...Array(11 * 11).keys()].map(v => Math.round(Math.random())))
	const dark = useDarkMode();
	const cursor_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const cursor2_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const hero_ref = useRef() as MutableRefObject<HTMLElement>;
	const timeline = useRef() as MutableRefObject<TimelineMax>;
	const firstLine_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const secondLine_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const secondLineText_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const arrow_ref = useRef() as MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		if (typeof window !== "undefined"){
			gsap.registerPlugin(TextPlugin, RoughEase)
		}
	}, [])

	useEffect(() => {
		// hero_ref.current.style.visibility = 'visible';
		gsap.to(hero_ref.current, {duration: 0, css: {visibility: 'visible'}})	
		timeline.current = gsap.timeline();

		gsap.to(
			cursor_ref.current, 
			{
				opacity: 0, 
				repeat: -1, 
				ease: 'power2.inOut'
			}
		)

		gsap.to(
			cursor2_ref.current, 
			{
				opacity: 0, 
				repeat: -1, 
				ease: 'power2.inOut'
			}
		)

		timeline.current.to(firstLine_ref.current, {duration: 2, text: 'Hello World,'})
		.to(cursor_ref.current, {duration: 0.2, visibility: 'hidden'})
		.to(secondLine_ref.current, {duration: 0.1, display: 'flex'})
		.to(secondLineText_ref.current, {duration: 2, text: 'I\'m Wilson'})
		.to(cursor_ref.current, {duration: 0.2, visibility: 'hidden'})
		.to(cursor2_ref.current, {duration: 0.2, visibility: 'hidden'})
		.to(arrow_ref.current, {duration: 0.2, opacity: 1})


	}, [])

	return (
		<section ref={hero_ref} className={styles.hero}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h1>
						<span className={styles.box}></span>
						{/* <span className={styles.hi}>Hello World, </span> */}
						{/* <span className={styles.hi}>Hello World, <span className={styles.secondLine} style={{display: 'none'}}><br/> I'm Wilson</span> </span> */}
						{/* <span ref={firstLine_ref} className={styles.hi}> <span ref={secondLine_ref} style={{display: 'none'}}><br/> </span> </span> */}
						<span>
							<span ref={firstLine_ref} className={styles.hi}> 
							</span>
							<span ref={cursor_ref} className={styles.cursor}>_</span>
						</span>
						<span style={{display: 'none'}} ref={secondLine_ref}>
							<br/>
							<span ref={secondLineText_ref}></span>
							<span ref={cursor2_ref} className={styles.cursor}>_</span>
						</span>
						{/* <span className={styles.hi}> <br className={styles.breakLne}/></span> */}
						<span className={styles.text}></span>

					</h1>
					{/* <h1 style={{margin: 0}} >I'm Wilson</h1> */}
					<div ref={arrow_ref} className={styles.arrow}>
						<img src={dark ? whiteArrow : blackArrow} alt={'next'} />
					</div>
				</div>

				<div className={styles.binary}>
					{ bits.map((v, idx, arr) => (
						<h2 key={idx} className={styles.digit}>{v}</h2>
					))}
				</div>
			</div>
		</section>
	)
}