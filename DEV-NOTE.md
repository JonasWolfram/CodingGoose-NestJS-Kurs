# Coding Goose NestJS Kurs

## Resume

[00:14:35](https://www.youtube.com/watch?v=9xlfZUYiO4g) <- Zuletzt bearbeitet am **13.06.2022**

- Projekt eingerichtet.
- Folgende Dinge angelegt:

  ```
  nest g module movies
  nest g service movies
  nest g controller movies
  ```

  Dazu noch stellvertretend für anstatt einer Datenbank eine Datei -> movie.ts
  mit folgendem Inhalt:

  ```
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
  ```

  .. resume soon Junge
