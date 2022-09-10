const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dogSchema = new Schema({
    name: String,
    isMale: {
        type: Boolean,
        default: false,
    },
    isFemale: {
        type: Boolean,
        default: false
    },
    color: { 
        type: String,
        default: 'Black',
        enum: ['Black', 'Gray', 'White', 'Orange', 'Pink']
    },
    siblings: {type: [{type: Schema.Types.ObjectId, ref: 'Dog'}]},
    aggressive: {
        type: Boolean,
        default: false
    },
    petType: {
        type: String,
        enum: ['Cat', 'Dog', 'Gangster Hamster', 'Parot', 'Snake']
    }
}, {
    timestamps: true
})

const Dog = model('Dog', dogSchema);
module.exports = Dog;