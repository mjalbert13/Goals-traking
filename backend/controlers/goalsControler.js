const asyncHandler = require('express-async-handler')

// Get Goals
//  Route  GET /api/goals
// Access Private
const getGoals =asyncHandler( async(req, res)=>{
    res.status(200).json({message:'Get Goals'})
})
// Set Goals
//  Route  POST /api/goals
// Access Private
const postGoals = asyncHandler( async(req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text feild')
    }

    res.status(200).json({message:'Set Goals'})
})
// Update Goals
//  Route  PUT /api/goals/:id
// Access Private
const putGoals =asyncHandler( async(req, res)=>{
    res.status(200).json({message:`Update Goal ${req.params.id}`})
})
// Delete Goals
//  Route  Delete /api/goals/:id
// Access Private
const deleteGoals = asyncHandler( async(req, res)=>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    putGoals,
    postGoals,
    deleteGoals,
}