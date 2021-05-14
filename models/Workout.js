const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = mongoose.Schema({
    type: {
        type: String,
        trim: true,
        //required: 'Enter an excercise'
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
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
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;