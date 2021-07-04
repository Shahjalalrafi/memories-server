const { postContoller, createContoller } = require('../Contollers/Post')

const router = require('express').Router()

router.get('/', postContoller)
router.get('/', createContoller)

module.exports = router