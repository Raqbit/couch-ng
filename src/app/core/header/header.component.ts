import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  showSettings(): Boolean {
    switch (this.router.url) {
      case '/login': return false;
    }
    return true;
  }
}
