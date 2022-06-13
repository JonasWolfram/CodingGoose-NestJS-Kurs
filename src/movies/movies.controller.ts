/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  createMovie(@Body() movie: Movie): number {
    return this.moviesService.createMovie(movie);
  }

  @Get()
  readMovies(): Movie[] {
    return this.moviesService.readMovies();
  }
}
