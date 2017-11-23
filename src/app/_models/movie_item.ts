export class MovieItem{
    _index: number;
    _movieId: string;
    _title: string;
    _genres: Array<string>;
    _directors: Array<string>;
    _writers: Array<string>;
    _actors: Array<string>;
    _description: string;
    _year: string;
    _countries: Array<string>;
    _release: string;
    _runtime: string;
    _rating: number;
    _keywords: Array<string>;
    _poster: string;
    _slate: string;

    constructor(obj?: any){
        this._index = obj && obj._index || null;
        this._movieId = obj && obj._movieId || null;
        this._title = obj && obj._title || null;
        this._genres = obj && obj._genres || null;
        this._directors = obj && obj._directors || null;
        this._writers = obj && obj._writers || null;
        this._description = obj && obj._description || null;
        this._year = obj && obj._year || null;
        this._countries = obj && obj._countries || null;
        this._release = obj && obj._release || null;
        this._runtime = obj && obj._runtime || null;
        this._rating = obj && obj._rating || null;
        this._keywords = obj && obj._keywords || null;
        this._poster = obj && obj._poster || null;
        this._slate = obj && obj._slate || null;
        this._actors = obj && obj._actors || null;
    }

    getLink(): string {
        if(this._poster ==='[]'){
            return '';
        }
        return this._poster.replace('[\'','').replace('\']','');
    }

}