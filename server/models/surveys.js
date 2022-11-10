//File Name: COMP229-F2022-MidTerm-301250548
//Author name: Deepa K
//Student id: 301250548
//Web app name: Faculty Information


let mongoose = require("mongoose");

// create a model class
let Surveys = mongoose.Schema(
  {
    Surveyid: Number,
    Surveyname: String,
    SurveyQuestion: String,
    SurveyAnswer: String,
  },
  {
    collection: "survey",
  }
);

module.exports = mongoose.model("Surveys", Surveys);
