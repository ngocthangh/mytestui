import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $('.ui.vertical')
    .sidebar('toggle');
  }
  flipRight(){
    $('.shape').shape('flip right');
  }
  flipLeft(){
    $('.shape').shape('flip left');
  }
}
