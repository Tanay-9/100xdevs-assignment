const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailCheck = zod.string().email();
const passwordCheck = zod.string().min(6);


function signJwt(username, password) {
    const usernameRes = emailCheck.safeParse(username);
    const passRes = passwordCheck.safeParse(password);

    if(!usernameRes.success || !passRes.success) return null;
    
    const token = jwt.sign({ username}, jwtPassword)
    return token;
}


function verifyJwt(token) {
    let ans = true;
    try{
      token.verify(token,jwtPassword);
    }
    catch(err) {
        ans = false;
    }
   return ans;
}


function decodeJwt(token) {
   
    const decoded = token.decode(token,jwtPassword);
   if(decoded) return true;
   else return false;
    
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
