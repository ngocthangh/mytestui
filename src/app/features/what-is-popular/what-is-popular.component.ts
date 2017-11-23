import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieItem} from '../../_models/index';
import { MovieItemComponent} from '../movie-item/movie-item.component';
import {ImdbService} from '../../imdb.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-what-is-popular',
  templateUrl: './what-is-popular.component.html',
  styleUrls: ['./what-is-popular.component.css']
})
export class WhatIsPopularComponent implements OnInit {
  myList: Array<MovieItem>;
  constructor(private imdbService: ImdbService) { }

  ngOnInit() {
    this.imdbService.getAll()
    .subscribe(movies => this.myList = movies);
  }
  AfterViewInit(){
    $('.slide-what-is-popular').slick({
      //lazyLoad: 'ondemand',
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
