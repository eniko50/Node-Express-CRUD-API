const express = require('express');
const router = express.Router();
const rentConroller = require('../controllers/rentController');

router.get('/', rentConroller.get_list_of_rents)
      .get('/:id', rentConroller.get_one_rent)
      .post('/add', rentConroller.create_a_rent)
      .put('/:id/update', rentConroller.update_a_rent)
      .delete('/:id/delete', rentConroller.delete_a_rent)

module.exports = router;