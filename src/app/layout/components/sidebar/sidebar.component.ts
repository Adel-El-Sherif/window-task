import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() draweState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
