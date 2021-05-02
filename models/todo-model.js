const {Schema, model} = require("mongoose");
const todo = new Schema(
    {
        title: {
            type: String,
            required: "this field is mandatory",
            trim: true,
        },
        done: {
            type:Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }

);
const Todo = model('Todo',todo);
module.exports={Todo};