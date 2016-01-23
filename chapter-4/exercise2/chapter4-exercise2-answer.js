function reverseArray(array){
  var result = new Array(array.length);
  	var j = array.length-1;
  	for (var i = 0; i<array.length; i++){
    	result[i] = array[j];
      	j -= 1;
    }
  return result;
}

function reverseArrayInPlace(array){
  var result = new Array(array.length);
  	var j = array.length-1;
  	for (var i = 0; i<array.length; i++){
    	result[i] = array[j];
      	j -= 1;
    }
  array = result;
}
