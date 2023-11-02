# MonorepoStructureSingle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Monorepo Structure

This project is organised in the Monorepo structure, basically, all code, projects, libraries, and dependencies are managed in one central repository.

The root is the Angular workspace, any Anguar project or library project can be added onto the monorepo workspace by using Angular CLI.

For instance, to add a new project into the monorepo, you can run 'ng generate application [project-name]' at the root of the monorepo directory. Angular will auto add the new project into the "projects" session within the angular.json file.

Similarily, you can also add a new Angular library project by running 'ng generate library [library-name]' at the root of the monorepo directory.
e.g.
$ ng g lib shared-ui-components --project-root=libraries/shared/ui-components

This commands will create a new Angular Library project called "shared-ui-components" at the specific folder path as specified with the "--project-root" flag.

## Dependencies Installation

1. Install all shared dependencies at the root
   Run 'npm install' at root of monorepo will install all dependencies that can be shared across all projects. It will automatically create "node_modules" folder at the root of monorepo.

2. Install project-specific dependencies

Although by default all the dependencies will be installed and managed at the root level of the monorepo, we can also add project-specific dependencies at each project level by: - Naviaget to the directory of the Angular application within the monorepo,
e.g. '$ cd projects/traveller-app"

    - Initialize a new "package.json" by running `npm init -y`
      This command will generate a basic 'package.json' file with default values

    - Install project-specific dependencies using `npm install`
        run `npm install` will install all project-specific dependencies
        Install a specific package, run `npm install example-package`

Note. make sure to add a ".gitignore" at the project level as well to ignore commiting the project-level "node_modubles" to git repository.

## Code scaffolding

Run `ng generate component component-name --project=[project-name]` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Note.

- run the CLI commands at the root of monorepo directory
- "--project" flag allows us to specifiy which project the component will belong to.
  e.g. `ng g c components/auth-button --project=traveller-portal`
  this command will create an auth-button component under the "components" subdirectory within the "traveller-portal" application.

## Development server

Within the monorepo structure, to serve a specific project, run `ng serve [project-name]`
e.g. `ng serve traveller-app`.

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build a project

Run `ng build [project-name]` to build a specific project. The build artifacts will be stored in the `dist/[project-name]` directory.

e.g. `ng build traveller-app`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
