import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../film.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  public films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms()
      .pipe(map(films => films.sort((film1, film2) => film1.episode_id - film2.episode_id))) // sort in episode order
      .subscribe(films => this.films = films);
  }

}
