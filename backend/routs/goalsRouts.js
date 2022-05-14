const express = require('express')
const router = express.Router()
const { getGoals, postGoals, putGoals, deleteGoals } = require('../controlers/goalsControler')


router.route('/').get(getGoals).post(postGoals)
router.route('/:id').delete(deleteGoals).put(putGoals)


module.exports = router