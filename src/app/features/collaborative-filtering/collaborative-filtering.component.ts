import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-collaborative-filtering',
  templateUrl: './collaborative-filtering.component.html',
  styleUrls: ['./collaborative-filtering.component.css']
})
export class CollaborativeFilteringComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    $('.slide-collaborative-filtering').slick({
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

    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }

}
