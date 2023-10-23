import { Component } from '@angular/core';
import {
  faFilm,
  faCoffee,
  faStar as fasStar,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-font-awesome-demo',
  templateUrl: './font-awesome-demo.component.html',
  styleUrls: ['./font-awesome-demo.component.scss'],
})
export class FontAwesomeDemoComponent {
  // Note. there are two ways of using font awesome icons
  // 1.  use at component level, like this case, import the icon and assign it to a local variable, then use the variable in the component template html
  // 2. use the Font Awesome icons library, register the icons at the module level,
  //    and then just directly reference the icons in the componnent templates without declaring variables for each icon in component ts file
  //    see example in app.module.ts
  coffeeIcon = faCoffee;
  filmIcon = faFilm;
  downloadIcon = faDownload;
  sStarIcon = fasStar;
  rStarIcon = farStar;
}
