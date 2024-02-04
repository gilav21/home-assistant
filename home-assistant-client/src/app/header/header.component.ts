import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {  Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  selectedMenu = signal('home');

  constructor() { }

  ngOnInit() {
      const url = window.location.href;
      console.log(url);
      const module = url.split('/').pop();
      if (!module) {
        this.selectedMenu.set('home');
      } else {
        this.selectedMenu.set(module);
      }
  }


  selectMenu(menu: string) {
    this.selectedMenu.set(menu);
  }
}


