import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetSurvey(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        Surveyid: res['Surveyid'],
        Surveyname: res['Surveyname'],
        SurveyQuestion: res['SurveyQuestion'],
        SurveyAnswer: res['SurveyAnswer'],
      });
    });

    this.updateForm = this.formBuilder.group({
      Surveyid: [''],
      Surveyname: [''],
      SurveyQuestion: [''],
      SurveyAnswer: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService.updateSurvey(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/survey-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
