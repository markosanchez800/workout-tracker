const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = mongoose.Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises:[{
    type: {
        type: String,
        required: 'Enter an excercise',
    },
    name: {
        type: String,
        required: 'Enter a name',
    },
    duration: {
        type: Number,
        required: 'Enter a duration',
    },
    distance: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    }]
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;