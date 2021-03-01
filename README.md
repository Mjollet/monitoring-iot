# Upciti

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.
Start the project with `npm install` .

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Launch Docker
Run `docker build -t av-app-multistage-image .` to  create a Docker image of the project.
Run the app with `docker run --name av-app-multistage-container -d -p 8888:80 av-app-multistage-image`.
Launch the back-end repository called quizz with `docker-compose up`.
Navigate to `http://localhost:8888/`, you will get a front-end app connect to your back-end.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


