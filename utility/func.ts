// export function rangeStartEnd(start: number, end: number){
// 	console.log('range start is', start, 'range end is', end);
// 	return [...Array(end-start).keys()].map((v, idx, arr) => idx + start)
// }

export function rangeStartEnd(start: number, end: number): number[] {
    return Array(end - start + 1).fill(null).map((_, idx) => start + idx)
}