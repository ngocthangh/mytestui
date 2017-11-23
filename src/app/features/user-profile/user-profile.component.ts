import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slide-user-profile').slick({
      dots: true,
      infinite: true,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      variableWidth: true,
      autoplaySpeed: 3000,
      // arrows:true,
      // fade:true,
      // nextArrow:'<button>Next</button>',
      // prevArrow: '<div class="ui red basic mini button"  ><i class="long arrow left icon"></i></div>',
    });
  }

}
