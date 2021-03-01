import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // link between the burger header and the navbar
  @Output() navToggle: EventEmitter<any> = new EventEmitter<boolean>();
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  navOpen(): void {
    this.navToggle.emit(true);
  }

}
