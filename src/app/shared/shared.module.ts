import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
    MatButtonModule
  ], 
  exports: [
    NgbModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
