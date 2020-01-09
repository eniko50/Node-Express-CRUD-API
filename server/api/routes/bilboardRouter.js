const express = require('express');
const router = express.Router();
const bilboardController = require('../controllers/bilboardController');

router.get('/bilboards', bilboardController.get_list_of_bilboards)
      .get('/bilboards/:id', bilboardController.get_one_bilboard)
      .post('/places/:id/bilboards/add', bilboardController.create_a_bilboard)
      .put('/places/:id/bilboards/:id/update', bilboardController.update_a_bilboard)
      .delete('/places/:id/bilboards/:id/delete', bilboardController.delete_a_bilboard)

module.exports = router;