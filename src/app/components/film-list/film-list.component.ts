import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  public films: Film[];
  public films$: Observable<Film[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.films$ = this.filmService.getFilms()
      .pipe(map(films => films.sort((film1, film2) => film1.episode_id - film2.episode_id))); // sort in episode order
  }
}
