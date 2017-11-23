import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-last-action',
  templateUrl: './last-action.component.html',
  styleUrls: ['./last-action.component.css']
})
export class LastActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slide-last-action').slick({
      dots: true,
      infinite: true,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      variableWidth: true,
      autoplaySpeed: 3000,
      // arrows:true,
      // fade:true,
      // nextArrow:'<button>Next</button>',
      // prevArrow: '<div class="ui red basic mini button"  ><i class="long arrow left icon"></i></div>',
    });


    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }

}
