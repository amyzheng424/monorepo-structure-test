import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from '../portal/components/home/home.component';
import { AboutComponent } from '../portal/components/about/about.component';
import { ContactComponent } from '../portal/components/contact/contact.component';
import { PortalDashboardComponent } from '../portal/components/portal-dashboard/portal-dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortalDashboardComponent,
  ],
  imports: [CommonModule, PortalRoutingModule],
})
export class PortalModule {}
