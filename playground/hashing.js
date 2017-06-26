const {SHA256,PBKDF2,lib} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(`Token: ${token}`);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
// var message = 'I am user number 3';
// var salt = lib.WordArray.random(128/8);
// var hash = SHA256(message).toString();

// var hash2 = PBKDF2(message, salt, { keySize: 256/32 });
// console.log(`Message: ${message}`);
// console.log(`Salt: ${salt}`);
// console.log(`Hash: ${hash}`);
// console.log(`Hash2: ${hash2}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }