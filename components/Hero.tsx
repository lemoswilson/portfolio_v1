import React, { MutableRefObject, useState, useRef, useEffect, useLayoutEffect } from 'react'; 
import styles from '../styles/hero.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import FontFaceObserver from 'fontfaceobserver';


import { TextPlugin } from 'gsap/dist/TextPlugin';
import { RoughEase } from 'gsap/dist/EasePack';

import { TimelineMax } from 'gsap';
import gsap from 'gsap';

import { rangeStartEnd } from '../utility/func';

interface HeroProps {
	scrollToElement: (destination: string) => void,
	setTyping: React.Dispatch<React.SetStateAction<boolean>>,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	loadingDone: boolean,
}

const whiteArrow = '/arrow_white.svg';
const blackArrow = '/arrow_black.svg';

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({scrollToElement, setTyping, loadingDone, setLoading}, ref) => {
	const [bits, setBits] = useState<number[][]>([...Array(11).keys()].map(v => [...Array(11).keys()].map(v => Math.round( Math.random() ))))
	const dark = useDarkMode();
	const [fontLoaded, setFontLoaded] = useState(false);

	const cursor_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const cursor2_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const firstLine_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const secondLine_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const secondLineText_ref = useRef() as MutableRefObject<HTMLSpanElement>;
	const arrow_ref = useRef() as MutableRefObject<HTMLDivElement>;
	const timeline = useRef() as MutableRefObject<TimelineMax>;

	const digit_timeline = useRef() as MutableRefObject<TimelineMax>;

	useLayoutEffect(() => {
		let font = new FontFaceObserver('Inconsolata')

		font.load().then(_ => setFontLoaded(true));
	},[])


	useEffect(() => {
		if (typeof window !== "undefined"){
			gsap.registerPlugin(TextPlugin, RoughEase)
		}
	}, [])

	// Text animation
	useEffect(() => {
		
		let t: any = ref
		gsap.to(t.current, {duration: 0, css: {visibility: 'visible'}})	
		
		if (loadingDone) {

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
	
			timeline.current
			.to(cursor_ref.current, {duration: 0, color: dark ? 'white' : 'black'})
			.to(firstLine_ref.current, {duration: 2, text: 'Hello World,'})
			.to(cursor_ref.current, {duration: 0.2, visibility: 'hidden'})
			.to(cursor2_ref.current, {duration: 0, color: dark ? 'white' : 'black'})
			.to(secondLine_ref.current, {duration: 0.1, display: 'inline'})
			.to(secondLineText_ref.current, {duration: 2, text: 'I\'m Wilson'})
			.to(cursor_ref.current, {duration: 0.2, visibility: 'hidden'})
			.to(cursor2_ref.current, {duration: 0.2, visibility: 'hidden', onComplete: setTyping, onCompleteParams: [true]})
			.to(arrow_ref.current, {duration: 0.2, opacity: 1})
		}


	}, [loadingDone])

	useEffect(() => {
		if (fontLoaded){
			digit_timeline.current = gsap.timeline();
			digit_timeline.current.to(document.getElementsByClassName(styles.digitWrapper), {duration: 1.2, top: 0, stagger: 0.15})
			.to([], {onComplete: setLoading, onCompleteParams: [true]})
		}
	}, [fontLoaded])

	return (
		<section ref={ref} className={styles.hero}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h1>
						<span className={styles.box}></span>
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
						<span className={styles.text}></span>

					</h1>
					<div ref={arrow_ref} className={styles.arrow}>
						<img onClick={() => scrollToElement('about')} src={dark ? whiteArrow : blackArrow} alt={'next'} />
					</div>
				</div>

				<ul className={styles.ul}>
					{[...Array(11).keys()].map((_, idx, __) => {
						return <li key={`wrapper${idx}`} className={styles.hiddenOv}>
							<ul id={`wrap${idx}`} className={styles.digitWrapper}>
								{[...Array(11).keys()].map((_, idxx, __) => {
									return <li key={`bit${idx}:${idxx}`} id={`bit${idx}:${idxx}`} className={styles.digit}><h2>{bits[idx][idxx]}</h2></li> 
								})}
							</ul>
						</li>
					})}
				</ul>
			</div>
		</section>
	)
})

export default Hero;