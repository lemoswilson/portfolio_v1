import styles from '../styles/hero.module.scss';
import useDarkMode from '../hooks/useDarkMode';

interface HeroProps {

}

const whiteArrow = '/arrow_white.svg';
const blackArrow = '/arrow_black.svg';

export default function Hero({}: HeroProps) {
	const bits = [...Array(11 * 11).keys()].map(v => Math.round(Math.random())) ;
	const dark = useDarkMode();

	return (
		<section className={styles.hero}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
				<div className={styles.wrapper}>
					<h1>
						<span className={styles.box}></span>
						<span className={styles.hi}>Hello World, <br/> I'm Wilson</span>
						<span className={styles.text}></span>
						<span className={styles.cursor}>_</span>
					</h1>
					<div className={styles.arrow}>
						<img src={dark ? whiteArrow : blackArrow} alt={'next'} />
					</div>
				</div>

				<div className={styles.binary}>
					{ bits.map(v => (
						<h2 className={styles.digit}>{v}</h2>
					))}
				</div>
			</div>
		</section>
	)
}