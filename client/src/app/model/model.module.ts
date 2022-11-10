import { NgModule } from '@angular/core';
import { SurveyRepository } from './survey.repository';
import { StaticDataSource } from './static.datasources';

@NgModule({
    providers: [SurveyRepository, StaticDataSource]
  })
  export class SurveyModule {}