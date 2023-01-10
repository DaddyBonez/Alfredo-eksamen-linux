const { Router } = require('express');
const Controller = require('../controllers/controller');

router = Router()

router.get('/about',Controller.about_get)
router.get('/map',Controller.map_get)
router.post('/owner',Controller.owner_post)


module.exports = router