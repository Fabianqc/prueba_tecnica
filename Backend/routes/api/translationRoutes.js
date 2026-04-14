const express = require('express');
const router = express.Router();
const translationController = require('../../controllers/translationController');

router.get('/:lang', translationController.getTranslations);

module.exports = router;