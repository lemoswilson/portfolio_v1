import styles from '../styles/work.module.scss';
import useDarkMode from '../hooks/useDarkMode';
import { HomeProps } from '../pages';
import React, { useEffect } from 'react';

interface WorkProps extends HomeProps {
	projectModal: string,
	setProjectModal: React.Dispatch<React.SetStateAction<string>>,
}


export default function Work({data, projectModal, setProjectModal}: WorkProps){
	const dark = useDarkMode();

	useEffect(() => {
		console.log(data.map(d => d.img));
	}, [])

	return (
		<div className={styles.work}>
			<div className={styles.headroom}></div>
			<div className={styles.content}>
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