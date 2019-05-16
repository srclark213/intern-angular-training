import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Film } from '../models/film';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<Film[]> {
    return of(testData);

    return this.http.get<SwapiFilmResponse>('https://swapi.co/api/films/').pipe(map(response => response.results));
  }
}

interface SwapiFilmResponse {
  results: Film[];
}

var testData: Film[] = [
  {
      "title": "A New Hope",
      "episode_id": 4,
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25"
  },
  {
      "title": "Attack of the Clones",
      "episode_id": 2,
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2002-05-16"
  },
  {
      "title": "The Phantom Menace",
      "episode_id": 1,
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "1999-05-19"
  },
  {
      "title": "Revenge of the Sith",
      "episode_id": 3,
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2005-05-19"
  },
  {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "director": "Richard Marquand",
      "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
      "release_date": "1983-05-25"
  },
  {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "director": "Irvin Kershner",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1980-05-17"
  },
  {
      "title": "The Force Awakens",
      "episode_id": 7,
      "director": "J. J. Abrams",
      "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
      "release_date": "2015-12-11",
  }
];