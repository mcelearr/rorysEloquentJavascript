function ArraySeq(arr){
  this.arr = arr;
}

function logFive(obj){
  if (obj.arr.length < 5) {
    var loops = obj.arr.length;
  } else {
    var loops = 5;
  }
  for (var i = 0; i < loops; i++){
    console.log(obj.arr[i]);
  }
}

logFive(new ArraySeq([1, 2]));
