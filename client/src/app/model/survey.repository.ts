import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasources';

@Injectable()
export class SurveyRepository {
    private surveys: Survey[] = [];
    private surveynames: string[] = [];

    constructor(private dataSource: StaticDataSource){
        dataSource.getSurveys().subscribe(data => {
            this.surveys = data;
            this.surveynames = data.map(p => p.Surveyname)
                .filter((a, index, array) => array.indexOf(a) === index).sort();
        });
    }

    getSurveys(Surveyname: any = null): Survey[]
    {
        return this.surveys
            .filter(p => Surveyname == null || Surveyname === p.Surveyname);
    }

    getSurvey(id: number): Survey[]
    {
        return this.surveys
            .filter(p => p._id === id);
    }
  
    getSurveyNames(): string[]
    {
      return this.surveynames;
    }
}