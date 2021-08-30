import React from 'react';
import styles from '../styles/overlay.module.scss';
import useWidth from '../hooks/useWidth';

interface OverlayProps {
	isMenuOpen: boolean,
	isModalOpen: boolean,
	hide: boolean,
	closeMenus: () => void,
}

const Overlay: React.FC<OverlayProps> = ({isMenuOpen, closeMenus, isModalOpen, hide}) => {
	const { windowWidth } = useWidth();
	const show = isModalOpen || isMenuOpen && windowWidth < 992 ? {display: 'flex'} : {display: 'none'}
	const opacity = hide ? {opacity: 1} : {};


	return (
		<div 
			onClick={closeMenus} 
			style={{...show, ...opacity}} 
			className={styles.overlay}>
		</div>
	)
}

export default Overlay;