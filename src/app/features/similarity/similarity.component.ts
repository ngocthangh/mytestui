import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slide-similarity').slick({
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
