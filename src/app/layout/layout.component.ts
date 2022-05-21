import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  // booleans 
  draweState: boolean = false;
  isOpening: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openedChange(e: any): any {
    this.draweState = e    
  }

  openedStart(): any {
    this.isOpening = true;
  }

  closedStart(): any {
    this.isOpening = false;
  }

}
