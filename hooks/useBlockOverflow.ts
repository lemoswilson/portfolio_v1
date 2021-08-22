import React, { useEffect } from 'react';
import useWidth from './useWidth';

export default function useBlockOverflow(isMenuOpen: boolean, isModalOpen: boolean) {
	const { windowWidth } = useWidth();

	useEffect(() => {
		if (windowWidth < 992 && isMenuOpen || isModalOpen) {
			// console.log('should be hidden overflow', document.getElementsByTagName('main')[0])
			// document.getElementsByTagName('main')[0].style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			// document.getElementsByTagName('main')[0].style.height = '100vh';
		} else {
			console.log('should be auto overflow');
			// document.getElementsByTagName('main')[0].style.overflow = 'auto';
			document.body.style.overflow = 'auto';
		}
	}, [windowWidth, isMenuOpen, isModalOpen])
}