var size = 8;

for (var i = 0; i < size/2; i++){
	var array1 = new Array(size);
      for (var j = 0; j < size; j++){
      	j % 2 === 0? array1[j] = "#" : array1[j] = "";
      } 
	var array2 = new Array(size);
      for (var k = 0; k < size; k++){
      	k % 2 != 0? array2[k] = "#" : array2[k] = "";
      }       
  console.log(array1);
  console.log(array2);
}