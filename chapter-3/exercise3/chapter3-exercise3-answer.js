function countChar(word,letter){
  var count = 0;
	for (var i = 0; i < word.length; i++){
    	if (word.charAt(i) === letter){ count +=1; }
    }
  return count;
}