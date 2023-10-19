import { NgModule } from '@angular/core';
import { SharedUiComponentsComponent } from './shared-ui-components.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SharedUiComponentsComponent, ButtonComponent, CardComponent],
  imports: [],
  exports: [SharedUiComponentsComponent, ButtonComponent, CardComponent],
})
export class SharedUiComponentsModule {}
