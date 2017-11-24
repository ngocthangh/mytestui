import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieItem} from '../_models/index';
import {ImdbService} from '../imdb.service';
declare var $: any;
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  id: String;
  private sub: any;
  movie: MovieItem;
  constructor(private router: Router, private route: ActivatedRoute, private imdbService: ImdbService) { }

  ngOnInit() {
    // this function to change active in menu
    $('.ui .item').on('click', function () {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
    });
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log('Id get: ..............: ' + this.id)
      
   });
   this.imdbService.getMovieById(this.id)
   .subscribe(movie => this.movie = movie);
   console.log(this.movie);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
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
