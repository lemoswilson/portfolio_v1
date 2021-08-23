import React, { useEffect, useRef } from "react";

export default function useIntersect(
	element: React.MutableRefObject<HTMLElement>,
	callback: () => void,
){

	const triggered_ref = useRef() as React.MutableRefObject<boolean>;

	useEffect(() => {
		const elementHeight = element.current.clientHeight;

		function inView() {
			// get window height
			var windowHeight = window.innerHeight;
			// get number of pixels that the document is scrolled
			var scrollY = window.scrollY || window.pageYOffset;

			// get current scroll position (distance from the top of the page to the bottom of the current viewport)
			var scrollPosition = scrollY + windowHeight;
			// get element position (distance from the top of the page to the bottom of the element)
			var elementPosition = element.current.getBoundingClientRect().top + scrollY + elementHeight - 0.4 * windowHeight; 

			// is scroll position greater than element position? (is element in view?)
			if (scrollPosition > elementPosition) {
			return true;
			}
			return false;
		}

		function animate(){
			if (inView()){
				if (!triggered_ref.current) {
					callback()	

				}
				// gsap.to(content_ref.current, {
				// 	opacity: 1,
				// 	duration: 1.2,
				// 	y: -60,
				// 	ease: "power4.out",
				// 	// stagger: {
				// 	//   amount: 0.3
				// 	// }
				// })
				triggered_ref.current = true;	
			}
		}

		document.addEventListener('scroll', animate)

		return () => {
			document.removeEventListener('scroll', animate)
		}
	}, [])
	
};

