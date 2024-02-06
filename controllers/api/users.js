const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    create,
    login,
    checkToken,
};

async function create(req,res) {
    try{
        const user = await User.create(req.body)
        console.log(req.body);
        const token = createJWT(user);
        res.json(token);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email })
      if(!user) throw new Error('Invalid credentials')
      const match = await bcrypt.compare(req.body.password, user.password)
      if(!match) throw new Error('Invalid credentials')
      const token = createJWT(user)
      res.json(token)
    } catch(err) {
      console.log(err)
      res.status(400).json(err)
    }
}

function checkToken() {
    // Just so that you don't forget how to use .then
    return usersAPI.checkToken()
      .then(dateStr => new Date(dateStr));
  }

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  } 