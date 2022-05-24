import { BreakpointObserver } from '@angular/cdk/layout';
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
  smallDevices: boolean = false;
  constructor(
    public _BreakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.smallDevices = this._BreakpointObserver.isMatched('(max-width: 767.98px)')
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
