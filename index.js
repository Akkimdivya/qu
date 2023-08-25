import fetch from "node-fetch";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/PMS");
new mongoose.Schema({
    base_unit: {
        type: String,
        required: true
    },
    quote_unit: {
        type: String,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    high: {
        type: Number,
        required: true
    },
    last: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    open: {
        type: Number,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    sell: {
        type: Number,
        required: true
    },
    buy: {
        type: Number,
        required: true
    },
    low: {
        type: Number,
        required: true
    },
    at: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);

async function getpost() {
    const myData = await fetch("https://jsonplaceholder.typicde.com/posts")
    const response = await myData.json();
    
}
getpost()