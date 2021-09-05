const meet1 = require('./modules/meet1')
const router = require('express').Router()

router.use('/', meet1)

module.exports = router