import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // booleans 
  draweState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openedChange(e: any) {
    this.draweState = e
  }

}
