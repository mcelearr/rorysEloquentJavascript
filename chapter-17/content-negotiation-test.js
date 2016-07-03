const tape = require("tape");
const shot = require("shot");
const handler = require('./content-negotiation.js');

tape('first test', (t) => {
  t.equal(true, true, 'true is equal to true');
  t.end();
})

tape('test a get request to the /author endpoint and return the correct to get status code 200', (t) => {
  shot.inject(handler, {method: 'get', url: '/author'}, (res) => {
    t.equal(res.statusCode, 200, '/ has status code of 200');
    // t.ok(res.payload.includes('<title>Hello world</title>'));
    // t.equal(res.headers['Content-Type'], 'text/html', "correct file type");
    t.end();
  });
})
