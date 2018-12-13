import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-doc-body',
  templateUrl: './doc-body.component.html',
  styleUrls: ['./doc-body.component.scss']
})
export class DocBodyComponent implements OnInit {
  public routeData: any = {};

  constructor(
    private router: Router
  ) { }

  /**
   * will be called on app init
   */
  ngOnInit() {
    this.router.events.subscribe(($$event) => {
      if ($$event instanceof NavigationEnd) {
        this.setRouteData($$event);
      }
    })
  }

  /**
   * extract route data from event
   * 
   * @param $$event - NavigationEnd
   */
  setRouteData($$event: NavigationEnd) {
    const activatedRoute = this.router.config.filter(route => `/${route.path}` === $$event.url);
    if (activatedRoute && activatedRoute.length > 0) {
      this.routeData = activatedRoute[0].data;
    }
  }
}
