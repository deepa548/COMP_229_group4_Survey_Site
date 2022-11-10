import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from '../model/survey.repository';

@Component({
  selector: 'app-survey-buzz',
  templateUrl: './survey-buzz.component.html',
  styleUrls: ['./survey-buzz.component.css']
})
export class SurveyBuzzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
