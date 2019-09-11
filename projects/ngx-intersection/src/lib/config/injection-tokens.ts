import { InjectionToken } from '@angular/core';

export const DEFAULT_ROOT_MARGIN_FUTURE = '10%';
export const ROOT_MARGIN_FUTURE = new InjectionToken<string>(
  'ROOT_MARGIN_FUTURE',
  {
    providedIn: 'root',
    factory: () => DEFAULT_ROOT_MARGIN_FUTURE
  }
);

export const DEFAULT_ROOT_MARGIN_PAST = '-10%';
export const ROOT_MARGIN_PAST = new InjectionToken<string>('ROOT_MARGIN_PAST', {
  providedIn: 'root',
  factory: () => DEFAULT_ROOT_MARGIN_PAST
});

export const DEFAULT_ROOT_MARGIN_PRESENT = '0%';
export const ROOT_MARGIN_PRESENT = new InjectionToken<string>(
  'ROOT_MARGIN_PRESENT',
  {
    providedIn: 'root',
    factory: () => DEFAULT_ROOT_MARGIN_PRESENT
  }
);

export const DEFAULT_THRESHOLD_START = 0.0;
export const THRESHOLD_START = new InjectionToken<number>('THRESHOLD_START', {
  providedIn: 'root',
  factory: () => DEFAULT_THRESHOLD_START
});

export const DEFAULT_THRESHOLD_END = 1.0;
export const THRESHOLD_END = new InjectionToken<number>('THRESHOLD_END', {
  providedIn: 'root',
  factory: () => DEFAULT_THRESHOLD_END
});
