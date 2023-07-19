/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
});

GenreSchema.virtual("url").get(function get() {
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);
