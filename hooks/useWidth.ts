import React, { useEffect, useState } from 'react';
import usePrevious from './usePrevious';

export default function useWidth() {
	const [windowWidth, setWidth] = useState<number>();
	const previousWidth = usePrevious(windowWidth);


	useEffect(() => {
		function handleResize(){
			console.log(window.innerWidth);
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize);
		}

	}, [])

	return {
		windowWidth,
		previousWidth
	}
}