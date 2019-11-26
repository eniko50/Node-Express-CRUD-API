const express = require('express');
const router = express.Router();
const bilboardController = require('../controllers/bilboardController');

router.get('/', bilboardController.get_list_of_bilboards)
      .get('/:id', bilboardController.get_one_bilboard)
      
module.exports = router;