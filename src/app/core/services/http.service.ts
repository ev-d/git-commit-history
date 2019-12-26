import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HTTP_Settings } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host: string = HTTP_Settings.host;
  private gitHost: string = HTTP_Settings.gitHost;

  constructor(private http: HttpClient) { }

  getData(): Observable<void> {
    return this.http.get(this.gitHost).pipe(map(data => {
      console.log('getData from git:', data)
    }));
  }

  getUser(): Observable<void> {
    return this.http.get(`${this.gitHost}users/de-leviossa`).pipe(map(data => {
      console.log('getUser from git:', data)
    }));
  }

  getUserRepos(): Observable<void> {
    return this.http.get(`${this.gitHost}users/de-leviossa/repos`).pipe(map(data => {
      console.log('getUserRepos from git:', data)
    }));
  }
}
