import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  HTTP_Settings,
  SharedRoutesNames,
  DEFAULT_USER_NAME,
} from '../../app.constants';
import { Repository, CommitExtended } from '../models/http.models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host: string = HTTP_Settings.host;
  private gitHost: string = HTTP_Settings.gitHost;

  constructor(private http: HttpClient) { }

  getUserRepos(user: string = DEFAULT_USER_NAME): Observable<Array<Repository>> {
    return this.http
            .get<Array<Repository>>(`${this.gitHost}/${SharedRoutesNames.Users}/${user}/${SharedRoutesNames.Repos}`)
  }

  getUserCommits(user: string = DEFAULT_USER_NAME, repoName: string): Observable<CommitExtended[]> {
    return this.http.get<CommitExtended[]>(`${this.gitHost}/${SharedRoutesNames.Repos}/${user}/${repoName}/commits`);
  }
}
