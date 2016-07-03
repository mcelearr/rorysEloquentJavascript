const http = require('http');

function getData() {
  const xhr = new XMLHttpRequest();
  const url = "http://eloquentjavascript.net/author";
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log('server responded with: ' + xhr.responseText);
    }
  }
  xhr.open('get', url);
  xhr.setRequestHeader("Accept", "text/plain");
  xhr.send();
}

getData();
