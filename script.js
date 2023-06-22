function threeSum(arr, target) {
	arr.sort((a, b) => a - b);
	let closestSum = 0;
	let minDiff = Number.MAX_VALUE;
	for(let i=0; i<arr.length-2; i++){
		let j=i+1, k = arr.length-1;
		while(j < k){
			const sum = (arr[i] + arr[j] + arr[k]);
			if(sum > target) k--;
			else j++;

			const diff = Math.abs(sum - target);
			if(diff < minDiff){
				minDiff = diff;
				closestSum = sum;
			}
		}
	}
	return closestSum;
}

module.exports = threeSum;