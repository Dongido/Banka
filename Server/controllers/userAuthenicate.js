
class UsersAuth {
   //verify token
   verifyToken(req, res, next){
    const bearerheader = req.headers['authorization'];
    // check if bearer is undefined
    if(typeof bearerheader !== 'undefined'){
      //split at the space
      const bearer = bearerheader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      //Next middleware
      next();
    }else{
      res.sendStatus(403);
    }
  }

}

const UserAuth = new UsersAuth();
export default UserAuth;