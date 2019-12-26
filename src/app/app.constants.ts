import { environment } from '../environments/environment';

import { HTTPSettings } from './app.models';

export const HTTP_Settings: HTTPSettings = {
  host: environment.backendUrl,
  gitHost: environment.gitAPIUrl,
};

export enum SharedRoutesNames {
  Users = 'users',
  Repos = 'repos',
};

export const DEFAULT_USER_NAME: string = 'de-leviossa';
export const DEFAULT_USER_REPO: string = 'git-commit-history';
