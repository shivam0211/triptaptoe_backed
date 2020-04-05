

exports.addcredentials = (req,res,next) =>{
    req.body.TokenId = process.env.TokenId;
    req.body.EndUserIp = process.env.EndUserIp;
    req.body.ClientId = process.env.ClientId;
    req.body.UserName = process.env.UserName;
    req.body.Password = process.env.Password;
    next();
  };
  