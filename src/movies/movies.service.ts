import { Injectable } from '@nestjs/common';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  // Methode zum erzeugen von Movie Einträgen
  // Die Methode nimmt einen Movie (Singular -> Datentyp) entgegen und
  // pusht ihn an das Ende des Arrays movies (Plural -> Array)
  // Anmschließend Rückgabe der movie.id
  createMovie(movie: Movie): number {
    this.movies.push(movie);
    return movie.id;
  }

  // Methode um uns das Array Movie[] anzeigen
  // zu lassen.
  readMovies(): Movie[] {
    return this.movies;
  }
}
