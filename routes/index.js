var express = require('express');
var router = express.Router();
var messageModel = require('../models/message')

router.post('/message', async function (req, res, next) {
  var error = []
  var result = false
  var messageSaved = null

// ----- Enregistrement des messages ------
  var newMessage = await messageModel({
    name: req.body.nameFromFront,
    email: req.body.emailFromFront,
    message: req.body.messageFromFront
  })

  // -------- Gestion des erreurs ---------
  if (req.body.nameFromFront < 2) {
    error.push('Nom trop court')
    result = false
  }
  if (req.body.emailFromFront < 6) {
    error.push('Email trop court')
    result = false
  }
  if (req.body.messageFromFront < 3) {
    error.push('Message trop court')
    result = false
  }

  // -------- Si aucune erreur dans tableau = enregistrement dans la BDD ---------
  if (error.length === 0) {
    var messageSaved = await newMessage.save()
    if (messageSaved) {
      result = true
    }
  }

  console.log(newMessage)
  console.log(result)
  console.log(error)
  
  // -------- Renvoi json vers front ---------
  res.json({ messageSaved, result, error });
});

module.exports = router;
