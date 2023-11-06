# Development Guide

Development Guide for Monorepo Angular Project with Capacitor and Tailwind CSS

## Table of Contents

- [Development Guide](#development-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [What is a Monorepo?](#what-is-a-monorepo)
  - [What is Capacitor?](#what-is-capacitor)
  - [What is Tailwind CSS?](#what-is-tailwind-css)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Project Setup](#project-setup)
    - [Auth0 Configuration](#auth0-configuration)
  - [Running and Building Applications](#running-and-building-applications)
    - [Development Server](#development-server)
    - [Build a project](#build-a-project)
  - [Adding New Applications](#adding-new-applications)
  - [Project Code scaffolding](#project-code-scaffolding)
  - [Adding project-specific dependencies](#adding-project-specific-dependencies)
  - [Sharing components between projects](#sharing-components-between-projects)
  - [Setup and Run Capacitor Apps](#setup-and-run-capacitor-apps)
    - [Setup Capacitor for existing Angular App](#setup-capacitor-for-existing-angular-app)
    - [Test Capacitor App](#test-capacitor-app)
    - [Building and Publishing](#building-and-publishing)
  - [Conclusion](#conclusion)

## Introduction<a name="introduction"></a>

Welcome to the development guide for our Monorepo Angular project that combines the power of Capacitor for native app development and Tailwind CSS for styling. This guide will help you set up the project, run applications, and add new ones to the Monorepo.

This monorepo project is currently set up for demonstration purpose.

## What is a Monorepo?<a name="what-is-a-monorepo"></a>

A Monorepo (Monolithic Repository) is a version control system where multiple projects or components are stored in a single, unified version control repository. We chose this approach to simplify project management and promote code reuse across different applications within the repository, this helps maintain consistency and reduces code duplications.

## What is Capacitor?<a name="what-is-capacitor"></a>

Capacitor is a cross-platform native runtime that allows you to build web-based applications (using web technologies like HTML, CSS and JavaScript) and deploy them as native apps on multiple platforms. In our "traveller-app" application, we use Capacitor to bridge the gap between Angular app and native device features.

## What is Tailwind CSS?<a name="what-is-tailwind-css"></a>

Tailwind CSS is a utility-first CSS framework that makes styling easy and highly customizable. It's a fundamental part of our project for creating beautiful and responsive user interfaces.

## Getting Started<a name="getting-started"></a>

Let's begin by setting up your development environment.

### Prerequisites<a name="prerequisites"></a>

Before you start, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

Note. The Angular workspace was set up at the root of the monorepo directory using Angular CLI version 16.2.4.

### Project Setup<a name="project-setup"></a>

1. Clone the Monorepo repository to your local machine:
   `git clone <repository_url>`
2. Navigate to the root of monorepo directory
   `cd frontier-frontend`

3. Install global dependencies
   `npm install`

4. Install project-specific dependencies (if there are any)
   e.g. "traveller-app" has project specific dependencies, therefore, you need to install them by Running

   - `cd projects/traveller-app`
   - `npm install`

   Note. you might need to restart VSCode if you encounter issues of not being able to find/resolve a particular module.

### Auth0 Configuration<a name="Auth0-configurations"></a>

In this "traveller-app" demo project, we are using Auth0 for authentication and authorisation, you will need to update the Auth0 domain and client Id with those from your Auth0 tenant for this applicaiton.

- create a new application from your Auth0 tenant dashboard (if you have not done this previously),
- Set "Allowed Callback URLs", "Allowed Logout URLs", "Allowed Web Origins" to include "http://localhost:4200/" from your Auth0 application dashboard
- Update "domain", "clientId" setting in the app component (`app.module.ts` within the "traveller-app" project directory).
  {
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>",
  }

## Running and Building Applications<a name="running-and-building-applications"></a>

To run an angular application within the monorepo structure, just need to navigate to the root of the monorepo directory, and then specify which project to run within the `ng serve` and `ng build` commands.

### Development Server<a name="development-server"></a>

To serve a specific application, run `ng serve [project-name]` command at the root of monorepo directory:

e.g. `cd frontier-frontend`
`ng serve traveller-app`

This will start a local development server at `http://localhost:4200/`

### Build a project<a name="build-a-project"></a>

To build a specific Angular project, run `ng build [project-name]` command at root of Monorepo directory:

e.g. `ng build traveller-app`

Note. For production build, just include the `--prod` flag in the ng build command.
e.g. `ng build traveller-app --prod`

The production-ready files will be generated in the "dist/[project-name]" directory.

## Adding New Applications<a name="adding-new-applications"></a>

To add a new project into the monorepo workspace, just run `ng generate application [project-name]` command at the root of the monorepo directory.
e.g. `ng generate application employer-portal`. This will add a new Angular application called "employer-portal" into the monorepo workspace.

Similarily, you can also add a new Angular library project into the monorepo workspace by running `ng generate library [library-name]` at the root of the monorepo directory.
e.g. `ng g lib shared-ui-components --project-root=libraries/shared/ui-components`. This comand will create a new Angular library project called "shared-ui-components" into the "libraries/shared/ui-components" subfolder.

Note. you should be able to see the newly created projects under the `projects` section within the `angular.json` file which is located at the root of the monorepo workspace.

## Project Code scaffolding<a name="project-code-scaffolding"></a>

To generate a new module|component|service|interface|enum|guard into an angular application,
just run `ng generate module|component|pipe|service|guard|interface|enum [name] --project=[project-name] ` command at the root of monorepo directory.

Note.

- remember to include the "--project" flag in the command, to specify which project this new Angular asset (module|component|pipe|service|guard|interface|enum) belongs to.

For example, run:
`ng g c components/auth-button --project=traveller-portal`
this command will generate a new component called "auth-button" within the "components" subfolder within the "traveller-portal" applicaiton.

## Adding project-specific dependencies<a name="adding-project-specific-dependencies"></a>

Although by default all the dependencies will be installed and managed at the root level of the monorepo, we can also add project-specific dependencies at each project level.
Steps:

- Navigate to the root of a target project, e.g. `cd projects/traveller-app`
- Initialize a new 'package.json' file, by running `npm init -y`
- Install any dependencies you want to add for this project only by running `npm install [package-name]`
- Add `.gitignore` file at root of this project and set ignore rules, e.g. add `/node_modules` into the `.gitignore` file to ignore committing the project-level "node_modules" to git repository.

## Sharing components between projects<a name="sharing-components-between-projects"></a>

Within monorepo workspace, it is very easy to share components, services between projects.

Steps to follow:

Step1: Create a shared library
Create a new library project within the monorepo workspace by running `ng generate library [lib-name] --project-root=[target-path-to-the-library-root] --standalone`

Note. - "--standalone" flag is optional, if you don't want to have NgModule for this library, then add the "--standalone" flag

e.g. `ng g lib shared-ui-components --project-root = libraries/shared/ui-components`,
this command will generate a new library called "shared-ui-components", and place it at the "libraries/shared/ui-components" directory.

Step2: Configure the library
Inside the library's source code, you can create components, services, and other code that you want to share with other projects within the monorepo.

e.g. `ng generate component button --project=shared-ui-components`
this command will generate a new component called "button" within the "shared-ui-components" Angular library project.

Step3: Export the library
In your library's `public-api.ts` file, export the components, services, and symbols you want to make available for use in other projects.
For example, in the "shared-ui-components" library project, we exported following components:

export _ from './lib/shared-ui-components.service';
export _ from './lib/shared-ui-components.component';
export _ from './lib/shared-ui-components.module';
export _ from './lib/card/card.component'; // Re-export the CardComponent
export \* from './lib/button/button.component'; // Re-export the ButtonComponent

Step4: Build the library

Build the shared library project at the root of monorepo directory, by running `ng build [library-name]` command.
e.g. `ng build shared-ui-components` - Note.
Need to build the shared library before we can use it in other projects, otherwise, in VSCode, it will complain not being able to find/resolve the "shared-ui-components" module.

Step5: Import and use the library

Import the shared library module into the `app.module.ts` of the project (e.g. traveller-portal) that wants to use the shared components. And then use the shared components in other component template.

e.g. In the "traveller-portal" project, we import the `shared-ui-components` module into the app module,

    	import { SharedUiComponentsModule } from 'shared-ui-components';
    	@NgModule({
    	  declarations: [AppComponent],
    	  imports: [BrowserModule, AppRoutingModule, SharedUiComponentsModule],
    	  providers: [],
    	  bootstrap: [AppComponent],
    	})
    	export class AppModule {}

and then use the 'button' shared component in the app component template:
<lib-button label="Next"></lib-button>

## Setup and Run Capacitor Apps<a name="setup-and-run-capacitor-apps"></a>

### Setup Capacitor for existing Angular App<a name="setup-capacitor-app"></a>

### Test Capacitor App<a name="test-capacitor-apps"></a>

### Building and Publishing<a name="build-and-publish-capacitor-app"></a>

## Conclusion<a name="conclusion"></a>
