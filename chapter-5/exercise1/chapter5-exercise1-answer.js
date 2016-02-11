var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
	var flat = arr.reduce(function(a,b) {
    	return a.concat(b);
    })
    return flat;
}

console.log(flatten(arrays))