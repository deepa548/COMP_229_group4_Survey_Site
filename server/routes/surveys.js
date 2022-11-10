
// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const surveys = require("../models/surveys");

// define the Survey model
let survey = require("../models/surveys");

/* GET Survey List page. READ */
router.get("/", (req, res, next) => {
  // find all Survey in the Survey collection
  survey.find((err, surveys) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("surveys/index", {
        title: "Surveys",
        surveys: surveys,
      });
    }
  });
});

//  GET the Survey Details page in order to add a new Survey
router.get("/add", (req, res, next) => {
  res.render("surveys/add", { title: "Add Survey"});       
});

// POST process the Survey  Details page and create a new Survey  - CREATE
router.post("/add", (req, res, next) => {
  let newsurvey = survey({
    "Surveyid":req.body.Surveyid,
    "Surveyname":req.body.Surveyname,
    "SurveyQuestion":req.body.SurveyQuestion,
    "SurveyAnswer":req.body.SurveyAnswer
  });
  survey.create(newsurvey, (err, survey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the Survey
      res.redirect("/surveys");
    }
  });
});

// GET the Survey  Details page in order to edit an existing Survey
router.get("/details/:id", (req, res, next) => {
  let id = req.params.id;

  survey.findById(id, (err, surveylisttoedit) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //show the edit view
        res.render("surveys/details", { title: "Edit Survey", surveys: surveylisttoedit});  // passing data from findById function to Survey variable
      }
    });
});

// POST - process the information passed from the details form and update the document
router.post("/details/:id", (req, res, next) => {
  let id = req.params.id

  let updatesruvey = survey({
      "_id": id,
      "Surveyid":req.body.Surveyid,
      "Surveyname":req.body.Surveyname,
      "SurveyQuestion":req.body.SurveyQuestion,
      "SurveyAnswer":req.body.SurveyAnswer
    });
    survey.updateOne({ _id: id }, updatesruvey, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh the Survey
        res.redirect("/surveys");
      }
    });
});

// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  survey.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        //refresh Survey
        res.redirect("/surveys");
      }
    });
});

module.exports = router;
