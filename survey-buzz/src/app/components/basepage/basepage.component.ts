import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basepage',
  templateUrl: './basepage.component.html',
  styleUrls: ['./basepage.component.css']
})
export class BasepageComponent implements OnInit {

  title: string = 'Home Page'
  constructor() { }

  ngOnInit(): void {
  }

}
