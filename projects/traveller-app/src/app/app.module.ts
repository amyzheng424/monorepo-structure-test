import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedUiComponentsModule } from 'shared-ui-components';

import {
  faDownload,
  faFilm,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import {
  faAddressCard,
  faListCheck,
  faBadgeCheck,
} from '@fortawesome/pro-solid-svg-icons';

import { FontAwesomeDemoComponent } from './font-awesome-demo/font-awesome-demo.component';

@NgModule({
  declarations: [AppComponent, FontAwesomeDemoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedUiComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  library: FaIconLibrary;

  constructor(library: FaIconLibrary) {
    this.library = library;
    this.registerIcons();
  }

  private registerIcons() {
    this.library.addIcons(
      faDownload,
      faFilm,
      faMagnifyingGlass,
      faAddressCard,
      faListCheck,
      faBadgeCheck
    );
  }
}
