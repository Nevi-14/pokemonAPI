import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { LogInService } from 'src/app/services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  email:string = "";
  password:string = "";
  constructor(
    public router: Router,
    public loginService: LogInService,
    public alertService: AlertService
  ) { }

  ngOnInit() {
  }

  logIn() {
    console.log(this.email, this.password)
this.loginService.user.email = this.email;
this.loginService.user.password = this.password;
    if (this.loginService.user.email != null) {
      this.router.navigateByUrl('/home', { replaceUrl: true })
    } else {
      this.alertService.presentMessageAlert('App Restriction', 'Incorrect Credentials', 'Please try again!....');
      this.router.navigateByUrl('/log-in', { replaceUrl: true })
    }

  }
}
