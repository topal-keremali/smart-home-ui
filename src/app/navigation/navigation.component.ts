import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {OnlineStatusService, OnlineStatusType} from "ngx-online-status";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  currentUrl = '';
  isExpanded = false;
  isShowing = false;
  intervalId;
  internetSubscription: Subscription;
  time = new Date();
  status: OnlineStatusType;
  onlineStatusCheck: any = OnlineStatusType;

  constructor(private router: Router, private onlineService: OnlineStatusService) {
    router.events.subscribe((value => {
      if (value instanceof NavigationEnd) {
        this.currentUrl = value.url;
      }
    }));
    this.internetSubscription = this.onlineService.status.subscribe((status: OnlineStatusType) => {
      this.status = status;
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.internetSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    console.log(this.status)
  }

  currentPage() {
    const page = this.currentUrl;
    if (page.includes('dashboard') || page === '/') {
      return 'Dashboard';
    } else if (page.includes('living')) {
      return 'Wohnbereich';
    } else if (page.includes('dining')) {
      return 'Essbereich';
    } else if (page.includes('kitchen')) {
      return 'Küche';
    } else if (page.includes('sleeping')) {
      return 'Schlafzimmer';
    } else if (page.includes('dress')) {
      return 'Ankleidezimmer';
    } else if (page.includes('work')) {
      return 'Arbeitszimmer';
    } else if (page.includes('bath')) {
      return 'Badezimmer';
    } else return '';
  }

  connection() {
    if (this.status === undefined)
      return true
    return this.status === OnlineStatusType.ONLINE;
  }
}
