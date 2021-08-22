import React from 'react';
import styles from '../styles/overlay.module.scss';
import useWidth from '../hooks/useWidth';

interface OverlayProps {
	isMenuOpen: boolean,
	isModalOpen: boolean,
	closeMenus: () => void,
}

const Overlay: React.FC<OverlayProps> = ({isMenuOpen, closeMenus, isModalOpen}) => {
	const { windowWidth } = useWidth();
	const show = isModalOpen || isMenuOpen && windowWidth < 992 ? {display: 'flex'} : {display: 'none'}


	return (
		<div onClick={closeMenus} style={show} className={styles.overlay}></div>
	)
}

export default Overlay;