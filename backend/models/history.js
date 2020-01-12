const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    operand1 : {type: String, required: true},
    operand2 : {type: String, required: true},
    operator : {type: String, required: true},
    result   : {type: String, required: true},
},{
    timestamps: true,
});

const History = mongoose.model('History',historySchema);

module.exports = History;