const personController = require('../../controller/personController')
const router = require('express').Router()

router.get('/', personController.getPersons)

router.post('/sort1', personController.getSort)

module.exports = router