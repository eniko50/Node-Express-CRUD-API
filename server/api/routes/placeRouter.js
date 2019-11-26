const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

router.get('/', placeController.get_list_of_places)
      .get('/:id', placeController.get_one_place)
      .put('/:id/update', placeController.update_a_place)
      .delete('/:id/delete', placeController.delete_a_place)
      .post('/add', placeController.create_a_place)
      .post('/:id/bilboards/add', placeController.add_a_bilboard)
      .put('/:id/bilboards/:id/update', placeController.update_a_bilboard)
      .delete('/:id/bilboards/:id/delete', placeController.delete_a_bilboard)
      
module.exports = router;