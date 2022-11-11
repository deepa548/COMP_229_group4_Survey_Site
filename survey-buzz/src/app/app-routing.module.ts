import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSurveyComponent } from './components/add-survey/add-survey.component';
import { SurveyDetailComponent } from './components/survey-detail/survey-detail.component';
import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { BasepageComponent } from './components/basepage/basepage.component';

const routes: Routes = [
  {path: '', redirectTo: '/basepage', pathMatch: 'full'},
  {path: 'basepage', component:BasepageComponent},
  { path: 'survey-list', component: SurveyListComponent },
  { path: 'add-survey', component: AddSurveyComponent },
  { path: 'edit-survey/:id', component: SurveyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
