import { Component, OnInit } from '@angular/core';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "AMENTA'S KEY";

  constructor() { }

  ngOnInit() {
  }


}
