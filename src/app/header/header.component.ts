import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const toggleClasses = (
          elementId: string,
          addClass: string,
          removeClass: string
        ) => {
          const element = document.getElementById(elementId);
          if (element) {
            element.classList.add(addClass);
            element.classList.remove(removeClass);
          }
        };

        if (this.router.url === '/') {
          toggleClasses('go-to-rpj', 'd-sm-block', 'd-sm-none');
          toggleClasses('go-back', 'd-sm-none', 'd-sm-block');
        } else {
          toggleClasses('go-to-rpj', 'd-none', 'd-sm-block');
          toggleClasses('go-back', 'd-sm-block', 'd-sm-none');
        }
      });
  }

  goBack() {
    window.history.back();
  }
}
