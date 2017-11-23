import { Injectable } from '@angular/core';
import { 
  Http, 
  Response,
  RequestOptions,
  Headers} from '@angular/http';
import { MovieItem} from './_models/index';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ImdbService {

  constructor(private http: Http){
  }
  getAll(): Observable<MovieItem[]>{
    console.log('hello, getting data...')
    return this.http.get('http://127.0.0.1:8000/what-is-popular/')
        .map((res:Response) => 
        {
            // console.log((<any>response.json()))
            return (<any>res.json()).map(item => {
                // console.log(item);
                return new MovieItem({
                    _index: item.idx,
                    _title: item.title,
                    _movieId: item.movie_id,
                    _genres: item.genres,
                    _directors: item.directors,
                    _writers: item.writers,
                    _description: item.description,
                    _year: item.year,
                    _countries: item.countries,
                    _release: item.release,
                    _runtime: item.runtime,
                    _rating: item.rating,
                    _keywords: item.keywords,
                    _poster: item.poster,
                    _slate: item.slate,
                    _actors: item.actors
                    
                });
            });
        } 
        )
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
