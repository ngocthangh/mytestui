import {Component, OnInit} from '@angular/core';
import '../../../assets/js/jssor.slider-26.5.0.min.js';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})

export class MainViewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

    $('.imageSlider').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      variableWidth: false,
      autoplaySpeed: 5000,
      arrows: true,
      // fade:true,
      // nextArrow: '<div class="ui red basic mini button"><i class="long arrow right icon"></i></div>',
      // prevArrow: '<div class="ui red basic mini button"><i class="long arrow left icon"></i></div>',
    });

  }
  redirectToSignUp() {
  this.router.navigate(['./SignUp']);
  }
}
