var express = require('express');
var router = express.Router();
var contact = require('../controller/contactcontroller');

router.post('/', contact.addcontact);
router.get('/', contact.getcontact);
router.delete('/:id', contact.deletecontact);
router.patch('/:id', contact.updatecontact);
router.get('/:name', contact.getcontactById);
module.exports = router;
