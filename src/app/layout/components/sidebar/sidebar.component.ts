import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() draweState: boolean = false;
  @Input() openedStart: boolean = false;

  nav1: any[] = [
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'Gaming'
    },
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'Movice'
    },
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'Sports'
    },
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'Entertainment'
    },
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'Music'
    },
    {
      icon: 'assets/media/icons/arrow-right.svg',
      title: 'TV Shows'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
