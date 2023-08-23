import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url === "/") {
        document.getElementById("go-to-rpj")?.classList.add("d-sm-block");
        document.getElementById("go-to-rpj")?.classList.remove("d-sm-none");
        document.getElementById("go-back")?.classList.add("d-sm-none");
        document.getElementById("go-back")?.classList.remove("d-sm-block");
      } else {
        document.getElementById("go-to-rpj")?.classList.add("d-none");
        document.getElementById("go-to-rpj")?.classList.remove("d-sm-block");
        document.getElementById("go-back")?.classList.add("d-sm-block");
        document.getElementById("go-back")?.classList.remove("d-sm-none");
      }
    });
  }

  goBack() {
    window.history.back();
  }
}
