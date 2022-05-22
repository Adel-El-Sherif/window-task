import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() draweState: boolean = false;
  @Output() toggleDrawer: EventEmitter<boolean> = new EventEmitter(false);

  nav1: any[] = [

  ];

  menue: any[] = [
    { 
      title: 'Home',
      subMenue: [
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Link'
        },
        {
          title: 'Nav Long Link'
        },
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
      ]
    },
    {
      title: 'Video',
      subMenue: [
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
      ]
    },
    {
      title: 'Audio',
      subMenue: [
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
      ]
    },
    {
      title: 'Sell Media',
      subMenue: [
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
        {
          title: 'Nav Link'
        },
      ]
    },
    {
      title: 'Shop',
      subMenue: [
        {
          title: 'Link'
        },
        {
          title: 'Nav Link'
        },
      ]
    },
    {
      title: 'Elements',
      subMenue: [
        {
          title: 'Link'
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
