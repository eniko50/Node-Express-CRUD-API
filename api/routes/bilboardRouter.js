const express = require('express');
const router = express.Router();
const bilboardController = require('../controller/bilboardController');

router.post('/', bilboardController.create_a_bilboard)
      .get('/:id?', bilboardController.all_bilboards)
      .delete('/:id', bilboardController.delete_a_bilboard)
      .put('/:id', bilboardController.update_a_bilboard);

module.exports = router;