import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements OnInit {


  @Input() data: any = {};
  @Input() index: any = 0;


  // booleans 
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
