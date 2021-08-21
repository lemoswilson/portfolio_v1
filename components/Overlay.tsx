import React from 'react';
import styles from '../styles/overlay.module.scss';
import useWidth from '../hooks/useWidth';

interface OverlayProps {
	isMenuOpen: boolean,

}

const Overlay: React.FC<OverlayProps> = ({isMenuOpen}) => {
	const { windowWidth } = useWidth();
	const show = isMenuOpen && windowWidth < 992 ? {display: 'flex'} : {}

	return (
		<div  style={show} className={styles.overlay}></div>
	)
}

export default Overlay;