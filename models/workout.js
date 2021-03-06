const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: "Day is required",
  },
  exercises: [
    {
      name: {
        type: String,
        trim: false,
        required: "Name is required",
      },

      type: {
        type: String,
        trim: false,
        required: "Type is required",
      },
      weight: {
        type: Number,
        required: false,
      },
      sets: {
        type: Number,
        required: false,
      },
      reps: {
        type: Number,
        required: false,
      },
      duration: {
        type: Number,
        required: "Duration is required",
      },
      distance: {
        type: Number,
        required: false,
      },
    },
  ],
},
{
  toJSON:{
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function (){
  return this.exercises.reduce((total, exercise)=>{
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
