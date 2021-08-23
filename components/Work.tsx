import styles from '../styles/work.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import { HomeProps } from '../pages';
import React, { useEffect, useRef } from 'react';
import useIntersect from '../hooks/useIntersect';
import gsap from 'gsap';

interface WorkProps extends HomeProps {
	projectModal: string,
	setProjectModal: React.Dispatch<React.SetStateAction<string>>,
}


export default function Work({data, projectModal, setProjectModal}: WorkProps){
	const dark = useDarkMode();

	const content_ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const element = useRef() as React.MutableRefObject<HTMLDivElement>;

	useIntersect(element, animate)

	function animate(){
		gsap.to(content_ref.current, {
		opacity: 1,
		duration: 1.2,
		y: -60,
		ease: "power4.out",
		})
	}


	return (
		<div ref={element} className={styles.work}>
			<div className={styles.headroom}></div>
			<div ref={content_ref} className={styles.content}>
				<h1>Works</h1>

				<div className={styles.text}>
					<p>
						Some of the latest works I have done. More coming soon
					</p>
				</div>
				
				<ul className={styles.projects}>
					{ data.map((project, idx, arr) => (
						<li onClick={() => {setProjectModal(project.title)}} className={idx !== 0 ? styles.notFirst : ''} key={project.title}>
							<img src={project.img} alt={project.title} />
							<div className={styles.look}>
								<div className={styles.d1}>
									<img src={'/lupa.svg'} />
								</div>	
								<div className={styles.d2}>
									{project.title}
								</div>
							</div>
						</li>	
					)) }
				</ul>

			</div>
		</div>
	)
}