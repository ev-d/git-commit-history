import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { DEFAULT_USER_NAME, DEFAULT_USER_REPO } from '../../../../app.constants';
import { HttpService } from '../../../../core/services/http.service';


@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsPageComponent {
  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  userNameFormGroup: FormGroup = new FormGroup({
    userNameCtrl: new FormControl(),
  });

  secondFormGroup: FormGroup = new FormGroup({
    repoCtrl: new FormControl(),
  });

  repos: Array<string> = [];

  get userNameCtrl(): AbstractControl {
    return this.userNameFormGroup.get('userNameCtrl');
  }

  get repoCtrl(): AbstractControl {
    return this.secondFormGroup.get('repoCtrl');
  }

  constructor(private httpService: HttpService) {}

  getUserRepos(): void {
    const userName: string = this.userNameFormGroup.get('userNameCtrl').value;

    this.httpService.getUserRepos(userName).subscribe(
      repos => {
        repos.forEach(repo => this.repos.push(repo.name));
        this.stepper.next();
      },
      err => this.userNameCtrl.setErrors({'not_valid': true})
    );
  }

  setDefaulUserName(): void {
    this.userNameFormGroup.get('userNameCtrl').setValue(DEFAULT_USER_NAME);
    this.stepper.next();
  }

  setDefaulRepo(): void {
    this.secondFormGroup.get('repoCtrl').setValue(DEFAULT_USER_REPO);
    this.getUserRepos();
  }

  selectOnChangeHandler(): void {
    this.stepper.next();
  }

  getData(): void {
    const userName: string = this.userNameFormGroup.get('userNameCtrl').value;
    const repo: string = this.secondFormGroup.get('repoCtrl').value;

    this.httpService.getUserCommits(userName, repo).subscribe(data => console.log(data));
  }
}
