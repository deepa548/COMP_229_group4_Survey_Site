import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey (1, 101, 'Candy', "Do you like Candy?", "Yes"),
        new Survey (2, 102, 'Pen', "Do you like Pen?", "No"),
        new Survey (3, 103, 'Money', "Do you like Money?", "Yes"),
    ];
    getSurveys(): Observable<Survey[]> {
        return from([this.surveys]);
    }
}