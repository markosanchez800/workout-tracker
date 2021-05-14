const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = mongoose.Schema({
    date:{
        type: Date,
        default: Date.now
    },
    excercises:[{
    type: {
        type: String,
        trim: true,
        required: 'Enter an excercise',
    },
    name: {
        type: String,
        trim: true,
        required: 'Enter a name',
    },
    duration: {
        type: Number,
        required: 'Enter a duration',
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