import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {
public header = 'UserList example';
public arr: string[] = [];
  constructor(private authService: AuthService, private router: Router) {
    const res = this.httpGet('https://jsonplaceholder.typicode.com/users');
    this.arr = JSON.parse(res);
  }

  httpGet(url: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
  OnDestroy() {
    this.logout();
    }

  ngOnDestroy(): void {
  }
}
