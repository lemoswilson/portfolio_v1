import React, {useEffect, useState} from "react";

export default function useDarkMode(){
	const [dark, setDark] = useState<boolean>();

	useEffect(() => {
		setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
	}, [])

	return dark
}