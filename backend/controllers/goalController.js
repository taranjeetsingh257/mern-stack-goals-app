// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.json({message: 'Get Goals'})
}

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.json({message: 'Set Goal'})
}

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.json({message: `Update Goals ${req.params.id}`});
}

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.json({message: `Delete Goals ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}