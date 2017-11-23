import { Component, OnInit, Input } from '@angular/core';
import { MovieItem} from '../../_models/index';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor() { }
  @Input() item: MovieItem;
  ngOnInit() {
  }

}
