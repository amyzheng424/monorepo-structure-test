import { Component } from '@angular/core';
import { faCoffee, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-font-awesome-demo',
  templateUrl: './font-awesome-demo.component.html',
  styleUrls: ['./font-awesome-demo.component.scss'],
})
export class FontAwesomeDemoComponent {
  // Note. there are two ways of using font awesome icons
  // 1. use at component level, like this case, import the icon and assign it to a local variable, then use the variable in the component template html
  // 2. use the Font Awesome icons library, register the icons at the module level (e.g. AppModule's constructor) using FaIconLibrary.addIcons() or .addIconPacks() methods.
  //    and then just directly reference the icons in the componnent templates by using icon names.
  //    The icons added to the library will be available across the Angular application.
  //    see example in app.module.ts
  coffeeIcon = faCoffee;
  sStarIcon = fasStar;
  rStarIcon = farStar;
}
