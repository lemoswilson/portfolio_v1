import { useEffect } from "react";

export default function useKeyboardCloseModal(projectModal: string, closeMenu: () => void){
	
	function onKeyDown(this: Document, e: KeyboardEvent){
		console.log('should be escaping', e.key.toLowerCase());
		if (e.key.toLowerCase() === 'escape' && projectModal.length > 0){
			closeMenu();
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
		}
	},[])
}