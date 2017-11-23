import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
    $('.ui.form').form (
      {
        fields: {
          firstName: {
            rules: [{
              type: 'empty',
              prompt: 'Please enter Firstname'
            }]
          },
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

  redirectToLogin() {
    this.router.navigate(['./login']);
  }

  loginByGoogle() {
    window.open('http://google.com');
  }

  loginByFacebook() {
    window.open('http://facebook.com');
  }

}
