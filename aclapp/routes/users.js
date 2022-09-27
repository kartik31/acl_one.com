var express = require('express');
var router = express.Router();
var userController = require('../controllers/users')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function (req, res, next) {
  try {
    //call create user controller method
    let userData = req.body
    if (!userData.username)
      res.status(400).json({ message: "Username Required " })
    else if (!userData.password)
      res.status(400).json({ message: "Password Required" })
    else if (!userData.role)
      res.status(400).json({ message: "User Role Required" })
    else {
      let data = await userController.signup(userData)
      res.status(200).json({message:data})
    }
  }

  catch (err) {
    res.status(500).json(err)
  }

});

router.post('/login', async function (req, res, next) {
  try {
    //call login user controller method
    let userData = req.body
    if (!userData.username)
      res.status(400).json({ message: "Username Required " })
    else if (!userData.password)
      res.status(400).json({ message: "Password Required" })
    else {
      let data = await userController.login(userData)
      res.status(200).json({message:data})
    }
  }

  catch (err) {
    res.status(500).json(err)
  }

});
module.exports = router;
