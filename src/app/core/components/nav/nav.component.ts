import { Component } from '@angular/core';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private httpService: HttpService) {}

  getDataFromGitAPI(): void {
    this.httpService.getData().subscribe(data => console.log('data', data));
    this.httpService.getUser().subscribe(data => console.log('data 2', data));
    this.httpService.getUserRepos().subscribe(data => console.log('data 3', data));
  }
}
