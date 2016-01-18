function isEven(N){
  	if (N < 0) { N = N - N*2 ;}
	if (N===0) {
    	return true;
    } else if (N===1) {
    	return false;
    } else {
    	return isEven(N-2);
    }
}