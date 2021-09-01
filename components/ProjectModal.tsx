import styles from '../styles/projectmodal.module.scss';
import { HomeProps } from '../pages/index'

interface ProjectModalProps extends HomeProps {
	name: string,
	closeMenu: () => void, 	
}

export default function ProjectModal({name, data, closeMenu}: ProjectModalProps) {
	const value = data.filter(d => d.title === name)

	return (
		<div 
			onClick={closeMenu} 
			style={name.length === 0 ? {display: 'none'} : {}} 
			className={styles.stuff}
			role='dialog'
			aria-modal={'true'}
			aria-labelledby={'dialog1_label'}
		>
			<div
				className={styles.modal}
				onClick={(e) => {e.stopPropagation()}}
			>
				<h1 id='dialog1_label' className={styles.title}>
					{ name }
				</h1>
				<div className={styles.content}>
					<img className={styles.image} src={ value.length > 0 ? value[0].img : ''} alt={name} />
					<p>{value.length > 0 ? value[0].description : ''}</p>
				</div>
				<div className={styles.links}>
					<button><a href={value.length > 0 ? value[0].link : ''} target={'_blank'}>Visit Site</a></button>
					<button><a href={value.length > 0 ? value[0].source : ''} target={'_blank'}>Source Code</a></button>
				</div>
			
			</div>
		</div>
	)
}