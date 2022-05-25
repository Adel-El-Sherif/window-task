import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderDropdownComponent } from './components/header/components/header-dropdown/header-dropdown.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderDropdownComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    LayoutRoutingModule,
  
  ]
})
export class LayoutModule { }
