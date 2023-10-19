// import { Component } from '@angular/core';

// @Component({
//   selector: 'lib-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = 'Welcome';
  @Input() description: string = 'You are awesome';
}
