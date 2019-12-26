import { Component, Input } from '@angular/core';

import { CommitExtended } from '../../../../core/models/http.models';


@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  @Input() commit: CommitExtended;

  get getDate(): string {
    const date = new Date(this.commit.commit.committer.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
