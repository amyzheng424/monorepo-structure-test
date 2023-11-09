# Development Guide

A brief Development Guide for this Monorepo Angular Project.

# Table of Contents

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
  - [Adding New Projects](#adding-new-projects)
    - [Add new Angular Application](#add-new-angular-application)
    - [Add new library project](#add-new-library-project)
  - [Project Code scaffolding](#project-code-scaffolding)
  - [Adding project-specific dependencies](#adding-project-specific-dependencies)
  - [Sharing components between projects](#sharing-components-between-projects)
    - [Step1: Create a shared library](#step1-create-a-shared-library)
    - [Step2: Configure the library](#step2-configure-the-library)
    - [Step3: Export the library](#step3-export-the-library)
    - [Step4: Build the library](#step4-build-the-library)
    - [Step5: Import and use the library](#step5-import-and-use-the-library)
  - [Configure and Customise Tailwind CSS](#configure-and-customise-tailwind-css)
    - [Configure tailwind css](#configure-tailwind-css)
      - [step1: Add Tailwind directives to your Angular project](#step1-add-tailwind-directives-to-your-angular-project)
      - [step2: Configure source paths](#step2-configure-source-paths)
      - [step3: Use Tailwind CSS Classes](#step3-use-tailwind-css-classes)
    - [Customisations](#customisations)
  - [Setup and Run Capacitor Apps](#setup-and-run-capacitor-apps)
    - [Setup Capacitor for existing Angular App](#setup-capacitor-for-existing-angular-app)
    - [Test Capacitor App](#test-capacitor-app)
    - [Build and Publish](#build-and-publish)
    - [Distribution](#distribution)
  - [Conclusion](#conclusion)

## Introduction

Welcome to the development guide for our Monorepo Angular project, which combines the power of Capacitor for native app development and Tailwind CSS for styling. This comprehensive guide is crafted to assist you in effortlessly setting up the Monorepo project, running applications, and seamlessly adding new ones into the Monorepo Angular workspace.

This Monorepo project was initially set up for demonstration purposes, showcasing how the Monorepo workspace should be structured and how to work with Capacitor and Tailwind CSS. Notably, our development environment utilized Angular CLI v16.2.4, Capacitor v5.5.0, and Tailwind CSS v3.3.3, ensuring a contemporary and efficient development experience.

## What is a Monorepo?

A Monorepo (Monolithic Repository) is a version control system where multiple projects or components are stored in a single, unified version control repository. We chose this approach to simplify project management and promote code reuse across different applications within the repository, this helps maintain consistency and reduces code duplications.

## What is Capacitor?

Capacitor is a open-source cross-platform native runtime for web apps. It allows us to create web-based applications with JavaScript, HTML and CSS and deploy them as native apps on multiple platforms including iOS and Android. It also provides a set of APIs that allow developers to access native device features and functionalitiies, such as the camera, GPS, file system and more.

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that makes styling easy and highly customizable. It's a fundamental part of our project for creating beautiful and responsive user interfaces.

## Getting Started

Let's begin by setting up your development environment.

### Prerequisites

Before you start, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

Note. The Angular workspace was originally generated with following Angular CLI command:
`ng new frontier-frontend --create-application false`

This command created an empty Angular workspace called "frontier-frontend" with no initial application generated,
We set `--create-application` flag to false here, to inform Angular not to create any initial application.
All angular applications will be created using `ng generate application` command at a later time.

### Project Setup

1. Clone the Monorepo repository to your local machine:
   `git clone <repository_url>`

2. Navigate to the root of monorepo directory
   `cd frontier-frontend`

3. Install global dependencies
   `npm install` - Note. make sure you run this command at the root level of the monorepo directory.

4. Install project-specific dependencies (if there are any)
   e.g. "traveller-app" has project specific dependencies, therefore, you need to install them by Running

   - `cd projects/traveller-app`
   - `npm install`

   Note. you might need to restart VSCode if you encounter issues of not being able to find/resolve a particular module.

### Auth0 Configuration

In this "traveller-app" demo project, we are using Auth0 for authentication and authorisation, you will need to update the Auth0 domain and client Id with those from your Auth0 tenant for this applicaiton.

- create a new application from your Auth0 tenant dashboard (if you have not done this previously),
- Set "Allowed Callback URLs", "Allowed Logout URLs", "Allowed Web Origins" to include "http://localhost:4200/" from your Auth0 application dashboard
- Update "domain", "clientId" setting in the app component (`app.module.ts` within the "traveller-app" project directory).

  ```typescript
  AuthModule.forRoot({
      domain: '<YOUR AUTH0 DOMAIN>',
      clientId: '<YOUR AUTH0 CLIENT ID>',
      authorizationParams: {
      redirect_uri: window.location.origin + '/portal',
      },
  }),

  ```

## Running and Building Applications

To run an angular application within the monorepo structure, just need to navigate to the root of the monorepo directory, and then specify which project to run within the `ng serve` and `ng build` commands.

### Development Server

To serve a specific application, run `ng serve [project-name]` command at the root of monorepo directory:

e.g. run `cd frontier-frontend` and then `ng serve traveller-app`

This will start a local development server at `http://localhost:4200/`

### Build a project

To build a specific Angular project, run `ng build [project-name]` command at root of Monorepo directory: e.g. `ng build traveller-app`

For production build, just include the `--prod` flag in the ng build command. e.g. `ng build traveller-app --prod`

The `--prod` flag in the ng build command will instruct Angular CLI to build your angular aplication with optimizations for a production environment.
The production-ready files will be generated in the `dist/[project-name]` directory.

## Adding New Projects

### Add new Angular Application

To add a new project into the monorepo workspace, just run `ng generate application [project-name]` command at the root of the monorepo directory.

e.g. `ng generate application employer-portal`.
This will add a new Angular application called "employer-portal" into `projects` folder within the monorepo workspace.

### Add new library project

To add a new Angular library project into the monorepo workspace, just run `ng generate library [library-name]` at the root of the monorepo directory, you can specify the project root for this library project by adding the `--project-root` flag.

e.g. `ng g lib shared-ui-components --project-root=libraries/shared/ui-components`.
This comand will create a new Angular library project called "shared-ui-components" into the "libraries/shared/ui-components" subfolder.

Note. you should be able to see the newly created projects and their configurations in the `projects` section of the `angular.json` workspace configuration file.

## Project Code scaffolding

To generate a new module|component|service|interface|enum|guard into an angular application,
just run `ng generate module|component|pipe|service|guard|interface|enum [name] --project=[project-name] ` command at the root of monorepo directory.

Note.

- remember to include the "--project" flag in the command, to specify which project this new Angular asset (module|component|pipe|service|guard|interface|enum) belongs to.

For example, run:
`ng g c components/auth-button --project=traveller-portal`
this command will generate a new component called "auth-button" within the "components" subfolder within the "traveller-portal" applicaiton.

## Adding project-specific dependencies

Although by default all the dependencies will be installed and managed at the root level of the monorepo, we can also add project-specific dependencies at each project level.
Steps:

- Navigate to the root of a target project, e.g. `cd projects/traveller-app`
- Initialize a new 'package.json' file, by running `npm init -y`
- Install any dependencies you want to add for this project only by running `npm install [package-name]`
- Add `.gitignore` file at root of this project and set ignore rules, e.g. add `/node_modules` into the `.gitignore` file to ignore committing the project-level "node_modules" to git repository.

## Sharing components between projects

Within monorepo workspace, it is very easy to share components, services between projects.

Steps to follow:

### Step1: Create a shared library

Create a new library project within the monorepo workspace by running `ng generate library [lib-name] --project-root=[target-path-to-the-library-root] --standalone`

Note. - "--standalone" flag is optional, if you don't want to have NgModule for this library, then add the "--standalone" flag

e.g. `ng g lib shared-ui-components --project-root = libraries/shared/ui-components`,
this command will generate a new library called "shared-ui-components", and place it at the "libraries/shared/ui-components" directory.

### Step2: Configure the library

Inside the library's source code, you can create components, services, and other code that you want to share with other projects within the monorepo.

e.g. `ng generate component button --project=shared-ui-components`
this command will generate a new component called "button" within the "shared-ui-components" Angular library project.

### Step3: Export the library

In your library's `public-api.ts` file, export the components, services, and symbols you want to make available for use in other projects.

For example, in the "shared-ui-components" library project, we exported following components:

    ```typescript
    export * from "./lib/shared-ui-components.service";
    export * from "./lib/shared-ui-components.component";
    export * from "./lib/shared-ui-components.module";

    export * from "./lib/card/card.component"; // Re-export the CardComponent
    export * from "./lib/button/button.component"; // Re-export the ButtonComponent
    ```

### Step4: Build the library

Build the shared library project at the root of monorepo directory, by running `ng build [library-name]` command.
e.g. `ng build shared-ui-components` - Note.
Need to build the shared library before we can use it in other projects, otherwise, in VSCode, it will complain not being able to find/resolve the "shared-ui-components" module.

### Step5: Import and use the library

Import the shared library module into the `app.module.ts` of the project (e.g. traveller-portal) that wants to use the shared components. And then use the shared components in other component template.

e.g. In the "traveller-app" project, we imported the `shared-ui-components` module into the app module,

    ```typescript
        import { SharedUiComponentsModule } from 'shared-ui-components';
        @NgModule({
            declarations: [AppComponent],
            imports: [BrowserModule, AppRoutingModule, SharedUiComponentsModule],
            providers: [],
            bootstrap: [AppComponent],
        })
        export class AppModule {}
    ```

and then used the `button` component in the `shared-lib-demo` component template:

    ```html
    <lib-button label="Sample Button"></lib-button>
    ```

## Configure and Customise Tailwind CSS

We have already installed and initialized the Tailwind CSS at the global level, at the root of the Monorepo directory, you will find the `tailwind.config.js` configuration file, where you can customize the configurations as you need.

### Configure tailwind css

To get tailwind css work within your own angular application, you need to:

#### step1: Add Tailwind directives to your Angular project

Add Tailwind directives to your Angular project by importing following directives into the `styles.scss` file from the source folder `/src` of your application.

    ```typescript
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';

    ```

#### step2: Configure source paths

Update the `content` setting in the `tailwind.config.js` configuration file to include the source paths for your new application, currently already included content paths for traveller-app, employer-portal and traveller-portal.

    ```typescript
    module.exports = {
        content: [
            "./projects/traveller-app/src/**/*.{html, ts}",
            "./projects/employer-portal/src/**/*.{html, ts}",
            "./projects/traveller-portal/src/**/*.{html, ts}",
        ],
    }

    ```

Basically, the `content` paths setting here is to inform Taiwind CSS to scan all the .html, .ts files from the given paths for class names, and then generate all of the corresponding CSS for those styles.

For content configuration details, please refer to https://tailwindcss.com/docs/content-configuration.

#### step3: Use Tailwind CSS Classes

Use Tailwind CSS classes in your Angular project's HTML templates and components as you wish. For example:

    ```html
        <div class="bg-blue-500 text-white p-4">
            This is a div with Tailwind CSS styles.
       </div>
    ```

### Customisations

With Tailwind css, you can define your own custom color palette, screen breakpoints, typography etc within the `theme` section of the `tailwind.config.js` configuration file. If you want to keep the default theme and only want to expand it with some adittional custom styles, then add them into the `theme/extend` section of the configuration file.

For example, in the `tailwind.config.js` file, we have already added some additoanl colours into the `theme/extend` section.

You can further customise the configuration based on your project requirements. For details of adding custom styles, please view: https://tailwindcss.com/docs/adding-custom-styles

## Setup and Run Capacitor Apps

As mentioned previously, Capacitor is an open-source cross-platform runtime that enables us to build Web native apps for iOS and Android platforms using web technologies like HTML, CSS and JavaScript. We can also add Capacitor to our existing web projects. Here we will guide you on how to add Capacitor to your existing Angular project and get it up running on iOS and Andriod platforms.

For more details, please refer to the offical documentations from this link: https://capacitorjs.com/docs

### Setup Capacitor for existing Angular App

1.  Environment Setup

    If you need to create applications for iOS and Android, you will need to setup/install these dependencies:

    - Core requirement: NodeJS v16+
    - iOS requirements: macOS/Mac, XCode, XCode command Line Tools, Homebrew, Cocoapods
    - Android requirements: Android Studio, An Android SDK Tools installation.

    Please view this link for more details: https://capacitorjs.com/docs/getting-started/environment-setup

2.  Install Capacitor

    In terminal, navigate to your project folder,
    `cd projects/{project-name}`, e.g. `cd projects/traveller-app`

    Note: before moving on, make sure you have already had the project-specific `package.json` and `.gitignore` files at the root of your project folder.
    (Please refer to "#adding-project-specific-dependencies" section of this document for details if you have not).

    then run these commands:

    `npm i @capacitor/core` - install core package
    `npm i -D @capacitor/cli` - install cli for development

3.  Initialise Capacitor Config

    - Run `npx cap init` to initialise the capacitor project. This will create the `capacitor.config.ts` configuration file at your project folder.
    - Open up the configuration file, update the `webDir` setting to point to your production-ready web assets folder of your project.

    e.g.

    ```typescript
    const config: CapacitorConfig = {
      appId: "com.fragomen.travellerapp",
      appName: "traveller-app",
      webDir: "../../dist/traveller-app",
      server: {
        androidScheme: "https",
      },
    };
    ```

4.  Install Android and iOS platforms

    After the Capacitor core runtime is installed, you can install the Android and iOS platforms by running:
    `npm i @capacitor/android @capacitor/ios`

5.  Add Android and iOS projects

    Running following commands to create your Android and iOS projects for your native application.

    `npx cap add android`
    `npx cap add ios`

6.  Sync Project

    Once you've created your native projects, you can sync your web application to your native project by running the following command:
    `npx cap sync`

    Notes:

    - Please make sure you run `ng build` before running the sync command to copy all your web assets into your native projects.
    - Rememebr to update your project `.gitignore` file to exclude the compiled iOS and Android output, by adding `/iOS` and ` /Android` to the `.gitignore` at your project root folder.

You can continue to develop your web app in your Angular project as you normally would. Once the development is done, just make sure to re-build your Angular project, and run the `npx cap sync` command again to copy your latest web code to your native projects.

### Test Capacitor App

You can use the following commands to test your app on physical or virtual devices:

- For iOS: `npx cap open ios`
- For Android: `npx cap open android`

These commands will open the native project in Xcode (iOS) or Android Studio (Android). You can build and run the native app to test your web app within it.

### Build and Publish

When you are ready to publish your app, you can use Xcode and Android Studio to build native app packages (e.g., `.apk` for Android and `.ipa` for iOS).
The exact steps for building and publishing will depend on the native platform.

For iOS, you'll need to set up provisioning profiles and distribution certificates. For Android, you'll need to configure release signing keys.

### Distribution

You can distribute your app through app stores like the Apple App Store and Google Play Store or through other distribution methods, depending on your needs. Please adhere to platform-specific guidelines for app store submissions.

## Conclusion

I hope this document has provided you with a comprehensive guide on navigating within the Monorepo workspace. Whether you are creating a new Angular project within the Monorepo or venturing into the realm of Capacitor for native app development, you now should have a foundational understanding. You can continue your exploration by referring to their official websites for more details and the latest updates. Feel free to update this document as needed. Happy Coding!
