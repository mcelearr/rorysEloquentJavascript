function range(start, end, step){
  var range = [];
    if (step == null) {step = 1;}
    if (step > 0){
      for (var i = start; i <= end; i += step){
        range.push(i);
      }    
    } else {
      for (var i = start; i >= end; i += step){
        range.push(i);
      }     
    }
  return range;
}

function sum(range){
    var sum = 0;
    for (var j = 0; j<range.length;j++){
      sum += range[j];
    }
  console.log(sum);
}