// import { Component } from '@angular/core';

// @Component({
//   selector: 'lib-button',
//   templateUrl: './button.component.html',
//   styleUrls: ['./button.component.css']
// })
// export class ButtonComponent {

// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'Go';
  @Output() clicked = new EventEmitter<void>();
}
