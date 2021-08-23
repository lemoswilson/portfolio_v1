import React, { useEffect, useState } from 'react';
import usePrevious from './usePrevious';

export default function useHeight() {
	const [windowHeight, setHeight] = useState<number>();
	const previousHeight = usePrevious(windowHeight);


	useEffect(() => {
		function handleResize(){
			setHeight(window.innerHeight);
		}

		window.addEventListener('resize', handleResize);
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize);
		}

	}, [])

	return {
		windowHeight,
		previousHeight
	}
}