[![Build Status](https://travis-ci.org/mralexandernickel/ngx-intersection.svg?branch=master)](https://travis-ci.org/mralexandernickel/ngx-intersection)
[![Coverage Status](https://coveralls.io/repos/github/mralexandernickel/ngx-intersection/badge.svg?branch=master)](https://coveralls.io/github/mralexandernickel/ngx-intersection?branch=master)
[![npm version](https://badge.fury.io/js/%40mralexandernickel%2Fngx-intersection.svg)](https://www.npmjs.com/@mralexandernickel/ngx-intersection)

# ngx-intersection

## Events

- before start ("100px", 0.0)
- start ("0px", 0.0)
- after start ("-100px", 0.0)
- before end ("100px", 1.0)
- end ("0px", 1.0)
- after end ("-100px", 1.0)

## InjectionTokens

To be able to configure the behavior of the underlying IntersectionObservers,
we are providing 5 different InjectionTokens. With these you can set the
rootMargins and the thresholds of the IntersectionObserver-Services.

Available InjectionTokens to customize the
[root-margins](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#The_intersection_root_and_root_margin)
are:

- `ROOT_MARGIN_PAST`
- `ROOT_MARGIN_PRESENT`
- `ROOT_MARGIN_FUTURE`

Available InjectionTokens to customize the
[thresholds](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Thresholds)
are:

- `THRESHOLD_START`
- `THRESHOLD_END`

To override one (or more) InjectionTokens, you can simply define the provider
inside your NgModule:

```typescript
import {
  ROOT_MARGIN_FUTURE,
  THRESHOLD_END
} from '@mralexandernickel/ngx-intersection';

@NgModule({
  // ...
  providers: [
    {
      provide: ROOT_MARGIN_FUTURE,
      useValue: '120px'
    },
    {
      provide: THRESHOLD_END,
      useValue: 0.75
    },
  ]
})
```

Allowed Values for root-margins is everything that is also allowed as CSS margin
property.

Allowed values for threshold is every number beween `0.0` and `1.0`.

More Information can be found on MDN:
[IntersectionObserver Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
