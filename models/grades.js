import mongoose from 'mongoose';

const gradesSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    scores: [{
        text: String,
        score: Number,
        
    }],
    class_id: {
        type: Number,
        required: true
    },
    learner_id: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Grade", gradesSchema);