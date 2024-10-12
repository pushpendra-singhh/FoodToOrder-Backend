// const jwt = require('jsonwebtoken');
// const secretKey = "encryption";

// // Generate a JWT token
// function getjwt(user_id) {
//   const token = jwt.sign({ user_id: user_id }, secretKey, { expiresIn: '1h' });
//   console.log(token); 
// }

// getjwt(1);


// // Verify and decode a JWT token
// function verifyjwt(token){
// jwt.verify(this.token, secretKey, (err, decoded) => {
//   if (err) {
//     console.log("verification failed");
//     // Token verification failed
//   } else {
//     // Token verified successfully
//     console.log("taken verified successfully");
//     console.log(decoded.userId); // Output: 123456
//   }
// });
// }

// verifyjwt(getjwt(1));
const jwt = require('jsonwebtoken');
const secretKey = "encryption";

// Generate a JWT token
function getjwt(user_id) {
  const token = jwt.sign({ user_id: user_id }, secretKey, { expiresIn: '1h' });
  // console.log(token); 
return (token);
}

// const token = getjwt(1);

// Verify and decode a JWT token
function verifyjwt(token){
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log("verification failed");
      // Token verification failed
    } else {
      // Token verified successfully
      console.log("token verified successfully");
      console.log(decoded.user_id);
      // const id=decoded.user_id;
      return(decoded.user_id); // 
    }
  });
}


// verifyjwt(token);
module.exports={getjwt,verifyjwt};
