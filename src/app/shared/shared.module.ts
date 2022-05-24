import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    LayoutModule,
    MatButtonModule
  ], 
  exports: [
    NgbModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
