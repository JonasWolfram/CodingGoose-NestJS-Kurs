'use strict';

export interface Movie {
  id: number;
  name: string;
  director: string;
  lenght: number;
  genre: Genre;
}

export enum Genre {
  Action = 1,
  Comedy = 2,
  Drama = 3,
  Horror = 4,
  Thriller = 5,
}
