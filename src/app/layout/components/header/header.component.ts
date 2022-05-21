import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() draweState: boolean = false;
  @Output() toggleDrawer: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

}
