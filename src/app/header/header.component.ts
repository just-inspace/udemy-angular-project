import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Navigation } from '../shared/nav.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  constructor() { }
}
