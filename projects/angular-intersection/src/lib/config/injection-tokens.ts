import { InjectionToken } from '@angular/core';

export const DEFAULT_ROOT_MARGIN_FUTURE = '-200px';

export const ROOT_MARGIN_FUTURE = new InjectionToken<string>(
  'ROOT_MARGIN_FUTURE',
  {
    providedIn: 'root',
    factory: () => DEFAULT_ROOT_MARGIN_FUTURE
  }
);

export const DEFAULT_ROOT_MARGIN_PAST = '-200px';

export const ROOT_MARGIN_PAST = new InjectionToken<string>('ROOT_MARGIN_PAST', {
  providedIn: 'root',
  factory: () => DEFAULT_ROOT_MARGIN_PAST
});

export const DEFAULT_ROOT_MARGIN_PRESENT = '0px';

export const ROOT_MARGIN_PRESENT = new InjectionToken<string>(
  'ROOT_MARGIN_PRESENT',
  {
    providedIn: 'root',
    factory: () => DEFAULT_ROOT_MARGIN_PRESENT
  }
);
