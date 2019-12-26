import { environment } from '../environments/environment';

import { HTTPSettings } from './app.models';

export const HTTP_Settings: HTTPSettings = {
  host: environment.backendUrl,
  gitHost: environment.gitAPIUrl,
};

export enum SHARED_ROUTES_NAMES {
  PROFILE = 'profile',
};
