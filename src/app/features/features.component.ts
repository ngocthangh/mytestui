import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // $('.card .dimmer')
    // .dimmer({
    //   on: 'hover'
    // });
    $('.ui .bound .top .sticky')
      .sticky({
        offset: 100,
        // bottomOffset : 50,
        // context: '#context',
      });
    $('.dimmable .image')
      .transition({
        animation: 'pulse',
        reverse: false,
        interval: 200
      });

    // this function to change active in menu
    $('.ui .item').on('click', function () {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
    });
  }

  redirectToLogin() {
    this.router.navigate(['./login']);
  }

  clickMenu() {
    $('.ui.labeled.icon.sidebar')
      .sidebar('toggle');
  }

  kid() {
    this.router.navigate(['./kid']);
  }

}
