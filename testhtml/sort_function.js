/*冒泡*/
function sort(element) {
	for(let i=0;i<element.length;i++){
		for(let j=0;j<element.length-1;j++){
			if (element[j]>element[j+1]) {
				let temp = element[j];
				element[j] = element[j+1];
				element[j+1] = temp;
			}
		}
	}
	console.log(element);
}
let element = [1,3,5,78,334,6564,42,46,8,90];
//sort(element);
/*快排*/
function quitsort (element) {
	if (element.length<=1) {
		return element
	}
	let pivotIndex = Math.floor(element.length/2)
	let pivot = element.splice(pivotIndex,1)[0]
	let left = []
	let right = []
	for(let i = 0;i<element.length;i++){
		if (element[i]<=pivot) {
			left.push(element[i])
		}
		else{
			right.push(element[i])
		}
	}
	return quitsort(left).concat([pivot],quitsort(right))
}
//quitsort(element)
//console.log(quitsort(element))
/*插入*/
function sort1(element) {
	for(let i=1;i<element.length;i++){
		if (element[i]<element[i-1]) {
			let guard = element[i]
			let j = i - 1
			element[i] = element[j]
			while(j>=0 && guard<element[j]){
				element[j+1] = element[j]
				j--
			}
			element[j+1] = guard
		}
	}
}
//sort1(element)
//console.log(element)
/*希尔*/
function shellsort(element) {
	let len = element.length,
	    temp,
	    gap = 1
	while(gap<len/3){
		gap = gap*3 + 1
	}
	for(gap;gap>0;gap = Math.floor(gap/3)) {
		for(let i = gap;i<len;i++){
			temp = element[i]
			for(var j = i-gap;j>0&&element[j]>temp;j-=gap){
				element[j+gap] = element[j]
			}
			element[j+gap] = temp
		}
	}
	return element
}
//shellsort(element)
//console.log(element)
