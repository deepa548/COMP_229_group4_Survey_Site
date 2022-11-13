const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a model class
let Surveys = new Schema(
    {
        Surveyid: {},
        Surveyname: {
            type: String,
        },
        SurveyQuestion: {
            type: String,
        },
        SurveyAnswer: {
            type: String,
        }
    },
    {
        collection: "survey",
    }
);

module.exports = mongoose.model("Surveys", Surveys);
