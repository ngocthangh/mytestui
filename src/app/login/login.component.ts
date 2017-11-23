import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
    $('.ui.form').form (
      {
        fields: {
          emailAddress: {
            rules: [{
              type: 'regExp',
              value: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'
            }]
          },
          password: {
            rules: [
              {
                type: 'minLength[6]',
                prompt: 'Enter password at least 6 characters'
              },
              {
                type   : 'empty',
                prompt : 'Please enter a password'
              }
            ]
            }
        }
      }
    );
  }

  redirectToHomePage() {
    this.router.navigate(['./home']);
  }

  loginByGoogle() {
    window.open('http://google.com');
  }

  loginByFacebook() {
    window.open('http://facebook.com');
  }

  forGotPassword() {
    this.router.navigate(['./forgotpassword']);
  }

  redirectToSignUp() {
    this.router.navigate(['./signup']);
  }

}
