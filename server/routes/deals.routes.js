const express = require('express')
const router = express.Router()
const deals = require('../controllers/deals.controllers')



router.get('/title?', deals.getbyTitle)

router.get('/sale?', deals.getByPrice)


router.get('/', deals.getData)

module.exports = router