const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a model class
let Surveys = new Schema(
    {
      Surveyid: {},
      Surveyname: {
        type: String,
      },
      CreatedDate: {
        type: String,
      },
      ExpiryDate: {
        type: String,
      },
      SurveyQuestion1: {
        type: String,
      },
      SurveyAnswer1: {
        type: String,
      },
      SurveyQuestion2: {
        type: String,
      },
      SurveyAnswer2: {
        type: String,
      },
      SurveyQuestion3: {
        type: String,
      },
      SurveyAnswer3: {
        type: String,
      }
    },
    {
      collection: "survey",
    }
  );
  
  module.exports = mongoose.model("Surveys", Surveys);
  