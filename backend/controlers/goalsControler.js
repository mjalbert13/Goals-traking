// Get Goals
//  Route  GET /api/goals
// Access Private
const getGoals = (req, res)=>{
    res.status(200).json({message:'Get Goals'})
}
// Set Goals
//  Route  POST /api/goals
// Access Private
const postGoals = (req, res)=>{
    res.status(200).json({message:'Set Goals'})
}
// Update Goals
//  Route  PUT /api/goals/:id
// Access Private
const putGoals = (req, res)=>{
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}
// Delete Goals
//  Route  Delete /api/goals/:id
// Access Private
const deleteGoals = (req, res)=>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    putGoals,
    postGoals,
    deleteGoals,
}