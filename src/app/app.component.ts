import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';
import { LogInService } from './services/log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
public loginService:LogInService,
public alertService:AlertService,
public router:Router

  ) {}

  ngOnInit() {

   
  }
}
